import "./css/bottom.css";
import { Title } from './../general/Title';
import { Text } from './../general/Text';
import { Category } from './Category';
import { Window } from './../general/Window';

export function Bottom() {

    return (
        <div className="bottom">
            <Window>
                <div>
                    <Title>ODKRYJ SIEBIE</Title>
                    <Text>
                        <em>„Nasza wartość jest sumą naszych wartości”. Joe Batten</em>
                    </Text>
                </div>        
            </Window>           
            <Category/>
        </div>
    )
}