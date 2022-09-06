import { TopHeader } from './TopHeader';
import { Partner } from './Partner';
import { UserIcon } from './../general/UserIcon';
import { useUserAuth } from "./../../context/UserAuthContext";

export function TopUser({ mainUser, partnerUser }) {
    const { user, logOut } = useUserAuth();
    return (
        <>
            <TopHeader user={user ? user : "loading"} logOut={logOut}/>
            <div className="top-persons">
                <UserIcon user={user} image={user ? user.photoURL : ''}/>
                { partnerUser ? 
                 <Partner/> : 
                 <UserIcon user={partnerUser.name} image={partnerUser.image}/> }
            </div>
        </>
    )
}
