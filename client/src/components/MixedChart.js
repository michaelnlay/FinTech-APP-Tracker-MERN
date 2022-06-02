import React from "react";
import { Bar } from "react-chartjs-2";
const MixedChart = (props) => {
  return (
    <div style={{width:"50%"}}>
        <Bar
          data={props.data}
        //   options={options}
        />
      </div>
  );
};
export default MixedChart;