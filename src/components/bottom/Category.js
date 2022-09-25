import { Window } from './../general/Window';
import { CategoryBtn } from './../general/buttons/CategoryBtn';
import { useNavigate } from 'react-router-dom';
import { Spinner } from './../general/Spinner';
import { useCallback, useState } from 'react';

const getDayNumber = (date) => Number( date.slice(0, 2) );
const getMonthNumber = (date) => Number( date.slice(3, 5) );

export function Category({ mainUser, partnerUser, mainUserScoreKeys, partnerUserScoreKeys }) {
    const navigate = useNavigate();
    const [ daysLeft, setDaysLeft ] = useState(0); 

    const checkDateFromNow = useCallback((date) => {
        const dateNow = new Date().toLocaleDateString();
        const nowDay = getDayNumber(dateNow);
        const nowMonth = getMonthNumber(dateNow);
        const oldDay = getDayNumber(date[date.length - 1]);
        const oldMonth = getMonthNumber(date[date.length - 1]);
    
        if (nowMonth === oldMonth) {
            let result = nowDay - oldDay + 25;
            return nowDay - oldDay > 25 ? navigate("/ankiet") : setDaysLeft(result);
        }
        if (nowMonth === oldMonth + 1) {
            let result = (31 - oldDay + nowDay);
            return result > 25 ? navigate("/ankiet") : setDaysLeft(result);
        }
        return navigate("/ankiet");
    }, [navigate]);

    return (
           mainUser ?
                <Window>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={daysLeft > 0 ? daysLeft === 1 ? `Wróć jutro` : `Wróć za ${daysLeft} dni` : "Wykonaj Test"}
                        align={"center"}
                        onClick={()=> mainUserScoreKeys.length === 0 ? navigate("/ankiet") : checkDateFromNow(mainUserScoreKeys)}
                        >
                        <span className="material-symbols-outlined font">quiz</span>
                    </CategoryBtn>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={"Stan relacji"} 
                        align={"center"}
                        onClick={()=> navigate("/progress", {
                            state: {
                                mainData: mainUser, 
                                partnerData: partnerUser, 
                                mainKeys: mainUserScoreKeys, 
                                partnerKeys: partnerUserScoreKeys
                            }
                        })}
                        >
                        <span className="material-symbols-outlined font">shape_line</span>
                    </CategoryBtn>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={"Moje postępy"} 
                        align={"center"}
                        opacity={"0.4"}
                        >
                        <span className="material-symbols-outlined font">trending_up</span>
                    </CategoryBtn>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={"Jego postępy"}
                        align={"center"}
                        opacity={"0.4"}
                        >
                        <span className="material-symbols-outlined font">multiline_chart</span>
                    </CategoryBtn>
                </Window> :
            <Spinner/>
    )
}