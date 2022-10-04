import React, { useContext, useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { useHistory } from "react-router";
import Select from "react-select";
import { Button, Card, CardHeader, Col, Container, Row, Spinner } from "reactstrap";
import { postProductInStore } from "../../apis/productApiService";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import { notify } from "../../components/Toast/ToastCustom";
import { AppContext } from "../../context/AppProvider";
const unitData = [
    { label: "Gam", value: 1 },
    { label: "Kg", value: 2 },
    { label: "Chai", value: 3 },
    { label: "Hủ", value: 4 },
    { label: "Hộp", value: 5 },
    { label: "Cái", value: 6 },
    { label: "Ly", value: 7 },
];

export const NewProduct = () => {
    const { categoryList } = useContext(AppContext);
    const [options, setOptions] = useState([]);
    const [pricePerPack, setPricePerPack] = useState("");

    const [fileList, setFileList] = useState([]);

    const [unit, setUnit] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [packNetWeight, setPackNetWeight] = useState("");
    const [packDescription, setPackDescription] = useState("");
    const [maximumQuantity, setMaximumQuantity] = useState("");
    const [minimumQuantity, setMinimumQuantity] = useState("");
    const [minimumDeIn, setMinimumDeIn] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = React.useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const maxNumber = 69;
    let history = useHistory();
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };
    const hanldeSubmit = () => {
        setIsLoading(true);
        let product = {
            name: name,
            image: "",
            unit: unit,
            pricePerPack: parseFloat(pricePerPack),
            packNetWeight: parseFloat(packNetWeight),
            packDescription: packDescription,
            maximumQuantity: parseInt(maximumQuantity),
            minimumQuantity: parseInt(minimumQuantity),
            minimumDeIn: parseInt(minimumDeIn),
            storeId: "s4",
            categoryId: category.id,
            rate: 0,
            description: description,
        };
        console.log({ product });
        postProductInStore(product)
            .then((res) => {
                if (res.status === 200) {
                    notify("Thêm Sản Phẩm Thành Công", "Success");
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    };
    const customStylesPayment = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            borderColor: "#dee2e6",
            minHeight: "30px",
            height: "46px",
            boxShadow: state.isFocused ? null : null,
            borderRadius: "0.5rem",
        }),

        input: (provided, state) => ({
            ...provided,
            margin: "5px",
        }),
    };
    useEffect(() => {
        const options = categoryList?.map((item) => {
            return { label: item.name, id: item.id, value: item.id };
        });
        setOptions(options);
    }, [categoryList]);
    return (
        <>
            <SimpleHeader name="Thêm Mới Sản Phẩm" parentName="Quản Lý" />
            <Container className="mt--6" fluid>
                <Row>
                    {/* <div className="col-lg-4">
                        <Card>
                            <CardHeader>
                                <h2 className="mb-0">Hình ảnh</h2>
                            </CardHeader>
                            <CardBody>
                                <div className="dropzone dropzone-single mb-3" id="dropzone-single">
                                    <div className="" style={{ height: "100%" }}>
                                        <ImgCrop style={{width: "100%"}} aspect={375/250}  quality={1}>
                                            <Upload style={{width: "100%"}} action="https://www.mocky.io/v2/5cc8019d300000980a055e76" listType="picture-card" fileList={fileList} onChange={onChange} onPreview={onPreview}>
                                                {fileList.length < 1 && "+ Upload"}
                                            </Upload>
                                        </ImgCrop>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div> */}
                    <div className="col-lg-4">
                        <Card>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "10px 0px" }} className="align-items-center">
                                <CardHeader className="border-0" style={{ padding: "1rem" }}>
                                    <h2 className="mb-0">Hình ảnh</h2>
                                </CardHeader>
                            </div>
                            <div className="col-md-12">
                                <form>
                                    <div className="row">
                                        <div className="" id="dropzone-single" style={{ width: "100%", padding: "0 30px 30px 30px" }}>
                                            <div className="" style={{ height: "100%" }}>
                                                <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url" acceptType={["jpg"]}>
                                                    {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                                                        // write your building UI
                                                        <div className="upload-img" onClick={onImageUpload}>
                                                            {images.length <= 0 && (
                                                                <span style={isDragging ? { color: "red" } : null} {...dragProps}>
                                                                    Tải ảnh
                                                                </span>
                                                            )}
                                                            {imageList.map((image, index) => (
                                                                <div key={index} className="upload-img">
                                                                    <img src={image.data_url} alt="" width="100" />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </ImageUploading>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Card>
                    </div>
                    <div className="col-lg-8">
                        <Card>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "10px 0px" }} className="align-items-center">
                                <CardHeader className="border-0">
                                    <h2 className="mb-0">Thông tin sản phẩm</h2>
                                </CardHeader>
                            </div>
                            <div className="col-md-12">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-search-input" className="form-control-label">
                                                    Tên Sản Phẩm
                                                </label>
                                                <input className="form-control" value={name} type="search" id="example-search-input" onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="example-search-input" className="form-control-label">
                                                    Loại Thực Phẩm
                                                </label>
                                                <Select
                                                    options={options}
                                                    placeholder="Danh Mục"
                                                    styles={customStylesPayment}
                                                    onChange={(e) => {
                                                        setCategory(e);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group">
                                                <label for="example-search-input" className="form-control-label">
                                                    Đơn Vị Tính
                                                </label>
                                                <Select
                                                    options={unitData}
                                                    placeholder="Đơn vị tính"
                                                    styles={customStylesPayment}
                                                    onChange={(e) => {
                                                        setUnit(e.label);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="example-search-input" className="form-control-label">
                                                Giá / Đóng gói
                                            </label>
                                            <div className="align-items-center flex">
                                                <input
                                                    style={{ textAlign: "end" }}
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
                                                <span style={{ fontSize: 16 }}>/{unit}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="example-search-input" className="form-control-label">
                                                Đóng gói
                                            </label>
                                            <div className="align-items-center flex">
                                                <input
                                                    value={packNetWeight}
                                                    style={{ textAlign: "end" }}
                                                    className="form-control"
                                                    type="number"
                                                    id="example-search-input"
                                                    onKeyDown={(e) => e.keyCode !== 69}
                                                    onChange={(e) => {
                                                        setPackNetWeight(e.target.value);
                                                    }}
                                                />
                                                <span style={{ fontSize: 16 }}>{unit}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <label for="example-search-input" className="form-control-label">
                                                Thể tích / Khối lượng tịnh
                                            </label>
                                            <input
                                                value={packDescription}
                                                className="form-control"
                                                id="example-search-input"
                                                placeholder="330ml / Chai"
                                                onChange={(e) => {
                                                    setPackDescription(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label for="example-search-input" className="form-control-label">
                                                + / - Tối thiểu
                                            </label>
                                            <input className="form-control" id="example-search-input" value={minimumDeIn} onChange={(e) => setMinimumDeIn(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label for="example-search-input" className="form-control-label">
                                                Mua ít nhất
                                            </label>
                                            <input className="form-control" id="example-search-input" value={minimumQuantity} onChange={(e) => setMinimumQuantity(e.target.value)} />
                                        </div>
                                        <div className="col-md-3">
                                            <label for="example-search-input" className="form-control-label">
                                                Mua nhiều nhất
                                            </label>
                                            <input className="form-control" id="example-search-input" value={maximumQuantity} onChange={(e) => setMaximumQuantity(e.target.value)} />
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label for="example-search-input" className="form-control-label">
                                                    Miêu tả
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    rows="3"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <Col className="mt-3  text-md-right mb-4" lg="12" xs="5">
                                        <Button
                                            onClick={() => {
                                                history.push("/admin/products");
                                            }}
                                            className="btn-neutral"
                                            color="default"
                                            size="lg"
                                            style={{ background: "#fff", color: "#000", padding: "0.875rem 2rem" }}
                                        >
                                            <div className="flex" style={{ alignItems: "center" }}>
                                                <i className="fa-solid fa-backward" style={{ fontSize: 18 }}></i>
                                                <span>Trở Về</span>
                                            </div>
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                hanldeSubmit();
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
                                                        <span>Thêm mới</span>
                                                    </>
                                                )}
                                            </div>
                                        </Button>
                                    </Col>
                                </form>
                            </div>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};
