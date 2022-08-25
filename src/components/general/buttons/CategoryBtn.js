import "./css/buttons.css";
import { Text } from './../Text';


export function CategoryBtn({children, bgcolor, text, align}) {

    return (
        <div className="category-btn" style={{backgroundColor: bgcolor}}>
            {children}
            <Text align={align}> { text }</Text>
        </div>
    )
}