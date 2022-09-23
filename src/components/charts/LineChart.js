import { VictoryChart, VictoryLine } from 'victory';

export function LineChart({ userData, partnerData }) {

    return (
        <VictoryChart>
            <VictoryLine 
                domain={{y: [0, 10]}}
                style={{
                    data: { stroke: userData ?"var(--color-btn-category)" : "transparent" },
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
                    data: { stroke: partnerData ? "var(--gradient-dark)" : "transparent" },
                  }} 
            />
        </VictoryChart>
    )
}