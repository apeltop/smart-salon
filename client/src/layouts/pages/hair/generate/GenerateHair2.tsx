import React, {useEffect, useState} from "react";
import DashboardLayout from "../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../examples/Navbars/DashboardNavbar";
import MDBox from "../../../../components/MDBox";
import Grid from "@mui/material/Grid";
import MDTypography from "../../../../components/MDTypography";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TendencyCheckBox from "./components/TendencyCheckBox";
import axios from "axios";
import progress from "../../../../assets/images/progress.gif";
import Icon from "@mui/material/Icon";
import GeneratedImageCard from "./components/GeneratedImageCard";
import MDInput from "../../../../components/MDInput";
import ColorPicker from "./components/ColorPicker";
import _ from "lodash";
import MDSnackbar from "../../../../components/MDSnackbar";

/*
[성별] 남성 vs 여성

[나이] 아이 vs 청년 vs 중년 vs 노년

[상황] 일상 vs 이벤트

[이벤트 선택시]  어떤 이벤트인지 (소개팅, 결혼식, 촬영 등)

[길이] 긴 vs 중간 vs 짧은

[스타일] 커트 vs 펌 vs 염색 vs 혼합

[얼굴형] 길고 좁음 vs 길고 넓음 vs 짧고 좁음 vs 짧고 넓음
 */

const steps = [
    {
        label: '성별',
    },
    {
        label: '나이',
    },
    {
        label: '상황',
    },
    {
        label: '이벤트(선택)',
    },
    {
        label: '길이',
    },
    {
        label: '스타일',
    },
    {
        label: '색상(염색 선택 시)',
    },
    {
        label: '얼굴형',
    },
    {
        label: '추가 정보',
    },

];

const stepData: any = {
    0: [
        {
            value: 'female',
            text: '여자',
            icon: 'female'
        },
        {
            value: 'male',
            text: '남자',
            icon: 'male'
        },
    ],
    1: [
        {
            value: '10 old',
            text: '아이',
            icon: 'mood'
        },
        {
            value: '25 old',
            text: '청년',
            icon: 'school'
        },
        {
            value: '40 old',
            text: '중년',
            icon: 'work'
        },
        {
            value: '60 old',
            text: '노년',
            icon: 'man'
        },
    ],
    2: [
        {
            value: 'normal',
            text: '일상',
            icon: 'schedule'
        },
        {
            value: 'event',
            text: '이벤트',
            icon: 'event'
        },
    ],
    3: [
        {
            value: 'wedding',
            text: '결혼식',
            icon: 'diamond'
        },
        {
            value: 'dating',
            text: '소개팅',
            icon: 'favorite'
        },
        {
            value: 'studio',
            text: '촬영',
            icon: 'photo_camera'
        },
    ],
    4: [
        {
            value: 'long hair',
            text: '긴',
            icon: 'face_3'
        },
        {
            value: 'middle hair',
            text: '중간',
            icon: 'face_6'
        },
        {
            value: 'short hair',
            text: '짧은',
            icon: 'face_5'
        },
    ],
    5: [
        {
            value: 'straight',
            text: '커트',
            icon: 'cut'
        },
        {
            value: 'curly',
            text: '펌',
            icon: 'waves'
        },
        {
            value: 'dyeing',
            text: '염색',
            icon: 'palette'
        },
        {
            value: 'cut, curly, dyeing',
            text: '혼합',
            icon: 'join_full'
        },
    ],
    6: [
        {
            value: 'long and thin face shape',
            text: '길고 좁음',
            icon: 'swap_vert'
        },
        {
            value: 'wide and long face shape',
            text: '길고 넓음',
            icon: 'open_in_full'
        },
        {
            value: 'narrow and thin face shape',
            text: '짧고 좁음',
            icon: 'close_fullscreen'
        },
        {
            value: 'narrow and long face shape',
            text: '짧고 넓음',
            icon: 'swap_horiz'
        },
    ],
}


