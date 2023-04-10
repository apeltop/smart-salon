import React, {useState} from "react";

// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    ListGroupItem,
    ListGroup,
    Media,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";
import axios from "axios";
import MDSnackbar from "../../components/MDSnackbar";

// Core Components

function Chat() {
    const [searchFocus, setSearchFocus] = React.useState("");
    const [messageFocus, setMessageFocus] = React.useState("");

    const [gptAnswer, setGptAnswer] = React.useState("");
    const [answerStatus, setAnswerStatus] = React.useState("INIT");

    const askToGpt = async (message: string) => {
        console.log('ask to gpt: ' + message);

        setAnswerStatus('LOADING');
        openInfoSB();

        const response = await axios.post('https://smart-salon-server-dki77cfyea-du.a.run.app/chat', {
           prompt: message
        }, {
            timeout: 1000 * 60 * 5
        });

        console.log(response.data)

        setGptAnswer(response.data['answer']);
        setAnswerStatus('DONE');
    }

    const [inputMessage, setInputMessage] = React.useState("");

    const [infoSB, setInfoSB] = useState<boolean>(false);
    const openInfoSB = () => setInfoSB(true);
    const closeInfoSB = () => setInfoSB(false);

    return (
        <>
            <MDSnackbar
                color="warning"
                title="메시지가 전송 되었습니다."
                content="약 20~60초 후에 답변이 도착합니다."
                dateTime="now"
                open={infoSB}
                onClose={closeInfoSB}
                close={closeInfoSB}
                icon={"star"}
                bgWhite
            />
            <Row className="flex-row chat">
                <Col lg="4">
                    <Card className="bg-secondary">
                        <CardHeader className={"mb-3 " + searchFocus}>
                            <InputGroup className="input-group-alternative">
                                <Input
                                    placeholder="Search contact"
                                    type="text"
                                    onFocus={() => setSearchFocus("focused")}
                                    onBlur={() => setSearchFocus("")}
                                ></Input>
                                <InputGroupAddon addonType="append">
                                    <InputGroupText>
                                        <i className="ni ni-zoom-split-in"></i>
                                    </InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </CardHeader>
                        <ListGroup className="list-group-chat" flush tag="div">
                            <ListGroupItem
                                className="active bg-gradient-primary"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                tag="a"
                            >
                                <Media>
                                    <img
                                        alt="..."
                                        className="avatar"
                                        src={require("assets/images/logo.png")}
                                    ></img>
                                    <Media body className="ml-2">
                                        <div className="justify-content-between align-items-center">
                                            <h6 className="mb-0 text-white">
                                                살롱 GPT <Badge color="success"></Badge>
                                            </h6>
                                            <div>
                                                <small>Typing...</small>
                                            </div>
                                        </div>
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                tag="a"
                            >
                                <Media>
                                    <img
                                        alt="..."
                                        className="avatar shadow"
                                        src={require("assets/img/faces/team-2.jpg")}
                                    ></img>
                                    <Media body className="ml-2">
                                        <div className="justify-content-between align-items-center">
                                            <h6 className="mb-0">유미 부원장</h6>
                                            <div>
                                                <small className="text-muted">1 hour ago</small>
                                            </div>
                                        </div>
                                        <Col
                                            className="text-muted text-small p-0 text-truncate d-block"
                                            tag="span"
                                            xs="10"
                                        >
                                            봄 헤어 부원장
                                        </Col>
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                tag="a"
                            >
                                <Media>
                                    <img
                                        alt="..."
                                        className="avatar shadow"
                                        src={require("assets/img/faces/team-3.jpg")}
                                    ></img>
                                    <Media body className="ml-2">
                                        <div className="justify-content-between align-items-center">
                                            <h6 className="mb-0">이율 원장</h6>
                                            <div>
                                                <small className="text-muted">24 min ago</small>
                                            </div>
                                        </div>
                                        <Col
                                            className="text-muted text-small p-0 text-truncate d-block"
                                            tag="span"
                                            xs="10"
                                        >
                                            설렘 헤어 원장
                                        </Col>
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                tag="a"
                            >
                                <Media>
                                    <img
                                        alt="..."
                                        className="avatar shadow"
                                        src={require("assets/img/faces/team-4.jpg")}
                                    ></img>
                                    <Media body className="ml-2">
                                        <div className="justify-content-between align-items-center">
                                            <h6 className="mb-0">하루 수석 디자이너</h6>
                                            <div>
                                                <small className="text-muted">7 hours ago</small>
                                            </div>
                                        </div>
                                        <Col
                                            className="text-muted text-small p-0 text-truncate d-block"
                                            tag="span"
                                            xs="10"
                                        >
                                            화이트하우스 디자이너
                                        </Col>
                                    </Media>
                                </Media>
                            </ListGroupItem>
                            <ListGroupItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                tag="a"
                            >
                                <Media>
                                    <img
                                        alt="..."
                                        className="avatar shadow"
                                        src={require("assets/img/faces/team-5.jpg")}
                                    ></img>
                                    <Media body className="ml-2">
                                        <div className="justify-content-between align-items-center">
                                            <h6 className="mb-0">선민 실장</h6>
                                            <div>
                                                <small className="text-muted">1 day ago</small>
                                            </div>
                                        </div>
                                        <Col
                                            className="text-muted text-small p-0 text-truncate d-block"
                                            tag="span"
                                            xs="10"
                                        >
                                            이수점 보그헤어 디자이너
                                        </Col>
                                    </Media>
                                </Media>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
                <Col lg="8">
                    <Card>
                        <CardHeader className="d-inline-block">
                            <Row>
                                <Col md="10">
                                    <Media className="align-items-center">
                                        <img
                                            alt="..."
                                            className="avatar shadow"
                                            src={require("assets/images/logo.png")}
                                        ></img>
                                        <Media body>
                                            <h6 className="mb-0 d-block">살롱 GPT</h6>
                                            <span className="text-muted text-small">
                        last seen today at 1:53am
                      </span>
                                        </Media>
                                    </Media>
                                </Col>
                                <Col md="1" xs="3">
                                    <Button
                                        className="btn-text"
                                        color="link"
                                        data-placement="top"
                                        id="tooltip558026681"
                                        type="button"
                                    >
                                        <i className="ni ni-book-bookmark"></i>
                                    </Button>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="top"
                                        target="tooltip558026681"
                                    >
                                        Video call
                                    </UncontrolledTooltip>
                                </Col>
                                <Col md="1" xs="3">
                                    <UncontrolledDropdown>
                                        <Button
                                            className="text-primary"
                                            color="link"
                                            data-toggle="dropdown"
                                            type="button"
                                        >
                                            <i className="ni ni-settings-gear-65"></i>
                                        </Button>
                                        <DropdownMenu right>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="ni ni-single-02"></i>
                                                Profile
                                            </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="ni ni-notification-70"></i>
                                                Mute conversation
                                            </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="ni ni-key-25"></i>
                                                Block
                                            </DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="ni ni-button-power"></i>
                                                Clear chat
                                            </DropdownItem>
                                            <DropdownItem divider></DropdownItem>
                                            <DropdownItem
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                <i className="ni ni-fat-remove"></i>
                                                Delete chat
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Col>
                            </Row>
                        </CardHeader>

                        <CardBody>
                            <Row className="justify-content-start">
                                <Col className="col-auto">
                                    <Card>
                                        <CardBody className="p-2">
                                            <p className="mb-1">
                                                안녕하세요. 스마트 살롱 챗봇입니다. 무엇을 도와드릴까요?
                                            </p>
                                            <div>
                                                <small className="opacity-60">
                                                    <i className="far fa-clock"></i>
                                                    3:14am
                                                </small>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="justify-content-end text-right">
                                <Col className="col-auto">
                                    <Card className="bg-gradient-primary text-white">
                                        <CardBody className="p-2">
                                            <p className="mb-1">
                                                얼굴형이 길고 좁은 청년 남성에게 어울리는 머리스타일을 추천해줘<br></br>
                                            </p>
                                            <div>
                                                <small className="opacity-60">3:14am</small>
                                                <i className="ni ni-check-bold"></i>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="justify-content-start">
                                <Col xs="5">
                                    <Card>
                                        <CardBody className="p-2">
                                            <Col className="p-0" xs="12">
                                                <img
                                                    alt="..."
                                                    className="img-fluid rounded mb-1"
                                                    src={require("assets/images/face1.png")}
                                                ></img>
                                            </Col>
                                            <div>
                                                <small className="opacity-60">
                                                    <i className="far fa-clock"></i>
                                                    3:15am
                                                </small>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="justify-content-start">
                                <Col className="col-auto">
                                    <Card>
                                        <CardBody className="p-2">
                                            <p className="mb-1">
                                                스마트 살롱은 고객의 얼굴형, 헤어 스타일 취향 및 라이프 스타일 등을 고려하여 맞춤형 헤어 스타일을 추천해드립니다. 이에 따라서, 스마트 살롱에서는 고객의 얼굴형이 길고 좁은 경우, 얼굴을 좀 더 둥글게 보이도록 머리스타일을 추천해드립니다. 머리 위쪽을 조금 더 볼륨감 있게 유지하고, 양쪽 귀에는 적당한 길이로 떨어지는 머리카락을 유지하면 얼굴형을 좀 더 돋보이게 할 수 있습니다.
                                            </p>
                                            <div>
                                                <small className="opacity-60">
                                                    <i className="far fa-clock"></i>
                                                    3:15am
                                                </small>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col className="text-center" md="12">
                                    <Badge className="text-default">Wed, 3:27pm</Badge>
                                </Col>
                            </Row>

                            <Row className="justify-content-start">
                                <Col className="col-auto">
                                    <Card>
                                        <CardBody className="p-2">
                                            <p className="mb-1">
                                                안녕하세요. 스마트 살롱 챗봇입니다. 무엇을 도와드릴까요?
                                            </p>
                                            <div>
                                                <small className="opacity-60">
                                                    <i className="far fa-clock"></i>
                                                    3:27 pm
                                                </small>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                            {
                                (answerStatus === 'LOADING' || answerStatus === 'DONE') && (
                                    <Row className="justify-content-end text-right">
                                        <Col className="col-auto">
                                            <Card className="bg-gradient-primary text-white">
                                                <CardBody className="p-2">
                                                    <p className="mb-0">
                                                        {inputMessage}
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60">3:28pm</small>
                                                        <i className="ni ni-check-bold"></i>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                )
                            }

                            {
                                answerStatus === 'LOADING' && (<Row className="justify-content-start">
                                    <Col className="col-auto">
                                        <Card>
                                            <CardBody className="p-2">
                                                <div className="spinner">
                                                    <div className="bounce1"></div>
                                                    <div className="bounce2"></div>
                                                    <div className="bounce3"></div>
                                                </div>
                                                <p className="d-inline-block mr-2 mb-1 mt-1">Typing...</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>)

                            }
                            {
                                answerStatus === 'DONE' && (
                                    <Row className="justify-content-start">
                                        <Col className="col-auto">
                                            <Card>
                                                <CardBody className="p-2">
                                                    <p className="mb-1">
                                                        {gptAnswer}
                                                    </p>
                                                    <div>
                                                        <small className="opacity-60">
                                                            <i className="far fa-clock"></i>
                                                            3:29pm
                                                        </small>
                                                    </div>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                )
                            }

                        </CardBody>
                        <CardFooter className="d-block">
                            <FormGroup className={messageFocus}>
                                <InputGroup className="mb-4">
                                    <Input
                                        placeholder="Your message"
                                        type="text"
                                        onFocus={() => setMessageFocus("focused")}
                                        onBlur={() => setMessageFocus("")}
                                        value={inputMessage}
                                        onChange={e => setInputMessage(e.target.value)}
                                    ></Input>
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText onClick={async () => {
                                            await askToGpt(inputMessage);
                                        }}>
                                            <i className="ni ni-send"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default Chat;
