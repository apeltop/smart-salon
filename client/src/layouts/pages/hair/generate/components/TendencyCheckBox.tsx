import {useState} from "react";
import {Theme} from "@mui/material/styles";
import MDBox from "../../../../../components/MDBox";
import MDTypography from "../../../../../components/MDTypography";
import Grid from "@mui/material/Grid";
import MDButton from "../../../../../components/MDButton";
import Icon from "@mui/material/Icon";

const TendencyCheckBox = ({
                              onGenderChange,
                              data
                          }: {
    onGenderChange?: (value: any) => void;
    data: {
        value: string,
        text: string,
        icon: string,
    }[]
}) => {
    const [selectValue, setValue] = useState('');

    const handleChange = (value: any) => {
        setValue(value);
        onGenderChange(value);
    }

    const customButtonStyles = ({
                                    functions: {pxToRem, rgba},
                                    borders: {borderWidth},
                                    palette: {transparent, info},
                                    typography: {size},
                                }: Theme) => ({
        width: pxToRem(164),
        height: pxToRem(130),
        borderWidth: borderWidth[2],
        mb: 1,
        ml: 0.5,

        "&.MuiButton-contained, &.MuiButton-contained:hover": {
            boxShadow: "none",
            border: `${borderWidth[2]} solid ${transparent.main}`,
        },

        "&:hover": {
            backgroundColor: `${transparent.main} !important`,
            border: `${borderWidth[2]} solid ${info.main} !important`,
            color: rgba(info.main, 0.75),
        },

        "& .material-icons-round": {
            fontSize: `${size["3xl"]} !important`,
        },
    });

    return (
        <MDBox>
            <MDBox width="80%" textAlign="center" mx="auto" my={4}>
                <MDBox mb={1}>
                    <MDTypography variant="h5" fontWeight="regular">
                        Which style do you want?
                    </MDTypography>
                </MDBox>
                <MDTypography variant="body2" color="text">
                    Give us more details about you.
                </MDTypography>
            </MDBox>
            <MDBox mt={2}>
                <Grid container spacing={3} justifyContent="center">
                    {
                        data[0] && (
                            <Grid item xs={12} sm={3}>
                                <MDBox textAlign="center">
                                    <MDButton
                                        color="info"
                                        variant={selectValue === data[0].value ? "contained" : "outlined"}
                                        onClick={() => handleChange(data[0].value)}
                                        sx={customButtonStyles}
                                    >
                                        <Icon sx={{color: selectValue === data[0].value ? "white" : "inherit"}}>{data[0].icon}</Icon>
                                    </MDButton>
                                    <MDTypography variant="h6" sx={{mt: 1}}>
                                        {data[0].text}
                                    </MDTypography>
                                </MDBox>
                            </Grid>
                        )
                    }

                    {
                        data[1] && (
                            <Grid item xs={12} sm={3}>
                                <MDBox textAlign="center">
                                    <MDButton
                                        color="info"
                                        variant={selectValue === data[1].value ? "contained" : "outlined"}
                                        onClick={() => handleChange(data[1].value)}
                                        sx={customButtonStyles}
                                    >
                                        <Icon
                                            sx={{color: selectValue === data[1].value ? "white" : "inherit"}}>{data[1].icon}</Icon>
                                    </MDButton>
                                    <MDTypography variant="h6" sx={{mt: 1}}>
                                        {data[1].text}
                                    </MDTypography>
                                </MDBox>
                            </Grid>
                        )
                    }
                </Grid>

                <Grid container spacing={3} justifyContent="center">
                    {
                        data[2] && (
                            <Grid item xs={12} sm={3}>
                                <MDBox textAlign="center">
                                    <MDButton
                                        color="info"
                                        variant={selectValue === data[2].value ? "contained" : "outlined"}
                                        onClick={() => handleChange(data[2].value)}
                                        sx={customButtonStyles}
                                    >
                                        <Icon sx={{color: selectValue === data[2].value ? "white" : "inherit"}}>{data[2].icon}</Icon>
                                    </MDButton>
                                    <MDTypography variant="h6" sx={{mt: 1}}>
                                        {data[2].text}
                                    </MDTypography>
                                </MDBox>
                            </Grid>
                        )
                    }

                    {
                        data[3] && (
                            <Grid item xs={12} sm={3}>
                                <MDBox textAlign="center">
                                    <MDButton
                                        color="info"
                                        variant={selectValue === data[3].value ? "contained" : "outlined"}
                                        onClick={() => handleChange(data[3].value)}
                                        sx={customButtonStyles}
                                    >
                                        <Icon
                                            sx={{color: selectValue === data[3].value ? "white" : "inherit"}}>{data[3].icon}</Icon>
                                    </MDButton>
                                    <MDTypography variant="h6" sx={{mt: 1}}>
                                        {data[3].text}
                                    </MDTypography>
                                </MDBox>
                            </Grid>
                        )
                    }
                </Grid>
            </MDBox>
        </MDBox>
    );
}

export default TendencyCheckBox;
