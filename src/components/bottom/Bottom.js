import "./css/bottom.css";
import { Title } from './../general/Title';
import { Text } from './../general/Text';
import { Category } from './Category';

export function Bottom() {

    return (
        <div className="bottom">
            <Title>ODKRYJ SIEBIE</Title>
            <Text>
                Skupcie uwagę na swoich słabych punktach, dzięki temu będziecie wiedzieć 
                którym aspektom należy poświęcić większą uwagę.
            </Text>
            <Category/>
        </div>
    )
}