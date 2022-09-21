import { BottomWindow } from './general/BottomWindow';
import { TopHeader } from './top/TopHeader';
import { Title } from './general/Title';
import { LineChart } from './general/LineChart';
import { Window } from './general/Window';
import { useLocation, Link } from 'react-router-dom';
import { Text } from './general/Text';

const makeAgoodObjectForChart = (keys, data) => {
    const getValuesFromData = Object.values(data).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 10);
    return getValuesFromData.map( (values, index) => ({x: keys[index], y: values}));
}

const makeAgoodObjectForMap = (userScore, partnerScore) => {
    const getValuesFromUser = Object.values(userScore).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 10);
    const getValuesFromPartner = Object.values(partnerScore).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 10);
    return getValuesFromUser.map( (values, index) => ({user: values, partner: getValuesFromPartner[index]}));
}

export function Progress() {
    const { state } = useLocation();
    const { user, partner, mainKeys, partnerKeys } = {...state };

    return (
        <>
            <TopHeader style={{position: "static", backgroundColor: "var(--gradient-dark)"}}/>
            <BottomWindow>
                <Title> Tak wyglądają Twoje postępy </Title>
                <Text>
                    Wraz z upływem czasu pojawi się tutaj więcej danych. Zobaczysz jak 
                    zmienia się wasze wspólne życie.
                </Text>
                <Window>
                    <LineChart 
                        userData={makeAgoodObjectForChart( mainKeys, user.score )}
                        partnerData={makeAgoodObjectForChart( partnerKeys, partner.score )}
                        />
                </Window>
                <Text> Poniżej znajduje się uśredniona wartość waszych odpowiedzi z badań. </Text>
                <table className="table">
                    <thead>
                        <tr>
                            <td className="table-td td-bg"> <b>Numer badania</b> </td>
                            <td className="table-td td-bg" style={{color: "var(--color-btn-category)"}}> { user.name } </td>
                            <td className="table-td td-bg" style={{color: "var(--gradient-dark)"}}> { partner.name }</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    makeAgoodObjectForMap(user.score, partner.score).map((e, i) => (
                        <tr key={e + i}>
                            <td className="table-td"> { i + 1 } </td>
                            <td className="table-td"> { e.user } </td>
                            <td className="table-td"> { e.partner } </td>
                        </tr>
                    ))
                    } 
                    </tbody>
                </table>
                <span style={{fontSize: "1rem", paddingTop: "1rem"}}>
                    <Link to="/home" className="Link" style={{fontSize: "1rem"}}> Wróć </Link> 
                </span>     
            </BottomWindow>
        </>
    )
}