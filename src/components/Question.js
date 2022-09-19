import { useCallback, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Title } from './general/Title';
import { db } from './../context/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { BottomWindow } from './general/BottomWindow';

const addScoreToServer = async (user, score) => {
    const date = new Date().toLocaleDateString();
    await setDoc(doc(db, 'users', 'allUsers'), {
        [user.email] : {
            "score": {
                [date] : score
            }            
        }
     }, {merge: true});
}

export function Question({ score, setScore, question, setQuestionNumber, questionNumber, user }) {
    const navigate = useNavigate();
    const [ range, setRange ] = useState(0);

    const handleNextButton = useCallback(()=> {
        setScore([...score, range]);
        setQuestionNumber(state => state + 1);
       if (questionNumber > question.length) {
            addScoreToServer(user, score);
            navigate("/home");
        }
        setRange(0);
    }, [user, score, range, setScore, navigate, setQuestionNumber, questionNumber, question.length]);

    return (
        <BottomWindow>
            <div className="title-box">
                <Title align={"center"}> 
                    <em className="em"> { questionNumber > question.length ? "To już wszystkie pytania" : 
                    questionNumber + '. ' + question[questionNumber - 1] } </em>
                </Title>    

            </div>
            <div className="window-box" style={{visibility: questionNumber > question.length ? "hidden" : "", transition: "visibility 0.4s"}}>
                <Title align={"center"}> { range } </Title>
                <div className="slidecontainer">
                <span>
                    <strong style={{color: "var(--gradient-dark)", padding: "1rem"}}> 1</strong>
                </span>
                <input 
                    type="range" 
                    min="1" 
                    max="10"
                    step="0.5" 
                    value={range} 
                    name={questionNumber}
                    className="slider"
                    onChange={(e)=> setRange(e.target.value)} 
                />
                <span>
                    <strong style={{color: "var(--gradient-dark)", padding: "1rem"}}> 10</strong>
                </span>
                </div>
            </div>
            <div className="bottom-panel">
                <button className="facebook" onClick={handleNextButton}>
                    { questionNumber > question.length ? "Zakończ" : "Następny" }
                </button> 
            </div>
            <Link to="/home" className="Link" style={{paddingTop: "1rem"}}> Anuluj </Link>
            <span style={{fontSize: "1rem", paddingTop: "1rem"}}>
                Jeśli nie czujesz, że jest to odpowiedni momemnt na ocenę twojego związku
                <Link to="/home" className="Link" style={{fontSize: "1rem"}}> Anuluj </Link> 
                i wróć później.
            </span>      
        </BottomWindow> 
    )
}