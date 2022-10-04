import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { Button, Card, CardBody, CardHeader, Col, Container, Modal, Row } from "reactstrap";
import { getListBrands } from "../../apis/storeApiService";
import { AppContext } from "../../context/AppProvider";
export const StoreModal = () => {
    const { openModal, setOpenModal, brandList, storeModal, storeCategoryList } = useContext(AppContext);
    const [storeName, setStoreName] = useState("");
    const [phone, setPhone] = useState("");
    const [building, setBuilding] = useState("");
    const [account, setAccount] = useState("");
    const [status, setStatus] = useState(0);
    const [brand, setBrand] = useState("");
    const [storeCategory, setStoreCategory] = useState("");
    useEffect(() => {
        setStoreName(storeModal.name);
        setPhone(storeModal.phone || "");
        setBuilding(storeModal.buildingStore);
        setBrand({ label: storeModal.brandStoreName, value: storeModal.brandStoreId });
        setStoreCategory({ label: storeModal.storeCateName, value: storeModal.storeCateId });
        setStatus({ label: "Hoạt động", value: 0 });
        setAccount("");
    }, [storeModal]);

    const hanldeUpdate = () => {
        let productUpdate = {};
    };
    const customStylesPayment = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            borderColor: "#dee2e6",
            minHeight: "30px",
            height: "46px",
            // width: "200px",
            boxShadow: state.isFocused ? null : null,
            borderRadius: "0.5rem",
        }),

        input: (provided, state) => ({
            ...provided,
            margin: "5px",
        }),
    };
    const optionsBrand = brandList.map((item) => {
        return {
            label: item.name,
            value: item.id,
        };
    });
    const optionsCategoryStore = storeCategoryList.map((item) => {
        console.log(item);
        return {
            label: item.name,
            value: item.id,
        };
    });

    const optionsStatus = [
        { label: "Hoạt động", value: 0 },
        { label: "Ngưng hoạt động", value: 1 },
    ];
    return (
        <>
            <Row>
                <Col md="4">
                    <Modal
                        className="modal-dialog-centered"
                        size="xl"
                        isOpen={openModal}
                        toggle={() => {
                            setOpenModal(false);
                        }}
                    >
                        <div className="modal-body p-0">
                            <Card className="bg-secondary border-0 mb-0">
                                <CardHeader className="bg-transparent " style={{ border: "none" }}>
                                    <h3>Chi tiết</h3>
                                </CardHeader>
                                <CardBody className="" style={{ paddingTop: 0 }}>
                                    <Container className="" fluid style={{ padding: "0 0px" }}>
                                        <Row>
                                            <div className="col-lg-4 modal-product">
                                                <Card>
                                                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "10px 0px" }} className="align-items-center">
                                                        <CardHeader className="border-0">
                                                            <h2 className="mb-0">Hình ảnh</h2>
                                                        </CardHeader>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <form>
                                                            <div className="row">
                                                                <div className="" id="dropzone-single" style={{ width: "100%", padding: "0 30px 30px 30px" }}>
                                                                    <div className="" style={{ height: "100%" }}>
                                                                        <div className="view-img" onClick={() => {}}>
                                                                            <div className="view-img">
                                                                                <img
                                                                                    src={
                                                                                        storeModal.image ||
                                                                                        "https://firebasestorage.googleapis.com/v0/b/deliveryfood-9c436.appspot.com/o/food%2Ftopic-2.webp?alt=media&token=54a5086f-f2ea-4009-9479-28624019703e"
                                                                                    }
                                                                                    alt=""
                                                                                    width="100"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </Card>
                                            </div>
                                            <div className="col-lg-8 modal-product">
                                                <Card>
                                                    <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "10px 0px" }} className="align-items-center">
                                                        <CardHeader className="border-0" style={{ padding: "15px" }}>
                                                            <h2 className="mb-0">Thông tin cửa hàng </h2>
                                                        </CardHeader>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Mã cửa hàng </label>
                                                                        <input className="form-control" type="search" id="example-search-input" value={storeModal.id} readOnly onChange={() => {}} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Tên cửa hàng </label>
                                                                        <input
                                                                            className="form-control"
                                                                            type="search"
                                                                            id="example-search-input"
                                                                            value={`${storeName}`}
                                                                            onChange={(e) => {
                                                                                setStoreName(e.target.value);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Số điện thoại </label>
                                                                        <input
                                                                            className="form-control"
                                                                            type="number"
                                                                            id="example-search-input"
                                                                            value={`${phone}`}
                                                                            onChange={(e) => {
                                                                                setPhone(e.target.value);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Building </label>
                                                                        <input
                                                                            className="form-control"
                                                                            type="search"
                                                                            id="example-search-input"
                                                                            value={`${building}`}
                                                                            onChange={(e) => {
                                                                                setBuilding(e.target.value);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Thương hiệu</label>
                                                                        <Select
                                                                            options={optionsBrand}
                                                                            placeholder="Thương hiệu"
                                                                            styles={customStylesPayment}
                                                                            value={brand}
                                                                            onChange={(e) => {
                                                                                setBrand(e);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Loại cửa hàng</label>
                                                                        <Select
                                                                            options={optionsCategoryStore}
                                                                            placeholder="Loại cửa hàng"
                                                                            styles={customStylesPayment}
                                                                            value={storeCategory}
                                                                            onChange={(e) => {
                                                                                setStoreCategory(e);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Số tài khoản </label>
                                                                        <input
                                                                            className="form-control"
                                                                            type="search"
                                                                            id="example-search-input"
                                                                            value={`${account}`}
                                                                            onChange={(e) => {
                                                                                setAccount(e.target.value);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Trạng Thái</label>
                                                                        <Select
                                                                            options={optionsStatus}
                                                                            placeholder="Trạng Thái"
                                                                            styles={customStylesPayment}
                                                                            value={status}
                                                                            defaultValue={status}
                                                                            onChange={(e) => {
                                                                                console.log(e);
                                                                                setStatus(e);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </Card>
                                            </div>
                                        </Row>
                                        <Col className="text-md-right mb-3" lg="12" xs="5">
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
                </Col>
            </Row>
        </>
    );
};
