import { useEffect, useState, useCallback } from 'react';

import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useUserAuth } from './../context/UserAuthContext';
import { db } from './../context/firebase';

import { Top } from './top/Top';
import { Spinner } from './general/Spinner';
import { Bottom } from './bottom/Bottom';
import { Ankiet } from './bottom/Ankiet';

export function Main() {
    const { user } = useUserAuth(); 
    const [ mainUser, setMainUser ] = useState([]);
    const [ partnerUser, setPartnerUser ] = useState([]);

    const addUserToServerList = useCallback(async () => {
        await setDoc(doc(db, 'users', 'allUsers'), {
            [user.email] : {
                name: user.displayName,
                image: user.photoURL,
                partner: '',
                score: []
            }
         }, {merge: true});
    }, [user.email, user.displayName, user.photoURL]);

    useEffect(()=> {
        const getUserFromServerList = async () => {
            const docSnap = await getDoc(doc(db, 'users', 'allUsers'));

            if (docSnap.exists()) {
                docSnap.data()[user.email] ?
                setMainUser(docSnap.data()[user.email]) :
                addUserToServerList();
                if (docSnap.data()[user.email].partner) {
                    let partner = docSnap.data()[user.email].partner;
                    setPartnerUser(docSnap.data()[partner]);
                }              
            } else {      
                console.log("There is no such documnet");  
            }
        }
        return ()=> getUserFromServerList();
    }, [user.email, addUserToServerList]);

    console.log("mainUser ", mainUser);
    console.log("partnerUser ", partnerUser);
    return ( mainUser ? 
         <>
            {/* <Top mainUser={mainUser} partnerUser={partnerUser}/>    
            <Bottom/> */}
            <Ankiet mainUser={mainUser} partnerUser={partnerUser}/>
        </> :
        <Spinner/>
        )
}