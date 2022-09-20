import { BottomWindow } from './general/BottomWindow';
import { TopHeader } from './top/TopHeader';
import { Title } from './general/Title';
import { LineChart } from './general/LineChart';
import { Window } from './general/Window';
import { useLocation } from 'react-router-dom';

export function Progress() {
    const { state } = useLocation();
    return (
        <>
            <TopHeader style={{position: "static", backgroundColor: "var(--gradient-dark)"}}/>
            <BottomWindow>
                <Title align={"left"}> Tak wyglądają Twoje postępy </Title>
                <span>
                    Wraz z upływem czasu pojawi się tutaj więcej danych. Zobaczysz jak 
                    zmienia się wasze wspólne życie.
                </span>
                <Window>
                    <LineChart data={state}/>
                </Window>
                <table className="table">
                    <thead>
                        <tr>
                            <td className="table-td"> Data </td>
                            <td className="table-td"> Punkty </td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    state.map(e => (
                        <tr key={e.x}>
                            <td className="table-td"> { e.x } </td>
                            <td className="table-td"> { e.y } </td>
                        </tr>
                    ))
                    } 
                    </tbody>
                </table>
                                    
            </BottomWindow>
        </>
    )
}