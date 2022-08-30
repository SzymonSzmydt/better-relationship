import { Top } from './top/Top';
import { Bottom } from './bottom/Bottom';
import { Search } from './Search';
import { setDoc, doc } from 'firebase/firestore';
import { useUserAuth } from './../context/UserAuthContext';
import { db } from './../context/firebase';
import { useEffect } from 'react';



export function Main() {
    const { user } = useUserAuth();

    useEffect(()=> {
        const addUserToServerList = async () => {
            await setDoc(doc(db, 'users', 'allUsers'), {
                [user.email] : {
                    name: user.displayName,
                    }      
                }, 
                { merge: true });
        }
        return ()=> addUserToServerList();
    }, [user]);

    return (
        <>
            <Top />
            <Bottom />
            {/* <Search/> */}
        </>
    )
}