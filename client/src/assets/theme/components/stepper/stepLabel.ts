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

// Material Dashboard 2 PRO React TS Base Styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 PRO React TS Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";
import rgba from "assets/theme/functions/rgba";

const { size, fontWeightRegular } = typography;

// types
type Types = any;

const stepLabel: Types = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: "#9fc9ff",
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(colors.info.main, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(colors.info.main, 0.8)} !important`,
      },
    },
  },
};

export default stepLabel;