function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [step1Value, setStep1Value] = useState(null);
    const [step2Value, setStep2Value] = useState(null);
    const [step3Value, setStep3Value] = useState(null);
    const [step4Value, setStep4Value] = useState(null);
    const [step5Value, setStep5Value] = useState(null);
    const [step6Value, setStep6Value] = useState(null);
    const [step7Value, setStep7Value] = useState(null);
    const [step8Value, setStep8Value] = useState(null);
    const [step9Value, setStep9Value] = useState(null);

    const getStepContent = () => {
        switch (activeStep) {
            case 0:
                return <TendencyCheckBox data={stepData[0]} onGenderChange={async (value) => {
                    setStep1Value(value)
                    await handleNext();
                }}/>
            case 1:
                return <TendencyCheckBox data={stepData[1]} onGenderChange={async (value) => {
                    setStep2Value(value)
                    await handleNext();
                }}/>
            case 2:
                return <TendencyCheckBox data={stepData[2]} onGenderChange={async (value) => {
                    setStep3Value(value)
                    await handleNext();
                }}/>
            case 3:
                return <TendencyCheckBox data={stepData[3]} onGenderChange={async (value) => {
                    setStep4Value(value)
                    await handleNext();
                }}/>
            case 4:
                return <TendencyCheckBox data={stepData[4]} onGenderChange={async (value) => {
                    setStep5Value(value)
                    await handleNext();
                }}/>
            case 5:
                return <TendencyCheckBox data={stepData[5]} onGenderChange={async (value) => {
                    setStep6Value(value)
                    await handleNext();
                }}/>
            case 6:
                return <ColorPicker
                    onColorChange={async (value) => {
                        setStep7Value(value)
                    }}/>
            case 7:
                return <TendencyCheckBox data={stepData[6]} onGenderChange={async (value) => {
                    setStep8Value(value)
                    await handleNext();
                }}/>
            case 8:
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <MDInput
                                fullWidth
                                label="Additional Information"
                                inputProps={{type: "text", autoComplete: ""}}
                                onChange={async (value: any) => {
                                    setStep9Value(value.target.value)
                                }}
                            />
                        </Grid>
                    </Grid>)
        }
    }

    const [url1, setUrl1] = useState(null);
    const [status1, setStatus1] = useState('pending');

    const [url2, setUrl2] = useState(null);
    const [status2, setStatus2] = useState('pending');

    const [url3, setUrl3] = useState(null);
    const [status3, setStatus3] = useState('pending');


    useEffect(() => {
        if (step3Value && step3Value !== 'event') {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }, [step3Value]);

    useEffect(() => {
        if (step6Value && step6Value !== 'dyeing') {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }, [step6Value]);

    const handleNext = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);

        if (activeStep === steps.length - 1) {
            await Promise.all([
                generateImage(1),
                generateImage(2),
                generateImage(3),
            ]);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const makePrompt = () => {
        console.log(`portrait of ${step2Value}  years old korean ${step1Value} model 
                    who is smiling in ${step3Value} ${step4Value ?? ''}
                    and have ${step5Value ?? ''} ${step6Value ?? ''} ${step7Value ? step7Value + 'color' : ''} hair
                    and have ${step8Value} ${step9Value ? ',' + step9Value : ''} in dreamy background from Vogue magazine, hq, 35mm photo`)

        return `portrait of ${step2Value}  years old korean ${step1Value} model 
                    who is smiling in ${step3Value} ${step4Value ?? ''}
                    and have ${step5Value ?? ''} ${step6Value ?? ''} ${step7Value ? step7Value + 'color' : ''} hair
                    and have ${step8Value} ${step9Value ? ',' + step9Value : ''} in dreamy background from Vogue magazine, hq, 35mm photo`
    }

    const generateImage = async (id: number) => {
        switch (id) {
            case 1:
                setStatus1('loading');
                setUrl1(null);
                break;
            case 2:
                setStatus2('loading');
                setUrl2(null);
                break;
            case 3:
                setStatus3('loading');
                setUrl3(null);
                break;
        }

        console.log(makePrompt());
        const response = await axios.post('https://smart-salon-server-dki77cfyea-du.a.run.app/image', {
            prompt: makePrompt(),
        });

        switch (id) {
            case 1:
                setStatus1('done');
                setUrl1(response.data.images[0].url);
                break;
            case 2:
                setStatus2('done');
                setUrl2(response.data.images[0].url);
                break;
            case 3:
                setStatus3('done');
                setUrl3(response.data.images[0].url);
                break;
        }

        setInfoSB(true);
    }

    const promptHashTag = () => {
        const arr = _.filter([step1Value, step2Value, step3Value, step4Value, step5Value, step6Value, step7Value, step8Value, step9Value], (item) => !!item);
        return arr.map((item) => '#' + item).join(' ');
    }

    const [infoSB, setInfoSB] = useState<boolean>(false);
    const openInfoSB = () => setInfoSB(true);
    const closeInfoSB = () => setInfoSB(false);

    return (
        <Box sx={{maxWidth: 800}}>
            <MDSnackbar
                icon="notifications"
                title="이미지 생성 완료!"
                content="새로운 결과물을 원하실 경우 이미지 위에 커서를 올리시고 새로고침 버튼을 눌러주세요!"
                dateTime="now"
                open={infoSB}
                onClose={closeInfoSB}
                close={closeInfoSB}
            />

            <Stepper activeStep={activeStep} orientation="vertical" style={{
                background: '#fff',
            }}>
                {steps.map((step, index) => {
                    return (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === steps.length - 1 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>
                                    {getStepContent()}
                                </Typography>
                                <Box sx={{mb: 2}}>
                                    <div>
                                        <Button
                                            style={{backgroundColor: '#000000', color: '#ffffff'}}
                                            onClick={handleNext}
                                            sx={{mt: 1, mr: 1}}
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{mt: 1, mr: 1}}
                                        >
                                            Back
                                        </Button>
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    )
                })}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{p: 3}}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
                        Reset
                    </Button>
                </Paper>
            )}
            <Grid container={true} mb={2}>
                {
                    status1 !== 'pending' && (
                        <Grid item xs={12} lg={4}>
                            <MDBox mb={2}>
                                <GeneratedImageCard
                                    image={url1 ? url1 : progress}
                                    title={`스마트 살롱 Generator`}
                                    description={`${promptHashTag()}`}
                                    okButtonText={'상담하기'}
                                    price="70,000~150,000 원"
                                    location="Seoul"
                                    action={
                                        <>
                                            <MDTypography
                                                variant="body1"
                                                color="primary"
                                                lineHeight={1}
                                                sx={{cursor: "pointer", mx: 3}}
                                            >
                                                <Icon color="inherit" onClick={() => generateImage(1)}>refresh</Icon>
                                            </MDTypography>
                                            <MDTypography variant="body1" color="info" lineHeight={1}
                                                          sx={{cursor: "pointer", mx: 3}}>
                                                <Icon color="inherit">edit</Icon>
                                            </MDTypography>
                                        </>
                                    }
                                />
                            </MDBox>
                        </Grid>
                    )
                }

                {
                    status2 !== 'pending' && (
                        <Grid item xs={12} lg={4}>
                            <MDBox mb={2}>
                                <GeneratedImageCard
                                    image={url2 ? url2 : progress}
                                    title={`스마트 살롱 Generator`}
                                    description={`${promptHashTag()}`}
                                    okButtonText={'상담하기'}
                                    price="70,000~150,000 원"
                                    location="Seoul"
                                    action={
                                        <>
                                            <MDTypography
                                                variant="body1"
                                                color="primary"
                                                lineHeight={1}
                                                sx={{cursor: "pointer", mx: 3}}
                                            >
                                                <Icon color="inherit" onClick={() => generateImage(2)}>refresh</Icon>
                                            </MDTypography>
                                            <MDTypography variant="body1" color="info" lineHeight={1}
                                                          sx={{cursor: "pointer", mx: 3}}>
                                                <Icon color="inherit">edit</Icon>
                                            </MDTypography>
                                        </>
                                    }
                                />
                            </MDBox>
                        </Grid>
                    )
                }

                {
                    status3 !== 'pending' && (
                        <Grid item xs={12} lg={4}>
                            <MDBox mb={2}>
                                <GeneratedImageCard
                                    image={url3 ? url3 : progress}
                                    title={`스마트 살롱 Generator`}
                                    description={`${promptHashTag()}`}
                                    okButtonText={'상담하기'}
                                    price="70,000~150,000 원"
                                    location="Seoul"
                                    action={
                                        <>
                                            <MDTypography
                                                variant="body1"
                                                color="primary"
                                                lineHeight={1}
                                                sx={{cursor: "pointer", mx: 3}}
                                            >
                                                <Icon color="inherit" onClick={() => generateImage(3)}>refresh</Icon>
                                            </MDTypography>
                                            <MDTypography variant="body1" color="info" lineHeight={1}
                                                          sx={{cursor: "pointer", mx: 3}}>
                                                <Icon color="inherit">edit</Icon>
                                            </MDTypography>
                                        </>
                                    }
                                />
                            </MDBox>
                        </Grid>
                    )
                }
            </Grid>

        </Box>
    );
}

const GenerateHair2 = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar/>
            <MDBox mb={2}/>

            <MDBox pt={3} pb={8}>
                <Grid container justifyContent="center" sx={{my: 4}}>
                    <Grid item xs={12} lg={8}>
                        <MDBox mt={6} mb={8} textAlign="center">
                            <MDBox mb={1}>
                                <MDTypography variant="h3" fontWeight="bold">
                                    Build Your Hair
                                </MDTypography>
                            </MDBox>
                            <MDTypography variant="h5" fontWeight="regular" color="secondary">
                                This information will let us know more about you.
                            </MDTypography>
                        </MDBox>

                        <MDBox>
                            <VerticalLinearStepper />
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
        </DashboardLayout>
    )
}

export default GenerateHair2;
