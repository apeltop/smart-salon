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

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DefaultItem from "examples/Items/DefaultItem";

function NextEvents(): JSX.Element {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Next events
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <DefaultItem
          color="dark"
          icon="paid"
          title="주현영 고객님 상담"
          description="27 April 2023, at 12:30 PM"
        />
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="notifications"
            title="팀 미팅"
            description="24 April 2023, at 10:00 PM"
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="menu_book"
            title="보그 헤어 잡지 인터뷰"
            description="25 April 2023, at 9:30 AM"
          />
        </MDBox>
        <MDBox mt={3.5}>
          <DefaultItem
            color="dark"
            icon="local_shipping"
            title="아베다 제품 배송"
            description="25 April 2023, at 2:00 PM"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default NextEvents;
