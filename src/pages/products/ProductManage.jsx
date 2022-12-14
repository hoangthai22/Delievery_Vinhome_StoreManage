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
// reactstrap components
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Spinner,
    Table,
} from "reactstrap";
import Select from "react-select";
import { getListProducts } from "../../apis/productApiService";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import { ProductModal } from "../../components/Modals/productModal";
import { AppContext } from "../../context/AppProvider";
import Pdata from "./Pdata";
import { ProductItem } from "./ProductItem";
// core components
function ProductManage() {
    const { openModal, categoryList } = useContext(AppContext);
    let history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [options, setOptions] = useState([]);
    const [productLists, setProductLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const options = categoryList?.map((item) => {
            return { label: item.name, id: item.id, value: item.id };
        });
        setOptions(options);
        hanldeGetListProduct();
        return () => {};
    }, [categoryList]);

    const hanldeGetListProduct = () => {
        setIsLoading(true);
        setProductLists([]);
        getListProducts("s4", 1, 10)
            .then((res) => {
                const products = res.data;
                setTimeout(() => {
                    setProductLists(products);
                    setIsLoading(false);
                }, 1000);
            })
            .catch((error) => console.log(error));
    };
    const handleReload = () => {
        hanldeGetListProduct();
    };
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

    return (
        <>
            <ProductModal openModal={openModal} handleReload={handleReload} />
            <SimpleHeader name="Danh S??ch S???n Ph???m" parentName="Qu???n L??" />
            <Container className="mt--6" fluid>
                <Row>
                    <div className="col">
                        <Card>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "20px 0px" }} className="align-items-center">
                                <CardHeader className="" style={{ padding: "0 0 0 20px" }}>
                                    <Form className="flex" style={{ alignItems: "center", gap: 20 }}>
                                        <FormGroup className="mb-0">
                                            <InputGroup className="input-group-lg input-group-flush" style={{ border: "1px solid #9e9e9e" }}>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText style={{ padding: "0 15px" }}>
                                                        <span className="fas fa-search" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input placeholder="T??m ki???m b???ng t??n s???n ph???m" type="search" className="btn-lg" style={{ height: 46, width: 250 }} />
                                            </InputGroup>
                                        </FormGroup>
                                        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                            <DropdownToggle
                                                className="dropdown"
                                                caret
                                                size="lg"
                                                style={{
                                                    height: 42,
                                                    borderRadius: "0.25rem",
                                                    boxShadow: "none",
                                                    border: "1px solid rgb(200,200,200)",
                                                    transition: "none",
                                                    padding: "10px 20px",
                                                    // background: "#fff",
                                                }}
                                            >
                                                Danh M???c
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Header</DropdownItem>
                                                <DropdownItem>Action</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown> */}
                                        <Select options={options} placeholder="Danh M???c" styles={customStylesPayment} />
                                    </Form>
                                </CardHeader>

                                <Col className="mt-3 mt-md-0 text-md-right" lg="6" xs="5">
                                    <Button
                                        onClick={() => history.push("/admin/product")}
                                        className="btn-neutral"
                                        color="default"
                                        size="lg"
                                        style={{ background: "var(--primary)", color: "#000", fontWeight: 700 }}
                                    >
                                        Th??m S???n Ph???m M???i
                                    </Button>
                                </Col>
                            </div>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th className="sort table-title" scope="col">
                                            T??n S???n Ph???m
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Gi?? ti???n
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            M?? S???n Ph???m
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Danh M???c
                                        </th>

                                        <th className="sort table-title" scope="col">
                                            Status
                                        </th>
                                        {/* <th scope="col">Users</th>
                                        <th className="sort" data-sort="completion" scope="col">
                                            Completion
                                        </th>
                                        <th scope="col" /> */}
                                    </tr>
                                </thead>
                                <tbody className="list">
                                    {productLists.map((item, index) => {
                                        return <ProductItem data={item} key={index} />;
                                    })}
                                </tbody>
                            </Table>
                            {productLists.length === 0 && !isLoading && (
                                <>
                                    <div className="center_flex" style={{ padding: "50px 0 0 0" }}>
                                        <img src="/icons/empty.png" alt="" style={{ textAlign: "center", width: 300 }} />
                                    </div>
                                    <h1 className="description" style={{ fontSize: 18, textAlign: "center", padding: "20px 0 50px 0" }}>
                                        Kh??ng c?? s???n ph???m n??o!!!
                                    </h1>
                                </>
                            )}
                            {isLoading && (
                                <CardBody className="loading-wrapper center_flex">
                                    <Spinner className="loading" type="grow"></Spinner>
                                    <Spinner className="loading" type="grow"></Spinner>
                                    <Spinner className="loading" type="grow"></Spinner>
                                </CardBody>
                            )}
                            {!isLoading && productLists.length > 0 && (
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination className="pagination justify-content-end mb-0" listClassName="justify-content-end mb-0">
                                            <PaginationItem className="disabled">
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} tabIndex="-1">
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    1
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    2 <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    3
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            )}
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default ProductManage;
