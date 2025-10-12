import ReactECharts, { type EChartsOption } from "echarts-for-react";
import { diagramData } from "src/constants/economy";

const Diagram = ({ className }: { className?: string }) => {
  const options: EChartsOption = {
    title: {
      top: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{b} - {d}%",
    },
    series: [
      {
        name: "Tokenomic",
        type: "pie",
        center: ["50%", "50%"],
        radius: ["65%", "90%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
        data: diagramData,
      },
    ],
  };
  return <ReactECharts className={className} option={options} />;
};

export default Diagram;
