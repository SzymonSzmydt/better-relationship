import "./css/buttons.css";
import { Text } from './../Text';


export function CategoryBtn({children, bgcolor, text, onClick, opacity}) {

    return (
        <div className="category-btn" 
            style={{backgroundColor: bgcolor, opacity: opacity}} 
            onClick={onClick}>
            {children}
            <Text> { text }</Text>
        </div>
    )
}