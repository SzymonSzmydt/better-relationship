import { useEffect, useReducer, useCallback } from 'react';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { useUserAuth } from './../context/UserAuthContext';
import { db } from './../context/firebase';
import { Top } from './top/Top';
import { Spinner } from './general/Spinner';
import { Bottom } from './bottom/Bottom';

const initialState = {
    mainUser: {},
    partnerUser: {},
    mainUserScoreKeys: [],
    partnerUserScoreKeys: []
}

function reducer(state, action) {
    switch (action.type) {
        case 'users': 
            return {
                ...state,
                [action.field]: action.payload
            }
        case 'usersScore':
            return {
                ...state,
                [action.field]: Object.keys(action.payload)
            } 
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

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
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { mainUser, partnerUser, mainUserScoreKeys, partnerUserScoreKeys } = state;

    const getUserFromServerList = useCallback(async () => {
        const docSnap = await getDoc(doc(db, 'users', 'allUsers'));
        if (docSnap.exists()) {
            docSnap.data()[user.email] ?
            dispatch({ 
                type: 'users', 
                field: 'mainUser',
                payload: docSnap.data()[user.email]
            }) :
            addUserToServerList(user);
            dispatch({ 
                type: 'usersScore', 
                field: 'mainUserScoreKeys',
                payload: docSnap.data()[user.email].score
            });
            const partner = docSnap.data()[user.email].partner;
            if (partner) {
                dispatch({ 
                    type: 'users', 
                    field: 'partnerUser',
                    payload: docSnap.data()[partner]
                });
                dispatch({ 
                    type: 'usersScore', 
                    field: 'partnerUserScoreKeys',
                    payload: docSnap.data()[partner].score
                });
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