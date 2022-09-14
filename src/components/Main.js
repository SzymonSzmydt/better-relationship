import { useEffect, useState } from 'react';

import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useUserAuth } from './../context/UserAuthContext';
import { db } from './../context/firebase';

import { Top } from './top/Top';
import { Spinner } from './general/Spinner';
import { Bottom } from './bottom/Bottom';

const addUserToServerList = async(user) => {
    await setDoc(doc(db, 'users', 'allUsers'), {
        [user.email] : {
            name: user.displayName,
            image: user.photoURL,
            partner: '',
            score: []
        }
     }, {merge: true});
}

export function Main() {
    const { user } = useUserAuth(); 
    const [ mainUser, setMainUser ] = useState({});
    const [ partnerUser, setPartnerUser ] = useState({});

    useEffect(()=> {
        const getUserFromServerList = async () => {
            const docSnap = await getDoc(doc(db, 'users', 'allUsers'));

            if (docSnap.exists()) {
                docSnap.data()[user.email] ?
                setMainUser(docSnap.data()[user.email]) :
                addUserToServerList(user);
                const partner = docSnap.data()[user.email].partner;
                if (partner) {
                    setPartnerUser(docSnap.data()[partner]);
                }              
            } else {      
                console.log("There is no such documnet");  
            }
        }
        return ()=> getUserFromServerList();
    }, []);

    return ( mainUser ? 
         <>
            <Top mainUser={mainUser} partnerUser={partnerUser}/>    
            <Bottom/>
        </> :
        <Spinner/>
        )
}