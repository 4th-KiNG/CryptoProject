import ReactECharts, { type EChartsOption } from "echarts-for-react";
import { logoIcon } from "src/assets";
import { diagramData } from "src/constants/economy";
import styles from "./Diagram.module.scss";

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
  return (
    <div className={styles.Container}>
      <img src={logoIcon} alt="logo icon" className={styles.LogoIcon} />
      <ReactECharts className={className} option={options} />
    </div>
  );
};

export default Diagram;
