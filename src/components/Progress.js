import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import { db } from './../context/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { BottomWindow } from './general/BottomWindow';
import { TopHeader } from './top/TopHeader';
import { LineChart } from './charts/LineChart';
import { Text } from './general/Text';
import { Tbody } from './table/Tbody';
import { StandardTable } from './table/StandardTable';
import { TitleTable } from './table/TitleTable';
import { TopWindow } from './top/TopWindow';

const makeAgoodObjectForChart = (data) => {
    if (data) {
        const getValuesFromData = Object.values(data).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => (e / 6));
        return getValuesFromData.map( (values, index) => ({x: index + 1, y: Number(values.toFixed(1)) }));
    }
    return null
}
const getValuesFromUser = (data) => data ? 
Object.values(data).map( e => e.reduce((a, b) => parseFloat(a) + parseFloat(b))).map( e => e / 6) : 0;
const makeAgoodObjectForMap = (userScore, partnerScore) => {
    const one = getValuesFromUser(userScore);
    const two = getValuesFromUser(partnerScore);
    return Array.from({length: one.length}, (_, index) => ({user: one[index], partner: two[index] }) );
}
export function Progress() {
    const { state } = useLocation();
    const [ question, setQuestions ] = useState([]);
    const { mainData, partnerData, mainKeys, partnerKeys } = {...state };
    const getStandardQuestionsFromServerList = useCallback(async () => {
        const docSnap = await getDoc(doc(db, 'users', 'ankiet'));
        if (docSnap.exists()) {
            setQuestions(docSnap.data().standard);       
        } else {      
            console.log("There is no such documnet");  
        }
    }, []);
    useEffect(()=> {
        getStandardQuestionsFromServerList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>     
            <TopHeader/>
            <TopWindow> 
                <section className="legend">
                    <span className="legend__line-one">{mainData.name.split(' ', 1)}</span>
                    <span className="legend__line-two">{partnerData.name.split(' ', 1)}</span>
                </section>
                <LineChart 
                    userData={makeAgoodObjectForChart( mainData.score )}
                    partnerData={makeAgoodObjectForChart( partnerData.score )}
                    />
            </TopWindow>
            <BottomWindow>
                { mainKeys.length > 0 ?
                <Text> Poniżej znajduje się porównanie waszych ostatnich odpowiedzi. </Text> : null }
                { mainKeys.length > 0 ?
                <StandardTable text={"nr testu"} second={mainData.name} third={partnerData.name}>
                    {     
                    makeAgoodObjectForMap(mainData.score, partnerData.score).map((e, i) => (
                    <Tbody key={e.user + 1} lp={i} userScore={e.user} partnerScore={e.partner}/>
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
                            firstAnswer={mainKeys.length > 0 ? mainData.score[mainKeys[mainKeys.length - 1]][i] : "Brak danych"}
                            secondAnswer={partnerKeys.length > 0 ? partnerData.score[partnerKeys[partnerKeys.length - 1]][i] : "Brak danych"}
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