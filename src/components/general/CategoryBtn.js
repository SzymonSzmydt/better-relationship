import "./css/general.css";
import { Window } from './Window';
import { Text } from './Text';

export function CategoryBtn({ children, title, onClick }) {

    return (
        <Window>
            <div className="categorybtn">
                { children }
                <Text align="center">{ title }</Text>
            </div>
        </Window>
    )
}