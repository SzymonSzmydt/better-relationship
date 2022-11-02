import { Window } from './../general/Window';
import { CategoryBtn } from './../general/buttons/CategoryBtn';
import { useNavigate } from 'react-router-dom';
import { Spinner } from './../general/Spinner';
import { useCallback, useState } from 'react';

export function Category({ mainUser, partnerUser, mainUserScoreKeys, partnerUserScoreKeys }) {
    const navigate = useNavigate();
    const [ daysLeft, setDaysLeft ] = useState(0); 

    const checkDateFromNow = useCallback((date) => {
        const rootDate = new Date();

        const nowDay = rootDate.getDate();
        const nowMonth = (rootDate.getMonth() + 1);
        const dateToArray = date[date.length - 1].split('.');
        const oldDay = dateToArray[0];
        const oldMonth = dateToArray[1];
    
        if (Number(nowMonth) === Number(oldMonth)) {
            let result = 25 - ( Number(nowDay) - Number(oldDay) );
            return result > 25 ? navigate("/ankiet") : setDaysLeft(result);
        }
        if (Number(nowMonth) === Number(oldMonth) + 1) {
            let daysToWait = (30 - Number(oldDay)) + Number(nowDay);
            let daysLeft = 25 - daysToWait;
            return daysToWait > 25 ? navigate("/ankiet") : setDaysLeft(daysLeft);
        }
        return navigate("/ankiet");
    }, [navigate]);

    return (
           mainUser ?
                <Window>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={daysLeft > 0 ? daysLeft === 1 ? `Wróć jutro` : `Wróć za ${daysLeft} dni` : "Wykonaj Test"}
                        onClick={()=> mainUserScoreKeys.length === 0 ? navigate("/ankiet") : checkDateFromNow(mainUserScoreKeys)}
                        >
                        <div className="symbol symbol__quiz"/>
                    </CategoryBtn>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={"Stan relacji"} 
                        onClick={()=> navigate("/progress", {
                            state: {
                                mainData: mainUser, 
                                partnerData: partnerUser, 
                                mainKeys: mainUserScoreKeys, 
                                partnerKeys: partnerUserScoreKeys
                            }
                        })}
                        >
                        <div className="symbol symbol__shape-line"/>
                    </CategoryBtn>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={"Moje postępy"} 
                        opacity={"0.4"}
                        >
                        <div className="symbol symbol__trending_up"/>
                    </CategoryBtn>
                    <CategoryBtn 
                        bgcolor={"var(--color-btn-category)"} 
                        text={"Jego postępy"}
                        opacity={"0.4"}
                        >
                    <div className="symbol symbol__multiline_chart"/>
                    </CategoryBtn>
                </Window> :
            <Spinner/>
    )
}