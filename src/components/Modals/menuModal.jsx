import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import { Button, Card, CardBody, CardHeader, Col, Container, Modal, Row } from "reactstrap";
import { getListProductOutOfMenu } from "../../apis/productApiService";
import { AppContext } from "../../context/AppProvider";
import Pdata from "../../pages/products/Pdata";
const unitData = ["Gam", "Kg", "Chai", "Hủ", "Hộp", "Cái"];
export const MenuModal = ({ handleReload }) => {
    const { openModal, setOpenModal, productModal, setProductModal, categoryList, menuModal } = useContext(AppContext);
    const { shopItems } = Pdata;
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState([]);
    const [checked, setChecked] = useState(-1);
    const [productListModal, setProductListModal] = useState([]);
    let history = useHistory();
    useEffect(() => {
        const options = categoryList?.map((item) => {
            return { label: item.name, id: item.id, value: item.id };
        });
        setOptions(options);
        setIsLoading(true);
        getListProductOutOfMenu("s4", menuModal, 1, 100)
            .then((res) => {
                const products = res.data;
                setProductListModal(products);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
        console.log(menuModal);
    }, [categoryList, menuModal]);
    const customStylesPayment = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            borderColor: "#9e9e9e",
            minHeight: "30px",
            height: "46px",
            width: "200px",
            boxShadow: state.isFocused ? null : null,
            borderRadius: "0.5rem",
        }),

        input: (provided, state) => ({
            ...provided,
            margin: "5px",
        }),
    };
    const hanldeUpdate = () => {};
    return (
        <>
            <Modal
                className="modal-dialog-centered"
                size="lg"
                isOpen={openModal}
                toggle={() => {
                    setOpenModal(false);
                }}
            >
                <div className="modal-body p-0">
                    <Card className="bg-secondary border-0 mb-0">
                        {/* <CardHeader className="bg-transparent " style={{ border: "none" }}>
                            <h3>Thêm vào thực đơn</h3>
                        </CardHeader> */}
                        <CardBody className="" style={{}}>
                            <Container className="" fluid style={{ padding: "0 0px" }}>
                                <Row>
                                    <div className="col-lg-12 modal-product">
                                        <Card style={{ borderRadius: "0.5rem" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }} className="align-items-center">
                                                <CardHeader className="" style={{ width: "100%" }}>
                                                    <div className="flex" style={{ alignItems: "center", gap: 20, justifyContent: "space-between" }}>
                                                        <h2 className="mb-0">Danh Sách Sản Phẩm</h2>
                                                        <Select options={options} placeholder="Danh Mục" styles={customStylesPayment} />
                                                    </div>
                                                </CardHeader>
                                            </div>
                                            <div className="col-md-12 modal-list">
                                                <form>
                                                    <div className="row" style={{ margin: 0 }}>
                                                        <Row xl={2}>
                                                            {productListModal.map((item, index) => (
                                                                <Col style={{}} key={index}>
                                                                    <div
                                                                        className=" "
                                                                        style={{
                                                                            display: "flex",
                                                                            // borderRadius: "0.5rem",
                                                                            // position: "relative",
                                                                            flexDirection: "row",
                                                                            justifyContent: "start",
                                                                            alignItems: "center",
                                                                            borderBottom: "1px solid rgb(230,230,230)",
                                                                            gap: 10,
                                                                            padding: "0 15px",
                                                                            cursor: "pointer",
                                                                        }}
                                                                        // onClick={() => setChecked(item.id)}
                                                                    >
                                                                        {/* <input type="checkbox" id={index} class="my-checkbox-x2" value={item.id} /> */}
                                                                        <label className="stardust-checkbox">
                                                                            <input type="checkbox" id={index} class="my-checkbox-x2" value={item.id} />
                                                                            <span class="indicator"></span>
                                                                        </label>

                                                                        <label
                                                                            htmlFor={index}
                                                                            style={{
                                                                                cursor: "pointer",
                                                                                display: "flex",
                                                                                justifyContent: "center",
                                                                                alignItems: "center",
                                                                            }}
                                                                        >
                                                                            <div
                                                                                style={{
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    justifyContent: "center",
                                                                                    width: "150px",
                                                                                    // height: "112px",
                                                                                    paddingTop: 10,
                                                                                }}
                                                                            >
                                                                                <img
                                                                                    style={{ width: "100%", height: "100%", padding: "0", borderRadius: "10px", objectFit: "contain" }}
                                                                                    className="description "
                                                                                    src={
                                                                                        item.cover ||
                                                                                        "https://firebasestorage.googleapis.com/v0/b/deliveryfood-9c436.appspot.com/o/food%2Ftopic-2.webp?alt=media&token=54a5086f-f2ea-4009-9479-28624019703e"
                                                                                    }
                                                                                    alt=""
                                                                                ></img>
                                                                            </div>
                                                                            <div className="f_flex" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                                                                <span className="menu-modal-text" style={{ fontSize: 15, fontWeight: 700, lineHeight: 1, color: "#000" }}>
                                                                                    {item.name}
                                                                                </span>
                                                                                <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 2, color: "var(--primary)" }}>
                                                                                    {item.pricePerPack / 1000 + ".000"}đ
                                                                                </span>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                    </div>
                                                </form>
                                            </div>
                                        </Card>
                                    </div>
                                </Row>
                                <Col className="text-md-right mb-1" lg="12" xs="5">
                                    <Button
                                        onClick={() => {
                                            setOpenModal(false);
                                        }}
                                        className="btn-neutral"
                                        color="default"
                                        size="lg"
                                        style={{ background: "#fff", color: "#000", padding: "0.875rem 2rem" }}
                                    >
                                        <div className="flex" style={{ alignItems: "center" }}>
                                            <i className="fa-solid fa-backward" style={{ fontSize: 18 }}></i>
                                            <span>Đóng</span>
                                        </div>
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            hanldeUpdate();
                                        }}
                                        className="btn-neutral"
                                        color="default"
                                        size="lg"
                                        style={{ background: "var(--primary)", color: "#000", padding: "0.875rem 2rem" }}
                                    >
                                        <div className="flex" style={{ alignItems: "center" }}>
                                            <i className="fa-solid fa-square-plus" style={{ fontSize: 18 }}></i>
                                            <span>Chỉnh Sửa</span>
                                        </div>
                                    </Button>
                                </Col>
                            </Container>
                        </CardBody>
                    </Card>
                </div>
            </Modal>
        </>
    );
};
