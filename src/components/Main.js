import { useEffect, useState, useCallback } from 'react';

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
            partner: false,
            score: false
        }
     }, {merge: true});
}

export function Main() {
    const { user } = useUserAuth(); 
    const [ mainUser, setMainUser ] = useState({});
    const [ partnerUser, setPartnerUser ] = useState({});
    const [ mainUserScoreKeys, setMainUserScoreKeys ] = useState([]);
    const [ partnerUserScoreKeys, setPartnerUserScoreKeys ] = useState([]);

    const getUserFromServerList = useCallback(async () => {
        const docSnap = await getDoc(doc(db, 'users', 'allUsers'));
        if (docSnap.exists()) {
            docSnap.data()[user.email] ?
            setMainUser(docSnap.data()[user.email]) :
            addUserToServerList(user);
            setMainUserScoreKeys(Object.keys(docSnap.data()[user.email].score));
            const partner = docSnap.data()[user.email].partner;
            if (partner) {
                setPartnerUser(docSnap.data()[partner]);
                setPartnerUserScoreKeys(Object.keys(docSnap.data()[partner].score));
            }              
        } else {      
            console.log("There is no such documnet");  
        }
        window.sessionStorage.removeItem("loading");
    }, []);
    
    useEffect(()=> {
        getUserFromServerList();
    }, []);

    return ( mainUser ? 
         <>
            <Top 
                mainUser={mainUser} 
                partnerUser={partnerUser} 
                mainUserScoreKeys={mainUserScoreKeys} 
                partnerUserScoreKeys={partnerUserScoreKeys}
            />    
            <Bottom
                mainUser={mainUser} 
                partnerUser={partnerUser} 
                mainUserScoreKeys={mainUserScoreKeys} 
                partnerUserScoreKeys={partnerUserScoreKeys}
            />
        </> :
        <Spinner/>
        )
}