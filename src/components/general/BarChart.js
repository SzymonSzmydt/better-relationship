import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

export function BarChart({ score }) {

    return (
            <VictoryChart domain={{y: [0, 10] }}> 
                <VictoryAxis
                    tickValues={[0, 1, 2, 3, 4, 5, 6]}
                    tickFormat={['odp. 1', 'odp. 2',' odp.3', 'odp. 4', 'odp. 5', 'odp. 6']}
                    style={{                   
                        tickLabels: {fontSize: 12, fill: "var(--color-chart)"}, 
                     }}
                />
                <VictoryAxis
                     dependentAxis
                     style={{
                        axisLabel: {fontSize: 10, padding: 50},
                        grid: {stroke: ({ tick }) => "var(--color-chart)"},
                        ticks: {stroke: "var(--color-chart)", size: 5},
                        tickLabels: {fontSize: 12, padding: 10, fill: "var(--color-chart)"}
                    }}  
                />
                    <VictoryBar
                        barRatio={0.4}
                        alignment="start"
                        style={{
                            data: { fontSize: 14, fill: "var(--color-chart)" }
                        }}
                        animate={{
                            duration: 1000,
                            onLoad: { duration: 1000 }
                        }}
                        data={score}
                    />              
            </VictoryChart>
    )
}