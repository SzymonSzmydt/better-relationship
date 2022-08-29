import { Text } from './general/Text';
import { Title } from './general/Title';

export function Search() {

    return (
        <div className="bottom">
            <Title>Znajdź partnera</Title>
            <Text>
                Razem łatwiej pokonacie trudności.
            </Text>
            <form className="form">
                <label>
                    Wpisz imię: 
                </label>
                <input type="text"/>
                <button className="facebook">Szukaj</button>
                <div className="search-results">
                    {  }
                </div>
            </form>
        </div>
    )
}