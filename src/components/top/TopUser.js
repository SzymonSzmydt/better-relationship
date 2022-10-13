import { Partner } from './Partner';
import { UserIcon } from './../general/UserIcon';
import { useUserAuth } from "./../../context/UserAuthContext";

export function TopUser({ mainUser, partnerUser }) {
    const { user } = useUserAuth();

    return (
        <>
            <section className="top-user">
                <UserIcon user={user.displayName} image={user ? user.photoURL : ''}/>
                { !mainUser.partner ? <Partner/> :
                 <UserIcon user={partnerUser ? partnerUser.name : ''} image={partnerUser ? partnerUser.image : ""}/>
                  }
            </section>
        </>
    )
}
