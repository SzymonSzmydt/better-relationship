import "./css/top.css";
import { UserIcon } from './../general/UserIcon';
import { Title } from './../general/Title';
import { Statistic } from './Statistic';
import { useState } from 'react';

export function Top({ name, progress, gender }) {

    return (
        <div className="top">
            <span class="material-symbols-outlined settings-icon">settings</span>
            <UserIcon/>
            <Title>{ name }</Title>
            <div className="top__statistic container">
                <Statistic progress={progress} text={"Moja ocena"}/>
                <Statistic progress={progress} text={`${gender} ocena`}/>
            </div>
        </div>
    )
}