import { Top } from './top/Top';
import { Bottom } from './bottom/Bottom';
import { Search } from './Search';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useUserAuth } from './../context/UserAuthContext';
import { db } from './../context/firebase';
import { useEffect, useCallback, useState } from 'react';
import { Spinner } from './general/Spinner';


export function Main() {
    const { user } = useUserAuth(); 
    const [ userData, setUserData ] = useState([]);
    const [ partnerSearch, setPartnerSearch ] = useState(false);
    const [ newUser, setNewUser ] = useState(false);

    useEffect(() => {
        const addUserToServerList = async () => {
            await setDoc(doc(db, 'users', 'allUsers'), {
                [user.email] : {
                    name: user.displayName,
                    score: 0,
                    partner: false
                }
             });
        }
        return ()=> addUserToServerList();
    }, [newUser]);

    useEffect(()=> {
        const getUserFromServerList = async () => {
            const docSnap = await getDoc(doc(db, 'users', 'allUsers'));

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setUserData(docSnap.data());
            } else {
                setNewUser(true);          
            }
        }
        return ()=> getUserFromServerList();
    }, []);

    console.log("userData ", userData);

    return (
         userData ? 
         <>
            <Top setPartnerSearch={setPartnerSearch}/>    
            { partnerSearch ? <Search/> : <Bottom /> }
        </> : 
        <Spinner/>
    )
}