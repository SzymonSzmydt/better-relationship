import "./css/top.css";
import { UserIcon } from './../general/UserIcon';
import { Title } from './../general/Title';
import { Statistic } from './Statistic';
import { useState } from 'react';
import { useUserAuth } from "./../../context/UserAuthContext";

export function Top({ name, progress, gender }) {
    const { user, logOut } = useUserAuth();

    console.log("user ", user);

    const handleLogOut = async() => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="top">
            <span className="material-symbols-outlined settings-icon" 
                style={{color: !user ? "var(--color-green)" : "var(--color-error)"}}
                onClick={handleLogOut} 
            >
                power_settings_new
            </span>
            <UserIcon/>
            <Title>{ name }</Title>
            <div className="top__statistic container">
                <Statistic progress={progress} text={"Moja ocena"}/>
                <Statistic progress={progress} text={`${gender} ocena`}/>
            </div>
        </div>
    )
}