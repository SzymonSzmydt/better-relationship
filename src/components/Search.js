import { useEffect, useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './../context/firebase';
import { useUserAuth } from './../context/UserAuthContext';

import { Text } from './general/Text';
import { Title } from './general/Title';
import { Spinner } from './general/Spinner';
import { BottomWindow } from './general/BottomWindow';
import { TopWindow } from './top/TopWindow';

export function Search() {
    const [ usersFromServer, setUsersFromServer ] = useState([]);
    const [ inputTyping, setInputTyping ] = useState('');
    const [ searchingEmail, setSearchingEmail ] = useState([]);
    const { user } = useUserAuth(); 
    const navigate = useNavigate();

    const getUserFromServerList = useCallback(async () => {
        const docSnap = await getDoc(doc(db, 'users', 'allUsers'));

        if (docSnap.exists()) {
            setUsersFromServer(docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }, []);

    useEffect(()=> {
        getUserFromServerList();
    }, []);

    const handleSearchButton = useCallback((e)=> {
        e.preventDefault();
        if (inputTyping.length > 3) {
            const data = Object.keys(usersFromServer);
            setSearchingEmail(data.filter(e => e.match(inputTyping)))
        }
        else return null
    }, [inputTyping, usersFromServer]);

    const handlePartnerSelection = useCallback( async(element) => {
        await setDoc(doc(db, 'users', 'allUsers'), {
            [user.email] : {
                partner: element
            },
            [element] : {
                partner: user.email
            }
         }, {merge: true});
         navigate("/home");
    }, [user.email, navigate]);

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/home")
    }

    return (
        usersFromServer ?
        <>
        <TopWindow>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Title>Znajdź partnera</Title>
                <Text>
                    Razem łatwiej pokonacie trudności.
                </Text>
            </div>
        </TopWindow>
        <BottomWindow style={{marginTop: "5rem"}}>  
            <div style={{textAlign: "center"}}>
                <form className="form">
                    <label>
                        Wyszukaj adres email partnera (min. 4 znaki): 
                    </label>
                    <input type="email" value={inputTyping} onChange={(e)=> setInputTyping(state => (e.target.value))}/>
                    <button className="facebook" onClick={e => handleSearchButton(e) }>Szukaj</button>
                    <button className="facebook" style={{marginTop: "0"}} onClick={(e) => handleCancel(e)}>Anuluj</button>
                </form>  
                <div className="search__results">
                    <ul>
                        { searchingEmail ? searchingEmail.map((element, index) => 
                            <li 
                                className="search__result-li" 
                                key={index}
                                onClick={() => handlePartnerSelection(element)} 
                            > 
                                {element } 
                            </li>) : null }
                    </ul>
                </div>
                <span style={{fontSize: "1rem", padding: "1rem"}}>
                    <Link to="/home" className="Link" style={{fontSize: "1rem"}}> Wróć </Link> 
                </span>    
            </div>        
        </BottomWindow>
        </>
        : <Spinner/>
    )
}