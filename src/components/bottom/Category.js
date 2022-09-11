import { Window } from './../general/Window';
import { CategoryBtn } from './../general/buttons/CategoryBtn';
import { useNavigate } from 'react-router-dom';

export function Category() {
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
            <CategoryBtn bgcolor="var(--color-btn-category)" text="Stan relacji" align="center">
                <span className="material-symbols-outlined font">shape_line</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-category)" text="Moje postępy" align="center">
                <span className="material-symbols-outlined font">trending_up</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-category)" text="Jego postępy" align="center">
                <span className="material-symbols-outlined font">multiline_chart</span>
            </CategoryBtn>
        </Window>
    )
}