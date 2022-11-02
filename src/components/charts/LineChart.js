import { VictoryChart, VictoryLine} from 'victory';

const chartTheme = {
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: '#F8FFF8',
        strokeWidth: 2,
      },
      grid: {
        fill: "transparent",
        stroke: "#00A42B",
        pointerEvents: "none"
      },
      ticks: {
        size: 10,
        stroke: "white"
      },
      tickLabels: {
        fill: '#F8FFF8',
        fontSize: 14,
        padding: 10,
      },
    },
  },
};

export function LineChart({ userData, partnerData }) {
    return (
        <VictoryChart theme={chartTheme}>
            <VictoryLine 
                domain={{y: [0, 11]}}
                style={{
                        data: {stroke: !userData ? "transparent" : "var(--chart-line-one)", strokeWidth: 2}
                  }}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                data={userData}
                x='x'
                y='y'
            />
            <VictoryLine 
                style={{
                    data: { stroke: !partnerData ? "transparent" : "var(--chart-line-two)", strokeWidth: 2 }
                  }} 
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                  data={partnerData}
                  x='x'
                  y='y'
            />
        </VictoryChart>
    )
}