import { useState } from 'react';
import { useUserAuth } from './../context/UserAuthContext';
import { Title } from './general/Title';
import { Text } from './general/Text';
import { Question } from './Question';
import { Statistic } from './top/Statistic';
import { BarChart } from './charts/BarChart';
import { TopWindow } from './top/TopWindow';
import { Spinner } from './general/Spinner';

const data = [
    "Czy czujesz się wysłuchana (-y)",
    "Czy ilość rozmów była wystarczająca w ostatnim czasie ?",
    "Czy tematy o których rozmawiacie są ciekawe ?",
    "Czy ilość randek była odpowiednia w ostatnim czasie ?",
    "Jak oceniasz sex w swoim związku ?",
    "Czy flirt wplatany jest wystarczająco często ?"
];

export function Ankiet() {
    const { user } = useUserAuth(); 
    const [ question ] = useState(data);
    const [ questionNumber, setQuestionNumber ] = useState(1);
    const [ score, setScore ] = useState([]);

    return (
        <>
            <TopWindow>
                { question ? questionNumber === 1 ?
                <div className="container" style={{padding: "0 1rem"}}>
                    <Title color={"var(--stat-score)"}> Odpowiedz na pytania</Title>
                    <Text>
                        <em>
                            „Jeśli mówisz prawdę, nie musisz niczego pamiętać” 
                        </em>
                    </Text>
                    <Text align={"right"} color={"var(--stat-score)"} >Mark Twain</Text>         
                </div> :
                <div className="ankiet__chart-box">
                    <BarChart score={score}/>
                </div> :
                <Spinner/>
                }
            </TopWindow>
            <div className="top__statistic container">
                <Statistic progress={questionNumber} text={"nr pytania"}/>
                <Statistic progress={question.length} text={"ilość pytań"}/>
            </div>
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