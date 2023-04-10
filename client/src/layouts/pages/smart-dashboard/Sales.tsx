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

import {useState} from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDBadgeDot from "components/MDBadgeDot";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import SalesTable from "examples/Tables/SalesTable";
import DataTable from "examples/Tables/DataTable";

// Sales dashboard components

// Data
import dataTableData from "layouts/dashboards/sales/data/dataTableData";
import ChannelsChart from "./components/ChannelsChart";
import defaultLineChartData from "./defaultLineChartData";
import horizontalBarChartData from "./horizontalBarChartData";
import salesTableData from "./salesTableData";
import MixedChart from "../../../examples/Charts/MixedChart";
import mixedChartData from "./mixedChartData";
import VerticalBarChart from "../../../examples/Charts/BarCharts/VerticalBarChart";
import verticalBarChartData from "./verticalBarChartData";

function Sales(): JSX.Element {
    // DefaultStatisticsCard state for the dropdown value
    const [salesDropdownValue, setSalesDropdownValue] = useState<string>("6 May - 7 May");
    const [customersDropdownValue, setCustomersDropdownValue] = useState<string>("6 May - 7 May");
    const [revenueDropdownValue, setRevenueDropdownValue] = useState<string>("6 May - 7 May");

    // DefaultStatisticsCard state for the dropdown action
    const [salesDropdown, setSalesDropdown] = useState<string | null>(null);
    const [customersDropdown, setCustomersDropdown] = useState<string | null>(null);
    const [revenueDropdown, setRevenueDropdown] = useState<string | null>(null);

    // DefaultStatisticsCard handler for the dropdown action
    const openSalesDropdown = ({currentTarget}: any) => setSalesDropdown(currentTarget);
    const closeSalesDropdown = ({currentTarget}: any) => {
        setSalesDropdown(null);
        setSalesDropdownValue(currentTarget.innerText || salesDropdownValue);
    };
    const openCustomersDropdown = ({currentTarget}: any) => setCustomersDropdown(currentTarget);
    const closeCustomersDropdown = ({currentTarget}: any) => {
        setCustomersDropdown(null);
        setCustomersDropdownValue(currentTarget.innerText || salesDropdownValue);
    };
    const openRevenueDropdown = ({currentTarget}: any) => setRevenueDropdown(currentTarget);
    const closeRevenueDropdown = ({currentTarget}: any) => {
        setRevenueDropdown(null);
        setRevenueDropdownValue(currentTarget.innerText || salesDropdownValue);
    };

    // Dropdown menu template for the DefaultStatisticsCard
    const renderMenu = (state: any, close: any) => (
        <Menu
            anchorEl={state}
            transformOrigin={{vertical: "top", horizontal: "center"}}
            open={Boolean(state)}
            onClose={close}
            keepMounted
            disableAutoFocusItem
        >
            <MenuItem onClick={close}>Last 7 days</MenuItem>
            <MenuItem onClick={close}>Last week</MenuItem>
            <MenuItem onClick={close}>Last 30 days</MenuItem>
        </Menu>
    );

    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox py={3}>
                <MDBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <DefaultStatisticsCard
                                title="sales"
                                count="₩7,917,000"
                                percentage={{
                                    color: "success",
                                    value: "+23%",
                                    label: "since last month",
                                }}
                                dropdown={{
                                    action: openSalesDropdown,
                                    menu: renderMenu(salesDropdown, closeSalesDropdown),
                                    value: salesDropdownValue,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <DefaultStatisticsCard
                                title="customers"
                                count="84"
                                percentage={{
                                    color: "success",
                                    value: "+12%",
                                    label: "since last month",
                                }}
                                dropdown={{
                                    action: openCustomersDropdown,
                                    menu: renderMenu(customersDropdown, closeCustomersDropdown),
                                    value: customersDropdownValue,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <DefaultStatisticsCard
                                title="branding image"
                                count="170"
                                percentage={{
                                    color: "secondary",
                                    value: "+23",
                                    label: "since last month",
                                }}
                                dropdown={{
                                    action: openRevenueDropdown,
                                    menu: renderMenu(revenueDropdown, closeRevenueDropdown),
                                    value: revenueDropdownValue,
                                }}
                            />
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <ChannelsChart/>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={8}>
                            <DefaultLineChart
                                title="Branding Image"
                                description={
                                    <MDBox display="flex" justifyContent="space-between">
                                        <MDBox display="flex" ml={-1}>
                                            <MDBadgeDot color="info" size="sm" badgeContent="Smart Salon"/>
                                            <MDBadgeDot color="dark" size="sm" badgeContent="Real World"/>
                                        </MDBox>
                                        <MDBox mt={-4} mr={-1} position="absolute" right="1.5rem">
                                            <Tooltip title="See which ads perform better" placement="left" arrow>
                                                <MDButton
                                                    variant="outlined"
                                                    color="secondary"
                                                    size="small"
                                                    circular
                                                    iconOnly
                                                >
                                                    <Icon>priority_high</Icon>
                                                </MDButton>
                                            </Tooltip>
                                        </MDBox>
                                    </MDBox>
                                }
                                chart={defaultLineChartData}
                            />
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={8}>
                            <HorizontalBarChart title="Sales by age" chart={horizontalBarChartData}/>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <SalesTable title="Sales by hair" rows={salesTableData}/>
                        </Grid>
                    </Grid>
                </MDBox>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <MixedChart
                            icon={{color: "primary", component: "auto_graph"}}
                            title="Visit Time"
                            description="Analytics Visit Time"
                            height="19.75rem"
                            chart={mixedChartData}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <VerticalBarChart
                            icon={{color: "dark", component: "leaderboard"}}
                            title="Visit Date"
                            description="Analytics Visit Date"
                            chart={verticalBarChartData}
                        />
                    </Grid>
                </Grid>
            </MDBox>
            <Footer/>
        </DashboardLayout>
    );
}

export default Sales;
