/*!

=========================================================
* Argon Dashboard PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// nodejs library to set properties for components
import PropTypes from "prop-types";
// reactstrap components
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";

function CardsHeader({ name, parentName }) {
    return (
        <>
            <div className="header backround-primary">
                <Container fluid>
                    <div className="header-body">
                        <Row className="align-items-center py-4">
                            <Col lg="6" xs="7">
                                <h1 className="">{"Chào mừng bạn đến với VinhomesGP Delivery "}</h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6" xl="3">
                                <Card className="card-stats" style={{ padding: "2rem 0.5rem", height: 180 }}>
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "1rem" }}>
                                                    Tổng đơn hàng
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0" style={{ fontSize: "2rem" }}>
                                                    500
                                                </span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-gradient-primary text-white rounded-circle shadow" style={{ width: 65, height: 65 }}>
                                                    <i className="fa-solid fa-box" style={{ fontSize: 28 }} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md="6" xl="3">
                                <Card className="card-stats" style={{ padding: "2rem 0.5rem", height: 180 }}>
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "1rem" }}>
                                                    Đơn hàng mới
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0" style={{ fontSize: "2rem" }}>
                                                    200
                                                </span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-gradient-orange text-white rounded-circle shadow" style={{ width: 65, height: 65 }}>
                                                    <i class="fa-solid fa-square-plus" style={{ fontSize: 28 }}></i>
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6" xl="3">
                                <Card className="card-stats" style={{ padding: "2rem 0.5rem", height: 180 }}>
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "1rem" }}>
                                                    Đơn giao thành công
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0" style={{ fontSize: "2rem" }}>
                                                    15
                                                </span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-gradient-green text-white rounded-circle shadow" style={{ width: 65, height: 65 }}>
                                                    <i className="fa-solid fa-square-check" style={{ fontSize: 28 }} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="6" xl="3">
                                <Card className="card-stats" style={{ padding: "2rem 0.5rem", height: 180 }}>
                                    <CardBody>
                                        <Row>
                                            <div className="col">
                                                <CardTitle tag="h5" className="text-uppercase text-muted mb-0" style={{ fontSize: "1rem" }}>
                                                    Đơn đã hủy
                                                </CardTitle>
                                                <span className="h2 font-weight-bold mb-0" style={{ fontSize: "2rem" }}>
                                                    10
                                                </span>
                                            </div>
                                            <Col className="col-auto">
                                                <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow" style={{ width: 65, height: 65 }}>
                                                    <i className="fa-solid fa-ban" style={{ fontSize: 28 }} />
                                                </div>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

CardsHeader.propTypes = {
    name: PropTypes.string,
    parentName: PropTypes.string,
};

export default CardsHeader;
