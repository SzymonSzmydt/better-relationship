import "./css/top.css";
import { Statistic } from './Statistic';
import { Spinner } from './../general/Spinner';
import { TopUser } from './TopUser';

export function Top({ mainUser, partnerUser }) {

    return (
        <div className="top">
            <TopUser mainUser={mainUser} partnerUser={partnerUser}/>
            <div className="top__statistic container">
                { !mainUser || mainUser !== {} ?
                <Statistic progress={0} text={"Mój postęp"} symbols={true}/> :
                <Spinner/> }
                { !partnerUser || partnerUser !== {} ?
                <Statistic progress={0} text={"Postęp partnera"} /> :
                <Statistic progress={0} text={"Brak danych partnera"}/> }
            </div>
        </div>
    )
}