import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Row, Nav, NavItem, NavLink, TabContent, TabPane, Spinner } from "reactstrap";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import { MenuModal } from "../../components/Modals/menuModal";
import { AppContext } from "../../context/AppProvider";
import Pdata from "../products/Pdata";
// import Empty from "../../../../public/icons/empty.svg";
export const Menus = () => {
    const [hTabsIcons, setHTabsIcons] = React.useState("hTabsIcons-1");
    const { openModal, setOpenModal, setMenuModal } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const [menu, setMenu] = useState(1);
    const { shopItems } = Pdata;
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {};
    }, []);
    const hanldeChangeMenu = (menu) => {
        setMenu(menu);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };
    return (
        <>
            <MenuModal />
            <SimpleHeader name="Danh Sách Thực Đơn" parentName="Quản Lý" />
            <Container className="mt--6" fluid>
                <Row>
                    <Col md="6" xl="4">
                        <Card className={`card-stats menu ${menu === 1 ? "menu-active" : ""}`} onClick={() => hanldeChangeMenu(1)}>
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                            15 - 30 phút
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">Đặt Món</span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="  text-white rounded-circle center_flex" style={{ width: 70, height: 70, border: "5px solid #fff" }}>
                                            <img style={{ width: 60, height: 60 }} src="/images/breakfast.png" alt=""></img>
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-1 mb-0 text-sm">
                                    <span className="text-nowrap" style={{ fontSize: "1rem" }}>
                                        Sản phẩm giao ngay
                                    </span>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" xl="4">
                        <Card className={`card-stats menu ${menu === 2 ? "menu-active" : ""}`} onClick={() => hanldeChangeMenu(2)}>
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                            30 - 60 phút
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">Đi Chợ</span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="  text-white rounded-circle center_flex" style={{ width: 70, height: 70, border: "5px solid #fff", backgroundColor: "#fff" }}>
                                            <img style={{ width: 65, height: 64 }} src="/images/dicho-active.png" alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-1 mb-0 text-sm">
                                    <span className="text-nowrap" style={{ fontSize: "1rem" }}>
                                        Sản phẩm có sẵn trong ngày
                                    </span>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6" xl="4">
                        <Card className={`card-stats menu ${menu === 3 ? "menu-active" : ""}`} onClick={() => hanldeChangeMenu(3)}>
                            <CardBody>
                                <Row>
                                    <div className="col">
                                        <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
                                            3 - 5 ngày
                                        </CardTitle>
                                        <span className="h2 font-weight-bold mb-0">Đặt Hàng</span>
                                    </div>
                                    <Col className="col-auto">
                                        <div className="  text-white rounded-circle center_flex" style={{ width: 70, height: 70, border: "5px solid #fff", backgroundColor: "#fff" }}>
                                            <img style={{ width: 60, height: 60, borderRadius: 50 }} src="/images/giaohang.png" alt="" />
                                        </div>
                                    </Col>
                                </Row>
                                <p className="mt-1 mb-0 text-sm">
                                    <span className="text-nowrap" style={{ fontSize: "1rem" }}>
                                        Sản phẩm đặt trước
                                    </span>
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="6" xl="12">
                        <Card className="card-stats">
                            <CardBody style={{ position: "relative" }}>
                                <Button
                                    onClick={() => {
                                        setOpenModal(true);
                                        setMenuModal(1);
                                    }}
                                    className="btn-neutral"
                                    color="default"
                                    size="lg"
                                    style={{ background: "var(--primary)", color: "#000", fontWeight: 700, position: "absolute", right: 10 }}
                                >
                                    Thêm Sản Phẩm
                                </Button>
                                {/* <div className="nav-wrapper">
                                    <Nav className="nav-fill flex-column flex-md-row" pills role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={"mb-sm-3 mb-md-0 " + (hTabsIcons === "hTabsIcons-1" ? "active" : "")}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setHTabsIcons("hTabsIcons-1");
                                                }}
                                            >
                                                Buổi Sáng
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={"mb-sm-3 mb-md-0 " + (hTabsIcons === "hTabsIcons-2" ? "active" : "")}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setHTabsIcons("hTabsIcons-2");
                                                }}
                                            >
                                                Buổi Trưa
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={"mb-sm-3 mb-md-0 " + (hTabsIcons === "hTabsIcons-3" ? "active" : "")}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setHTabsIcons("hTabsIcons-3");
                                                }}
                                            >
                                                Buổi Chiều
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div> */}
                                <div>
                                    <TabContent id="myTabContent" activeTab={hTabsIcons}>
                                        <TabPane tabId="hTabsIcons-1" role="tabpanel" style={{ marginTop: 30 }}>
                                            {!isLoading ? (
                                                <>
                                                    <h2>Thịt Tươi Sống</h2>
                                                    <Row xl={6}>
                                                        {shopItems.map((item, index) => (
                                                            <Col style={{}} key={index}>
                                                                <div
                                                                    className=" hover-card"
                                                                    style={{
                                                                        display: "flex",
                                                                        borderRadius: "0.5rem",
                                                                        position: "relative",
                                                                        flexDirection: "column",
                                                                        justifyContent: "center",
                                                                        alignItems: "center",
                                                                    }}
                                                                >
                                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "150px", paddingTop: 10 }}>
                                                                        <img style={{ width: "100%", padding: "0", borderRadius: "10px" }} className="description " src={item.cover} alt=""></img>
                                                                    </div>
                                                                    <div className="center_flex" style={{ display: "flex", flexDirection: "column" }}>
                                                                        <span style={{ fontSize: 15, fontWeight: 700, lineHeight: 1, color: "#000" }}>{item.name}</span>
                                                                        <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 2, color: "var(--primary)" }}>{item.price / 1000 + ".000"}đ</span>
                                                                    </div>
                                                                    <div className="edit-btn-menu">
                                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        ))}
                                                    </Row>
                                                </>
                                            ) : (
                                                ""
                                            )}
                                            {isLoading && (
                                                <CardBody className="loading-wrapper center_flex">
                                                    <Spinner className="loading" type="grow"></Spinner>
                                                    <Spinner className="loading" type="grow"></Spinner>
                                                    <Spinner className="loading" type="grow"></Spinner>
                                                </CardBody>
                                            )}
                                        </TabPane>
                                        <TabPane tabId="hTabsIcons-2" role="tabpanel" className="">
                                            <div className="center_flex" style={{ padding: "50px 0 0 0" }}>
                                                <img src="/icons/empty.png" alt="" style={{ textAlign: "center", width: 250 }} />
                                            </div>
                                            <h1 className="description" style={{ fontSize: 20, textAlign: "center", padding: "20px 0 0 0" }}>
                                                Không có sản phẩm nào
                                            </h1>
                                            <p className="description" style={{ fontSize: 17, textAlign: "center", padding: "0px 0 50px 0" }}>
                                                Vui lòng thêm sản phẩm vào thực đon
                                            </p>
                                        </TabPane>
                                        <TabPane tabId="hTabsIcons-3" role="tabpanel">
                                            <div className="center_flex" style={{ padding: "50px 0 0 0" }}>
                                                <img src="/icons/empty.png" alt="" style={{ textAlign: "center", width: 250 }} />
                                            </div>
                                            <h1 className="description" style={{ fontSize: 20, textAlign: "center", padding: "20px 0 0 0" }}>
                                                Không có sản phẩm nào
                                            </h1>
                                            <p className="description" style={{ fontSize: 17, textAlign: "center", padding: "0px 0 50px 0" }}>
                                                Vui lòng thêm sản phẩm vào thực đon
                                            </p>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
