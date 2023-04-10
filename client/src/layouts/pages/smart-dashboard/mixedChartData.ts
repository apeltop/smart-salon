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
  labels: any;
  datasets: any;
}

const mixedChartData: Types = {
  labels: ["10-11", "11-12", "12-13", "13-14", "15-16", "16-17", "17-18", "18-19", "19-20"],
  datasets: [
    {
      chartType: "thin-bar",
      label: "male",
      color: "dark",
      data: [6, 4, 7, 15, 16, 12, 7, 16, 7],
    },
    {
      chartType: "thin-bar",
      label: "female",
      color: "secondary",
      data: [5, 6, 3, 7, 16, 8, 20, 15, 7],
    },
    {
      chartType: "gradient-line",
      label: "Referral",
      color: "info",
      data: [5.5, 5, 5, 11, 16, 10, 13.5, 15.5, 7],
    },
  ],
};

export default mixedChartData;
