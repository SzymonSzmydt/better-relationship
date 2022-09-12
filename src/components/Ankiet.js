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

const data = [9, 8.5, 7, 3, 4.5, 2];

export function Ankiet() {
    const { user, logOut } = useUserAuth(); 
    const [ question, setQuestions ] = useState([]);
    const [ questionNumber, setQuestionNumber ] = useState(1);

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
            <div className="top">
                <TopHeader logOut={logOut}/>
                {/* <Title> Odpowiedz na pytania</Title> */}
                {/* <Text>
                    <i>
                        „Jeśli mówisz prawdę, nie musisz niczego pamiętać.”. &nbsp; Mark Twain
                    </i>
                </Text> */}
                <BarChart score={data} title={'Punktacja'}/>
                <div className="top__statistic container">
                    <Statistic progress={questionNumber} text={"nr pytania"}/>
                    <Statistic progress={question.length} text={"ilość pytań"}/>
                </div>
            </div>
            <Question 
                question={question} 
                questionNumber={questionNumber} 
                setQuestionNumber={setQuestionNumber}
                user={user}
            />
        </>
    )
}