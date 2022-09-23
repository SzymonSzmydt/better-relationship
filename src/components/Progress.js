import { useLocation, Link } from 'react-router-dom';

import { BottomWindow } from './general/BottomWindow';
import { TopHeader } from './top/TopHeader';
import { Title } from './general/Title';
import { LineChart } from './charts/LineChart';
import { Window } from './general/Window';
import { Text } from './general/Text';
import { TableTr } from './table/TableTr';
import { StandardTable } from './table/StandardTable';

const makeAgoodObjectForChart = (keys, data) => {
    if (data) {
        const getValuesFromData = Object.values(data).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 10);
        return getValuesFromData.map( (values, index) => ({x: keys[index], y: values}));
    }
    return null
}

const makeAgoodObjectForMap = (userScore, partnerScore) => {
    if (userScore.length > 0) {
        const getValuesFromUser = Object.values(userScore).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 10);
        const getValuesFromPartner = Object.values(partnerScore).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 10);
        return getValuesFromUser.map( (values, index) => ({user: values, partner: getValuesFromPartner[index]}));
    }
    return {user: "brak danych", partner: "brak danych"}
}

export function Progress() {
    const { state } = useLocation();
    const { mainData, partnerData, mainKeys, partnerKeys } = {...state };

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
                        userData={makeAgoodObjectForChart( mainKeys, mainData.score )}
                        partnerData={makeAgoodObjectForChart( partnerKeys, partnerData.score )}
                        />
                </Window>
                <Text> Poniżej znajduje się uśredniona wartość waszych odpowiedzi z badań. </Text>
                <StandardTable first={"Numer badania"} second={mainData.name} third={partnerData.name}>
                    {
                    mainData.score.length > 0 ? 
                    makeAgoodObjectForMap(mainData.score, partnerData.score).map((e, i) => (
                    <TableTr/>
                    )) : null
                    }
                </StandardTable>
                <span style={{fontSize: "1rem", paddingTop: "1rem"}}>
                    <Link to="/home" className="Link" style={{fontSize: "1rem"}}> Wróć </Link> 
                </span>     
            </BottomWindow>
        </>
    )
}