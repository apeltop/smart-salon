import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Chat from "./Chat";

// Core Components
// import DemoNavbar from "components/navbars/DemoNavbar.js";
// import DemoFooter from "components/footers/DemoFooter.js";

function ChatPage() {
    React.useEffect(() => {
        document.body.classList.add("chat-page");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("chat-page");
        };
    });
    return (
        <>
            <div className="wrapper">
                <div className="section-shaped my-0 skew-separator skew-mini">
                    <div className="page-header page-header-small header-filter">
                        <div
                            className="page-header-image"
                            style={{
                                backgroundImage:
                                    "url(" + require("assets/img/sections/broofoac.jpg") + ")",
                            }}
                        ></div>
                        <Container>
                            <div className="header-body text-center mb-7">
                                <Row className="justify-content-center">
                                    <Col className="px-5" lg="6" md="8" xl="5">
                                        <h1 className="text-white">Chat / Messages</h1>
                                        <p className="text-lead text-white">
                                            Find your own style!
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
                <section>
                    <Container className="pt-5 mb-5 upper">
                        <Chat />
                    </Container>
                </section>
            </div>
        </>
    );
}

export default ChatPage;
