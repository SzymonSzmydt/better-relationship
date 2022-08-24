import "./css/top.css";
import { UserIcon } from './../general/UserIcon';
import { Title } from './../general/Title';
import { Statistic } from './Statistic';
import { useState } from 'react';

export function Top({ name, progress, gender }) {

    return (
        <div className="top">
            <UserIcon/>
            <Title>{ name }</Title>
            <div className="top__statistic container">
                <Statistic progress={progress} text={"Mój postęp"}/>
                <Statistic progress={progress} text={`${gender} postęp`}/>
            </div>
        </div>
    )
}