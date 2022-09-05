import { Top } from './top/Top';
import { Bottom } from './bottom/Bottom';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useUserAuth } from './../context/UserAuthContext';
import { db } from './../context/firebase';
import { useEffect, useState, useCallback } from 'react';
import { Spinner } from './general/Spinner';

export function Main() {
    const { user } = useUserAuth(); 
    const [ userData, setUserData ] = useState([]);

    const addUserToServerList = useCallback(async () => {
        await setDoc(doc(db, 'users', 'allUsers'), {
            [user.email] : {
                name: user.displayName,
                score: 0,
                partner: ''
            }
         }, {merge: true});
    }, [user.email, user.displayName]);

    useEffect(()=> {
        const getUserFromServerList = async () => {
            const docSnap = await getDoc(doc(db, 'users', 'allUsers'));

            if (docSnap.exists()) {
                docSnap.data()[user.email] ? setUserData(docSnap.data()[user.email]) :
                addUserToServerList();                       
            } else {      
                console.log("There is no such documnet");  
            }
        }
        return ()=> getUserFromServerList();
    }, [user.email, addUserToServerList]);

    console.log("userData ", userData);

    return ( userData ? 
         <>
            <Top/>    
            <Bottom/> 
        </> :
        <Spinner/>
        )
}