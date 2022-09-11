import "./css/buttons.css";
import { Text } from './../Text';


export function CategoryBtn({children, bgcolor, text, align, onClick}) {

    return (
        <div className="category-btn" 
            style={{backgroundColor: bgcolor}} 
            onClick={onClick}>
            {children}
            <Text align={align}> { text }</Text>
        </div>
    )
}