import "./css/buttons.css";
import { Text } from './../Text';


export function CategoryBtn({children, bgcolor, text}) {

    return (
        <div className="category-btn" style={{backgroundColor: bgcolor}}>
            {children}
            <Text> { text }</Text>
        </div>
    )
}