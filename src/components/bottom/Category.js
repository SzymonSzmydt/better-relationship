import { Window } from './../general/Window';
import { CategoryBtn } from './../general/buttons/CategoryBtn';

export function Category() {

    return (
        <Window>
            <CategoryBtn bgcolor="var(--color-btn-four)" text="Wykonaj Test" align="center">
                <span className="material-symbols-outlined font">quiz</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-four)" text="Stan relacji">
                <span className="material-symbols-outlined font">shape_line</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-four)" text="Moje postępy">
                <span className="material-symbols-outlined font">trending_up</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-four)" text="Jego postępy">
                <span className="material-symbols-outlined font">multiline_chart</span>
            </CategoryBtn>
        </Window>
    )
}