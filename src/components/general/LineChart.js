import { VictoryChart, VictoryLine } from 'victory';

export function LineChart({ userData, partnerData }) {

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
                data={userData}
            />
            <VictoryLine 
                data={partnerData}
                style={{
                    data: { stroke: "var(--gradient-dark)" },
                  }} 
            />
        </VictoryChart>
    )
}