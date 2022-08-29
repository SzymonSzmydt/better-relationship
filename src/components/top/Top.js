import "./css/top.css";
import { UserIcon } from './../general/UserIcon';
import { Title } from './../general/Title';
import { Statistic } from './Statistic';
import { useState } from 'react';
import { useUserAuth } from "./../../context/UserAuthContext";
import { TopHeader } from './TopHeader';

export function Top() {
    const { user, logOut } = useUserAuth();

    return (
        <div className="top">
            <TopHeader user={user ? user : "loading"} logOut={logOut}/>
            <UserIcon image={user ? user.photoURL : ' '}/>
            <Title>{ user ? user.displayName.split(' ', 1) : " " }</Title>
            <div className="top__statistic container">
                <Statistic progress={0} text={"Ja"}/>
                <Statistic progress={0} text={"Partner"}/>
            </div>
        </div>
    )
}