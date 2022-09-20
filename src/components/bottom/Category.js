import { Window } from './../general/Window';
import { CategoryBtn } from './../general/buttons/CategoryBtn';
import { useNavigate } from 'react-router-dom';

const makeAgoodObjectForChart = (keys, data) => {
    const getValuesFromData = Object.values(data).map((e, i) => e.reduce((a, b) => parseInt(a) + parseInt(b))).map(e=> e / 10);
    return getValuesFromData.map( (values, index) => ({x: keys[index], y: values}));
}

export function Category({ mainUser, partnerUser, mainUserScoreKeys, partnerUserScoreKeys }) {
    const navigate = useNavigate();

    return (
        <Window>
            <CategoryBtn 
                bgcolor="var(--color-btn-category)" 
                text="Wykonaj Test" 
                align="center"
                onClick={()=> navigate("/ankiet")}
                >
                <span className="material-symbols-outlined font">quiz</span>
            </CategoryBtn>
            <CategoryBtn 
                bgcolor="var(--color-btn-category)" 
                text="Stan relacji" align="center"
                onClick={()=> navigate("/my-progress", {state: makeAgoodObjectForChart(mainUserScoreKeys, mainUser.score)})}
                >
                <span className="material-symbols-outlined font">shape_line</span>
            </CategoryBtn>
            <CategoryBtn 
                bgcolor="var(--color-btn-category)" 
                text="Moje postępy" 
                align="center"
                opacity="0.4"
                >
                <span className="material-symbols-outlined font">trending_up</span>
            </CategoryBtn>
            <CategoryBtn 
                bgcolor="var(--color-btn-category)" 
                text="Jego postępy" 
                align="center"
                opacity="0.4"
                >
                <span className="material-symbols-outlined font">multiline_chart</span>
            </CategoryBtn>
        </Window>
    )
}