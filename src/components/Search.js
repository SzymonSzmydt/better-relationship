import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './../context/firebase';
import { useUserAuth } from './../context/UserAuthContext';

import { Text } from './general/Text';
import { Title } from './general/Title';
import { Spinner } from './general/Spinner';
import { TopHeader } from './top/TopHeader';

export function Search() {
    const [ usersFromServer, setUsersFromServer ] = useState([]);
    const [ inputTyping, setInputTyping ] = useState('');
    const [ searchingEmail, setSearchingEmail ] = useState([]);
    const { user, logOut } = useUserAuth(); 
    const navigate = useNavigate();

    useEffect(()=> {
        const getUserFromServerList = async () => {
            const docSnap = await getDoc(doc(db, 'users', 'allUsers'));

            if (docSnap.exists()) {
                setUsersFromServer(docSnap.data());
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }
        return ()=> getUserFromServerList();
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
            }
         }, {merge: true});
         await setDoc(doc(db, 'users', 'allUsers'), {
            [element] : {
                partner: user.email
            }
         }, {merge: true});
         navigate("/home", {replace: true});
    }, [user.email, navigate]);

    return (
        usersFromServer ?
        <div className="bottom" style={{marginTop: "5rem"}}>
             <TopHeader 
                user={user ? user : "loading"} 
                logOut={logOut}
                style={{backgroundColor: "var(--gradient-dark)"}}
                />

            <Title>Znajdź partnera</Title>
            <Text>
                Razem łatwiej pokonacie trudności.
            </Text>
            <div>
                <form className="form">
                    <label>
                        Wyszukaj email partnera (min. 4 znaki): 
                    </label>
                    <input type="email" value={inputTyping} onChange={(e)=> setInputTyping(state => (e.target.value))}/>
                    <button className="facebook" onClick={e => handleSearchButton(e) }>Szukaj</button>
                    <button className="facebook" style={{marginTop: "0"}} onClick={() => navigate("/home") }>Anuluj</button>
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
            </div>        
        </div>
        : <Spinner/>
    )
}