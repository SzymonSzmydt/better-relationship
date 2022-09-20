import { useEffect, useState } from 'react';
import { db } from './../context/firebase';
import { doc, getDoc } from 'firebase/firestore';

import { useUserAuth } from './../context/UserAuthContext';
import { Title } from './general/Title';
import { Text } from './general/Text';
import { Question } from './Question';
import { TopHeader } from './top/TopHeader';
import { Statistic } from './top/Statistic';
import { BarChart } from './general/BarChart';
import { TopWindow } from './general/TopWindow';
import { Spinner } from './general/Spinner';

export function Ankiet() {
    const { user } = useUserAuth(); 
    const [ question, setQuestions ] = useState([]);
    const [ questionNumber, setQuestionNumber ] = useState(1);
    const [ score, setScore ] = useState([]);

    useEffect(()=> {
        const getQuestionsFromServerList = async () => {
            const docSnap = await getDoc(doc(db, 'users', 'ankiet'));

            if (docSnap.exists()) {
                setQuestions(docSnap.data().standard);       
            } else {      
                console.log("There is no such documnet");  
            }
        }
        return ()=> getQuestionsFromServerList();
    }, []);

    return (
        <>
            <TopWindow>
                <TopHeader />
                { question ? questionNumber === 1 ?
                <div style={{padding: "0 1rem"}}>
                    <Title color={"var(--color-facebook)"}> Odpowiedz na pytania</Title>
                    <Text>
                        <i>
                            „Jeśli mówisz prawdę, nie musisz niczego pamiętać.”. &nbsp; Mark Twain
                        </i>
                    </Text>
                </div> :
                <div className="ankiet__chart-box">
                    <BarChart score={score}/>
                </div> :
                <Spinner/>
                }
                
                <div className="top__statistic container">
                    <Statistic progress={questionNumber} text={"nr pytania"}/>
                    <Statistic progress={question.length} text={"ilość pytań"}/>
                </div>
            </TopWindow>
            <Question 
                question={question} 
                questionNumber={questionNumber} 
                setQuestionNumber={setQuestionNumber}
                user={user}
                score={score}
                setScore={setScore}
            />
        </>
    )
}