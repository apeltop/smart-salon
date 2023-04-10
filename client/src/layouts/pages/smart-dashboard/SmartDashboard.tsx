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
import {useMemo, useState} from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import EventCalendar from "examples/Calendar";

// Calendar application components
import Header from "layouts/applications/calendar/components/Header";
import NextEvents from "layouts/applications/calendar/components/NextEvents";
import ProductivityChart from "layouts/applications/calendar/components/ProductivityChart";

// Data
import calendarEventsData, {calendarEventsData2, calendarEventsDataForFullCalendar} from "./calendarEventsData";
import ScheduelSideNav from "./components/ScheduelSideNav";
import ReservationCalendar from "./components/ReservationCalenar";

function SmartDashboard(): JSX.Element {
    const [selectedEventId, setSelectedEventId] = useState<number>(null);


    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={3}>
                <ScheduelSideNav info={calendarEventsData2[selectedEventId]} />
                <MDBox display="flex" justifyContent="flex-end" mt={1} mb={4} mx={2}>
                    {/*<Header />*/}
                </MDBox>
                <Grid container spacing={3}>
                    <Grid item xs={12} xl={9} sx={{ height: "max-content" }}>
                        {useMemo(
                            () => (
                                <ReservationCalendar
                                    initialView="dayGridMonth"
                                    initialDate="2023-04-01"
                                    events={calendarEventsDataForFullCalendar}
                                    selectable
                                    editable
                                    onEventClicked={(eventId: string | number) => setSelectedEventId(eventId as number)}
                                />
                            ),
                            [calendarEventsDataForFullCalendar]
                        )}
                    </Grid>
                    <Grid item xs={12} xl={3}>
                        <MDBox mb={3}>
                            <NextEvents />
                        </MDBox>
                        <MDBox mb={3}>
                            <ProductivityChart />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}

export default SmartDashboard;
