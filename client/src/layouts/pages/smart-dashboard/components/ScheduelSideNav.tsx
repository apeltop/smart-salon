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

import {useState, useEffect} from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";
import {Theme} from "@mui/material/styles";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

// Material Dashboard 2 PRO React context
import {
    useMaterialUIController,
    setFixedNavbar,
    setSidenavColor,
} from "context";
import {IReservationInfo} from "../calendarEventsData";

interface IProps {
    info: IReservationInfo;
}

function ScheduelSideNav({info}: IProps): JSX.Element {
    const [controller, dispatch] = useMaterialUIController();
    const {
        sidenavColor,
        darkMode,
    } = controller;

    const [disabled, setDisabled] = useState<boolean>(false);
    const [isConfiguratorOpen, setIsConfiguratorOpen] = useState<boolean>(false);

    useEffect(() => {
        if (!info) {
            setIsConfiguratorOpen(false);
        } else {
            setIsConfiguratorOpen(true);
        }
    }, [info])


    // Use the useEffect hook to change the button state for the sidenav type based on window size.
    useEffect(() => {
        // A function that sets the disabled state of the buttons for the sidenav type.
        function handleDisabled() {
            return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
        }

        // The event listener that's calling the handleDisabled function when resizing the window.
        window.addEventListener("resize", handleDisabled);

        // Call the handleDisabled function to set the state with the initial value.
        handleDisabled();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleDisabled);
    }, []);


    const handleCloseConfigurator = () => {
        setIsConfiguratorOpen(false);
    };

    const [isReserve, setIsReserve] = useState<boolean>(false);
    const handleFixedNavbar = () => {
        setIsReserve(!isReserve);
    };

    if (!info) {
        return <></>
    }

    return (
        // <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
        <ConfiguratorRoot variant="permanent" ownerState={{openConfigurator: isConfiguratorOpen}}>
            {/*<ConfiguratorRoot variant="permanent" ownerState={{openConfigurator: true}}>*/}
            <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="baseline"
                pt={4}
                pb={0.5}
                px={3}
            >
                <MDBox>
                    <MDTypography variant="h5">{info.name} 고객님 시술 내역</MDTypography>
                    <MDTypography variant="body2" color="text">
                        {info.start} {info.reservationTime} 예약
                    </MDTypography>
                </MDBox>

                <Icon
                    sx={({typography: {size}, palette: {dark, white}}) => ({
                        fontSize: `${size.lg} !important`,
                        color: darkMode ? white.main : dark.main,
                        stroke: "currentColor",
                        strokeWidth: "2px",
                        cursor: "pointer",
                        transform: "translateY(5px)",
                    })}
                    onClick={handleCloseConfigurator}
                >
                    close
                </Icon>
            </MDBox>

            <Divider/>

            <MDBox pt={0.5} pb={3} px={3}>
                <MDBox>
                    {
                        info.type === '염색' && (
                            <>
                                <MDTypography variant="h6">염색 시술 희망 색상</MDTypography>

                                <MDBox mb={0.5}>
                                    <IconButton
                                        key={'primary'}
                                        sx={({
                                                 borders: {borderWidth},
                                                 palette: {white, dark, background},
                                                 transitions,
                                             }: Theme | any) => ({
                                            width: "24px",
                                            height: "24px",
                                            padding: 0,
                                            border: `${borderWidth[1]} solid ${darkMode ? background.sidenav : white.main}`,
                                            borderColor: () => {
                                                let borderColorValue = sidenavColor === 'primary' && dark.main;

                                                if (darkMode && sidenavColor === 'primary') {
                                                    borderColorValue = white.main;
                                                }

                                                return borderColorValue;
                                            },
                                            transition: transitions.create("border-color", {
                                                easing: transitions.easing.sharp,
                                                duration: transitions.duration.shorter,
                                            }),
                                            backgroundImage: ({functions: {linearGradient}, palette: {gradients}}) =>
                                                linearGradient(gradients['primary'].main, gradients['primary'].state),

                                            "&:not(:last-child)": {
                                                mr: 1,
                                            },

                                            "&:hover, &:focus, &:active": {
                                                borderColor: darkMode ? white.main : dark.main,
                                            },
                                        })}
                                        onClick={() => setSidenavColor(dispatch, 'primary')}
                                    />
                                </MDBox>
                            </>
                        )}
                </MDBox>

                <MDBox mt={3} lineHeight={1}>
                    <MDTypography variant="h6">방문 횟수</MDTypography>
                    <MDTypography variant="button" color="text">
                        {info.visitTime} 번
                    </MDTypography>
                </MDBox>

                <MDBox mt={3} lineHeight={1}>
                    <MDTypography variant="h6">시술 타입</MDTypography>
                    <MDTypography variant="button" color="text">
                        {info.type}
                    </MDTypography>
                </MDBox>

                {
                    info.feature && (
                        <MDBox mt={3} lineHeight={1}>
                            <MDTypography variant="h6">고객 특징</MDTypography>
                            <MDTypography variant="button" color="text">
                                {info.feature}
                            </MDTypography>
                        </MDBox>
                    )
                }

                <MDBox
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={3}
                    lineHeight={1}
                >
                    <MDTypography variant="h6">예약 확정</MDTypography>

                    <Switch checked={isReserve} onChange={handleFixedNavbar}/>
                </MDBox>

                <Divider/>

                <MDBox mt={3} mb={2}>
                    <MDBox mb={2}>
                        <MDButton
                            component={Link}
                            href="https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts"
                            target="_blank"
                            rel="noreferrer"
                            color="info"
                            variant="gradient"
                            fullWidth
                        >
                            고객님께 문자 보내기
                        </MDButton>
                    </MDBox>
                    <MDBox mb={2}>
                        <MDButton
                            component={Link}
                            href="https://www.creative-tim.com/product/material-dashboard-pro-react"
                            target="_blank"
                            rel="noreferrer"
                            color="dark"
                            variant="gradient"
                            fullWidth
                        >
                            고객님께 통화 걸기
                        </MDButton>
                    </MDBox>
                </MDBox>
            </MDBox>
        </ConfiguratorRoot>
    );
}

export default ScheduelSideNav;
