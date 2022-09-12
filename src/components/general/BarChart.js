import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

export function BarChart({ score, title }) {


    return (
            <VictoryChart
                domain={{y: [0, 10] }}
                axis={{grid: {pointerEvents: "dotted"}}}
            >
                <VictoryBar
                    barRatio={0.4}
                    alignment="middle"
                    style={{
                        data: { fill: "var(--color-chart)" }
                    }}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}
                    data={score}
                    categories={{
                        x: ['odp. 1', 'odp. 2',' odp.3', 'odp. 4', 'odp. 5', 'odp. 6']
                      }}
                />
            </VictoryChart>
    )
}