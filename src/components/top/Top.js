import "./css/top.css";
import { UserIcon } from './../general/UserIcon';
import { Statistic } from './Statistic';
import { useUserAuth } from "./../../context/UserAuthContext";
import { TopHeader } from './TopHeader';
import { Partner } from './Partner';

export function Top({ setPartnerSearch }) {
    const { user, logOut } = useUserAuth();

    return (
        <div className="top">
            <TopHeader user={user ? user : "loading"} logOut={logOut}/>
            <div className="top-persons">
                <UserIcon user={user} image={user ? user.photoURL : ''}/>
                <Partner setPartnerSearch={setPartnerSearch}/>
            </div>
            
            <div className="top__statistic container">
                <Statistic progress={0} text={"Mój postęp"}/>
                <Statistic progress={0} text={"Postęp partnera"}/>
            </div>
        </div>
    )
}