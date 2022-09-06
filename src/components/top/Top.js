import "./css/top.css";
import { Statistic } from './Statistic';
import { Spinner } from './../general/Spinner';
import { TopUser } from './TopUser';

export function Top({ mainUser, partnerUser }) {

    return (
        <div className="top">
            <TopUser mainUser={mainUser} partnerUser={partnerUser}/>
            
            <div className="top__statistic container">
                { mainUser !== undefined || mainUser !== [] || mainUser !== null ?
                <Statistic progress={mainUser.score} text={"Mój postęp"}/> :
                <Spinner/> }
                { partnerUser !== undefined || partnerUser !== [] || partnerUser !== null ?
                <Statistic progress={partnerUser.score} text={"Postęp partnera"}/> :
                <Statistic progress={0} text={"Brak danych partnera"}/> }
            </div>
        </div>
    )
}