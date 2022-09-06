import { Title } from './../general/Title';
import { Text } from './../general/Text';
import { TopUser } from './../top/TopUser';
import { Statistic } from './../top/Statistic';

export function Ankiet({ mainUser, partnerUser }) {

    return (
        <>
            <div className="bottom">
                <Title> Odpowiedz na pytania</Title>
                <Text>
                    <em style={{fontWeight: "500"}}>„Jeśli mówisz prawdę, nie musisz niczego pamiętać.”. Mark Twain</em>
                </Text>

            </div>
        </>
    )
}