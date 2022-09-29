import "./css/bottom.css";
import { Title } from './../general/Title';
import { Text } from './../general/Text';
import { Category } from './Category';
import { Window } from './../general/Window';
import { BottomWindow } from './../general/BottomWindow';

export function Bottom({ mainUser, partnerUser, mainUserScoreKeys, partnerUserScoreKeys }) {

    return (
        <BottomWindow className="bottom">
            <Window>
                <div>
                    <Title>ODKRYJ SIEBIE</Title>
                    <Text>
                            <em>„Nasza wartość jest sumą naszych wartości”</em>
                    </Text>
                    <Text align={"right"}>Joe Batten</Text>
                </div>        
            </Window>           
            <Category
                mainUser={mainUser} 
                partnerUser={partnerUser} 
                mainUserScoreKeys={mainUserScoreKeys} 
                partnerUserScoreKeys={partnerUserScoreKeys}
            />
        </BottomWindow>
    )
}