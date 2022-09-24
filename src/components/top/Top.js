import "./css/top.css";
import { Statistic } from './Statistic';
import { Spinner } from './../general/Spinner';
import { TopUser } from './TopUser';
import { TopWindow } from './../general/TopWindow';
import { TopHeader } from './TopHeader';

const mainStatisticsPoints = (score, keys) => {
    const result = keys.length === 1 ? 0 : keys.length > 1 ?
    (score[keys[keys.length - 1]].reduce((a, b)=> parseInt(a) + parseInt(b)) / 10) - 
    (score[keys[keys.length - 2]].reduce((a, b)=> parseInt(a) + parseInt(b)) / 10) : 0;
    return result.toFixed(2);
}

export function Top({ mainUser, partnerUser, mainUserScoreKeys, partnerUserScoreKeys }) { 

    return (
        <TopWindow>
            <TopHeader/>
            <TopUser mainUser={mainUser} partnerUser={partnerUser}/>
            <div className="top__statistic container">
                { !mainUser || mainUser !== {} ?
                <Statistic progress={mainStatisticsPoints(mainUser.score, mainUserScoreKeys)} text={"Mój postęp"} symbols={true}/> :
                <Spinner/> }
                { !partnerUser || partnerUser !== {} ?
                <Statistic progress={mainStatisticsPoints(partnerUser.score, partnerUserScoreKeys)} text={"Postęp partnera"} symbols={true} /> :
                <Spinner/> }
            </div>
        </TopWindow>
    )
}