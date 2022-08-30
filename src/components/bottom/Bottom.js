import "./css/bottom.css";
import { Title } from './../general/Title';
import { Text } from './../general/Text';
import { Category } from './Category';

export function Bottom() {

    return (
        <div className="bottom">
            <Title>ODKRYJ SIEBIE</Title>
            <Text>
                <em>„Nasza wartość jest sumą naszych wartości”. Joe Batten</em>
            </Text>
            <Category/>
        </div>
    )
}