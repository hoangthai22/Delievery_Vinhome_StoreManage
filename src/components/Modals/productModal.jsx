import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Button, Card, CardBody, CardHeader, Col, Container, Modal, Row, Spinner } from "reactstrap";
import { putProductInStore } from "../../apis/productApiService";
import { AppContext } from "../../context/AppProvider";
import { notify } from "../Toast/ToastCustom";
const unitData = ["Gam", "Kg", "Chai", "Hủ", "Hộp", "Cái"];
export const ProductModal = ({ handleReload }) => {
    const { openModal, setOpenModal, productModal, setProductModal, categoryList } = useContext(AppContext);
    const [pricePerPack, setPricePerPack] = useState(0);
    const [unit, setUnit] = useState(unitData[1]);
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [packNetWeight, setPackNetWeight] = useState(0);
    const [minQuantity, setMinQuantity] = useState(0);
    const [maxQuantity, setMaxQuantity] = useState(0);
    const [categorys, setCategorys] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let history = useHistory();
    useEffect(() => {
        setCategorys(categoryList);
        setProductName(productModal.name);
        setPricePerPack(productModal.pricePerPack);
        setMinQuantity(productModal.minimumQuantity);
        setPackNetWeight(productModal.packNetWeight);
        setMaxQuantity(productModal.maximumQuantity);
        setDescription(productModal.description);
        unitData.forEach((item) => {
            if (item === productModal.unit) {
                setUnit(item);
            }
        });
    }, [categoryList, productModal]);

    const hanldeUpdate = () => {
        setIsLoading(true);
        let productUpdate = {
            id: productModal.id,
            name: productName,
            image: null,
            unit: unit,
            pricePerPack: pricePerPack,
            packNetWeight: packNetWeight,
            packDescription: null,
            maximumQuantity: maxQuantity,
            minimumQuantity: minQuantity,
            minimumDeIn: productModal.minimumDeIn,
            description: description,
            rate: productModal.rate,
            storeId: productModal.storeId,
            storeName: productModal.storeName,
            storeImage: productModal.storeImage,
            slogan: productModal.slogan,
            categoryId: productModal.categoryId,
            productCategory: productModal.productCategory,
        };

        putProductInStore(productUpdate)
            .then((res) => {
                if (res.status === 200) {
                    notify("Cập Nhật Thành Công", "Success");
                    handleReload();
                }
                setOpenModal(false);
                setProductModal({});
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    };
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
                                                                                        productModal.image ||
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
                                                            <h2 className="mb-0">Thông tin sản phẩm</h2>
                                                        </CardHeader>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Mã Sản Phẩm</label>
                                                                        <input className="form-control" type="search" id="example-search-input" value={productModal.id} readOnly onChange={() => {}} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Tên Sản Phẩm</label>
                                                                        <input
                                                                            className="form-control"
                                                                            type="search"
                                                                            id="example-search-input"
                                                                            value={`${productName}`}
                                                                            onChange={(e) => {
                                                                                setProductName(e.target.value);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Loại Thực Phẩm</label>
                                                                        <select
                                                                            className="form-control choices__input"
                                                                            name="choices-category"
                                                                            id="choices-category-edit"
                                                                            hidden=""
                                                                            tabIndex="-1"
                                                                            data-choice="active"
                                                                            value={productModal.categoryId}
                                                                            onChange={() => {}}
                                                                        >
                                                                            {categorys.map((item) => {
                                                                                return <option value={item.id}>{item.name}</option>;
                                                                            })}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="form-control-label">Mua ít nhất</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        id="example-search-input"
                                                                        value={minQuantity}
                                                                        onChange={(e) => setMinQuantity(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <label className="form-control-label">Mua nhiều nhất</label>
                                                                    <input
                                                                        className="form-control"
                                                                        type="number"
                                                                        id="example-search-input"
                                                                        value={maxQuantity}
                                                                        onChange={(e) => setMaxQuantity(e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Đơn Vị Tính</label>
                                                                        <select
                                                                            onChange={(e) => setUnit(e.target.value)}
                                                                            className="form-control choices__input"
                                                                            name="choices-category"
                                                                            id="choices-category-edit"
                                                                            hidden=""
                                                                            tabIndex="-1"
                                                                            data-choice="active"
                                                                        >
                                                                            {unitData.map((item) => (
                                                                                <option value={item} key={item} selected={item === productModal.unit}>
                                                                                    {item}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="form-control-label">Giá / Đóng gói</label>
                                                                    <div className="align-items-center flex">
                                                                        <input
                                                                            style={{}}
                                                                            className="form-control"
                                                                            value={`${pricePerPack}`}
                                                                            type="number"
                                                                            id="example-search-input"
                                                                            onKeyDown={(e) => e.keyCode !== 69}
                                                                            onChange={(e) => {
                                                                                setPricePerPack(e.target.value);
                                                                                // if (e.target.value === "") {
                                                                                //     setfirstNameState("invalid");
                                                                                // } else {
                                                                                //     setfirstNameState("valid");
                                                                                // }
                                                                            }}
                                                                        />
                                                                        {/* <span style={{ fontSize: 16 }}>/{unit}</span> */}
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <label className="form-control-label">Đóng gói</label>
                                                                    <div className="align-items-center flex">
                                                                        <input
                                                                            style={{ textAlign: "end" }}
                                                                            className="form-control"
                                                                            type="number"
                                                                            id="example-search-input"
                                                                            value={packNetWeight}
                                                                            onKeyDown={(e) => e.keyCode !== 69}
                                                                            onChange={(e) => {
                                                                                setPackNetWeight(e.target.value);
                                                                                // if (e.target.value === "") {
                                                                                //     setfirstNameState("invalid");
                                                                                // } else {
                                                                                //     setfirstNameState("valid");
                                                                                // }
                                                                            }}
                                                                        />
                                                                        <span style={{ fontSize: 16 }}>{unit}</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="form-control-label">Miêu tả</label>
                                                                        <textarea
                                                                            className="form-control"
                                                                            id="exampleFormControlTextarea1"
                                                                            value={description}
                                                                            rows="3"
                                                                            onChange={(e) => {
                                                                                setDescription(e.target.value);
                                                                            }}
                                                                        ></textarea>
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
                                                    hanldeUpdate();
                                                }}
                                                className="btn-neutral"
                                                color="default"
                                                size="lg"
                                                disabled={isLoading}
                                                style={{ background: "var(--primary)", color: "#000", padding: "0.875rem 2rem" }}
                                            >
                                                <div className="flex" style={{ alignItems: "center", width: 99, justifyContent: "center" }}>
                                                    {isLoading ? (
                                                        <Spinner style={{ color: "rgb(100,100,100)", width: "1.31rem", height: "1.31rem" }}>Loading...</Spinner>
                                                    ) : (
                                                        <>
                                                            <i className="fa-solid fa-square-plus" style={{ fontSize: 18 }}></i>
                                                            <span>Chỉnh Sửa</span>
                                                        </>
                                                    )}
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
