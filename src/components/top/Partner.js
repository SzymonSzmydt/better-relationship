import { useNavigate } from 'react-router-dom';

export function Partner() {
    const navigate = useNavigate();

    return <div className="symbol symbol__person_add icon" onClick={()=> navigate("/search")}/>
}