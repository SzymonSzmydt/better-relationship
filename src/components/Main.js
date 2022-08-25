import { Top } from './top/Top';
import { Bottom } from './bottom/Bottom';
import { useState } from 'react';

const firestoreUser = {
    name: "Szymon",
    gender: 'male',
    score: 0
}

export function Main() {
    const [ userData, setUserData ] = useState(firestoreUser);
    const userGender = userData.gender === 'male' ? "Jego" : "Jej";

    return (
        <>
            <Top name={userData.name} progress={0} gender={userGender}/>
            <Bottom gender={userGender}/>
        </>
    )
}