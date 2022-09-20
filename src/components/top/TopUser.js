import { TopHeader } from './TopHeader';
import { Partner } from './Partner';
import { UserIcon } from './../general/UserIcon';
import { useUserAuth } from "./../../context/UserAuthContext";

export function TopUser({ mainUser, partnerUser }) {
    const { user } = useUserAuth();

    return (
        <>
            <TopHeader />
            <div className="top-persons">
                <UserIcon user={mainUser.name} image={user ? user.photoURL : ''}/>
                { !mainUser.partner ? <Partner/> :
                 <UserIcon user={partnerUser ? partnerUser.name : ''} image={partnerUser ? partnerUser.image : ""}/>
                  }
            </div>
        </>
    )
}
