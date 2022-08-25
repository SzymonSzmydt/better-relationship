import { Window } from './../general/Window';
import { CategoryBtn } from './../general/buttons/CategoryBtn';

export function Category() {

    return (
        <Window>
            <CategoryBtn bgcolor="var(--color-btn-four)" text="Sprawdźcie się" align="center">
                <span className="material-symbols-outlined font">heart_plus</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-two)" text="Stan relacji">
                <span className="material-symbols-outlined font">monitor_heart</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-one)" text="Moje postępy">
                <span className="material-symbols-outlined font">trending_up</span>
            </CategoryBtn>
            <CategoryBtn bgcolor="var(--color-btn-tree)" text="Jego postępy">
                <span className="material-symbols-outlined font">multiline_chart</span>
            </CategoryBtn>
        </Window>
    )
}