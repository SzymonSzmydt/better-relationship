import { VictoryChart, VictoryLine } from 'victory';

export function LineChart({data}) {
    return (
        <VictoryChart>
            <VictoryLine 
                domain={{y: [0, 10]}}
                style={{
                    data: { stroke: "var(--color-btn-category)" },
                  }}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                data={data}
            />
        </VictoryChart>
    )
}