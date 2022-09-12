import { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Title } from './general/Title';
import { db } from './../context/firebase';
import { setDoc, doc } from 'firebase/firestore';

export function Question({ question, setQuestionNumber, questionNumber, user }) {
    const navigate = useNavigate();
    const [ range, setRange ] = useState(0);
    const [ score, setScore ] = useState({});

    const addScoreToServer = useCallback(async () => {
        const date = new Date().toLocaleDateString();
        await setDoc(doc(db, 'users', 'allUsers'), {
            [user.email] : {
                score: {
                    [date] : [range]
                }            
            }
         }, {merge: true});
    }, [user.email, range]);

    const handleNextButton = useCallback(()=> {
        setScore({...score, [questionNumber] : Number(range) });       
        setQuestionNumber(state => state + 1);
       if (questionNumber >= question.length) {
            addScoreToServer();
            navigate("/home", {replace: true});
        }
    }, [score, navigate, setQuestionNumber, questionNumber, question.length, range, addScoreToServer]);

    const handlePreviousButton = useCallback(()=> {
        setQuestionNumber(state => state - 1);
    }, [setQuestionNumber]);

    return (
        <section className="bottom">
            <div className="title-box">
                <Title align={"center"}> 
                    <em className="em"> { question[questionNumber - 1]} </em>
                </Title>    

            </div>
            <div className="window-box">
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
                    className="slider"
                    onChange={(e)=> setRange(e.target.value)} 
                />
                <span>
                    <strong style={{color: "var(--gradient-dark)", padding: "1rem"}}> 10</strong>
                </span>
                </div>
            </div>
            <div className="bottom-panel">
                <button className="facebook" 
                    onClick={handlePreviousButton}
                    style={{ visibility: questionNumber === 1 ? "hidden" : ""}}
                    >
                    Poprzedni
                </button>     
                <button className="facebook" onClick={handleNextButton}>
                    { questionNumber === question.length ? "Zakończ" : "Następny" }
                </button> 
            </div>
            <Link to="/home" className="Link" style={{paddingTop: "1rem"}}> Anuluj </Link>
            <span style={{fontSize: "1rem", paddingTop: "1rem"}}>
                Jeśli nie czujesz, że jest to odpowiedni momemnt na ocenę twojego związku
                <Link to="/home" className="Link" style={{fontSize: "1rem"}}> Anuluj </Link> 
                i wróć później.
            </span>      
        </section> 
    )
}