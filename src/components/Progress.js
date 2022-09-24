import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from './../context/firebase';
import { doc, getDoc } from 'firebase/firestore';

import { BottomWindow } from './general/BottomWindow';
import { TopHeader } from './top/TopHeader';
import { Title } from './general/Title';
import { LineChart } from './charts/LineChart';
import { Window } from './general/Window';
import { Text } from './general/Text';
import { TableTr } from './table/TableTr';
import { StandardTable } from './table/StandardTable';
import { TitleTable } from './table/TitleTable';

const makeAgoodObjectForChart = (keys, data) => {
    if (data) {
        const getValuesFromData = Object.values(data).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 10);
        return getValuesFromData.map( (values, index) => ({x: keys[index], y: values}));
    }
    return null
}

const makeAgoodObjectForMap = (userScore, partnerScore) => {
    const getValuesFromUser = userScore ? 
        Object.values(userScore).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 6) : "Brak danych";
    const getValuesFromPartner = partnerScore ? 
        Object.values(partnerScore).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 6) : "Brak danych";
    return getValuesFromUser.map( (values, index) => ({user: values, partner: getValuesFromPartner[index] }) );
}

export function Progress() {
    const { state } = useLocation();
    const [ question, setQuestions ] = useState([]);
    const { mainData, partnerData, mainKeys, partnerKeys } = {...state };

    useEffect(()=> {
        const getStandardQuestionsFromServerList = async () => {
            const docSnap = await getDoc(doc(db, 'users', 'ankiet'));
            if (docSnap.exists()) {
                setQuestions(docSnap.data().standard);       
            } else {      
                console.log("There is no such documnet");  
            }
        }
        return ()=> getStandardQuestionsFromServerList();
    }, []);

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
                { mainKeys.length > 0 ?
                <Text> Poniżej znajduje się porównanie waszych ostatnich odpowiedzi. </Text> : null }
                { mainKeys.length > 0 ?
                <StandardTable first={"Pytanie"} second={mainData.name} third={partnerData.name}>
                    {     
                    makeAgoodObjectForMap(mainData.score, partnerData.score).map((e, i) => (
                    <TableTr key={e.user + 1} lp={i} userScore={e.user} partnerScore={e.partner}/>
                    ))
                    }
                </StandardTable> : null }             
                    { 
                    mainData.score ?
                    question.map((e, i) => (
                        <TitleTable 
                            key={e.slice(0, 2) + i} 
                            title={e} 
                            first={mainData.name}
                            second={partnerData.name}
                            firstAnswer={mainKeys ? mainData.score[mainKeys[mainKeys.length - 1]][i] : "Brak danych"}
                            secondAnswer={partnerKeys ? partnerData.score[partnerKeys[partnerKeys.length - 1]][i] : "Brak danych"}
                        />
                    )) : null
                    }
                <span style={{fontSize: "1rem", padding: "1rem"}}>
                    <Link to="/home" className="Link" style={{fontSize: "1rem"}}> Wróć </Link> 
                </span>  
            </BottomWindow>
        </>
    )
}