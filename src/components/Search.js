import { Text } from './general/Text';
import { Title } from './general/Title';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './../context/firebase';
import { useEffect, useState, useCallback } from 'react';
import { Spinner } from './general/Spinner';

export function Search() {
    const [ usersFromServer, setUsersFromServer ] = useState([]);
    const [ inputTyping, setInputTyping ] = useState('');
    const [ searchingEmail, setSearchingEmail ] = useState([]);

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

    const handleSearch = useCallback((e)=> {
        e.preventDefault();
        const data = Object.keys(usersFromServer);
        setSearchingEmail(data.filter(e => e.match(inputTyping)))
    }, [inputTyping, usersFromServer]);


    return (
        usersFromServer ?
        <div className="bottom">
            <Title>Znajdź partnera</Title>
            <Text>
                Razem łatwiej pokonacie trudności.
            </Text>
            <form className="form">
                <label>
                    Wpisz email partnera / partnerki: 
                </label>
                <input type="email" value={inputTyping} onChange={(e)=> setInputTyping(state => (e.target.value))}/>
                <button className="facebook" onClick={e => handleSearch(e) }>Szukaj</button>
            </form>  
            <div className="search__results form">
                <ul>
                    { searchingEmail ? searchingEmail.map((element, index) => 
                        <li key={index}> {element } </li>) : null }
                </ul>
                
            </div>
        </div>
        : <Spinner/>
    )
}