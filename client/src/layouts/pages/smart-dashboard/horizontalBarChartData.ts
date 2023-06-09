/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// types
interface Types {
  labels: string[];
  datasets: {
    label: string;
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "light" | "dark";
    data: number[];
  }[];
}

const horizontalBarChartData: Types = {
  labels: ["2~13", "14-20", "21-30", "31-40", "41-50", "51-59", "60+"],
  datasets: [
    {
      label: "Sales by age",
      color: "dark",
      data: [7, 20, 38, 23, 20, 15, 3],
    },
  ],
};

export default horizontalBarChartData;
