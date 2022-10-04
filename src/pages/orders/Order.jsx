import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Select from "react-select";
import { Card, CardBody, CardFooter, CardHeader, Container, Form, Pagination, PaginationItem, PaginationLink, Row, Spinner, Table } from "reactstrap";
import SimpleHeader from "../../components/Headers/SimpleHeader";
import Odata from "./OData";
import { OrderItem } from "./OrderItem";
export const Order = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const options = [
        { label: "Tất Cả", value: 1 },
        { label: "Tiền Mặt(COD)", value: 2 },
        { label: "Đã Thanh Toán", value: 3 },
    ];

    const optionsStatus = [
        { label: "Tài Xế Nhân Đơn", value: 1 },
        { label: "Đang Giao", value: 2 },
        { label: "Hoàn Thành", value: 3 },
        { label: "Đã Hủy", value: 4 },
    ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return () => {};
    }, []);

    const { orderItem } = Odata;

    useEffect(() => {
        setIsLoading(true);
        setInterval(() => {
            setOrders(orderItem);
            setIsLoading(false);
        }, 2000);
        return () => {};
    }, [orderItem]);

    let history = useHistory();
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
    const customStylesStatus = {
        control: (provided, state) => ({
            ...provided,
            background: "#fff",
            borderColor: "#9e9e9e",
            minHeight: "30px",
            height: "46px",
            width: "250px",
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
            <SimpleHeader name="Danh Sách Đơn Hàng" parentName="Quản Lý" />
            <Container className="mt--6" fluid>
                <Row>
                    <div className="col">
                        <Card>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "100%", padding: "20px 0px" }} className="align-items-center">
                                <CardHeader className="" style={{ padding: "0 0 0 20px", border: "none" }}>
                                    <Form className="flex" style={{ alignItems: "center", gap: 20 }}>
                                        {/* <FormGroup className="mb-0">
                                            <InputGroup className="input-group-lg input-group-flush" style={{ border: "2px solid #dce0e8" }}>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText style={{ padding: "0 15px" }}>
                                                        <span className="fas fa-search" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Tìm kiếm bằng tên sản phẩm"
                                                    type="search"
                                                    className="btn-lg input-search"
                                                    style={{ height: 44, width: 250, fontSize: "1.2rem !important" }}
                                                />
                                            </InputGroup>
                                        </FormGroup> */}
                                        <Select options={options} placeholder="Thanh Toán" styles={customStylesPayment} />
                                        <Select options={optionsStatus} placeholder="Trạng Thái Đơn Hàng" styles={customStylesStatus} />
                                    </Form>
                                </CardHeader>
                                {/* <Col className="mt-3 mt-md-0 text-md-right" lg="6" xs="5">
                                    <Button onClick={() => history.push("/admin/product")} className="btn-neutral" color="default" size="lg" style={{ background: "var(--secondary)", color: "#fff" }}>
                                        Thêm Sản Phẩm Mới
                                    </Button>
                                </Col> */}
                            </div>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th className="sort table-title" scope="col">
                                            Mã Đơn Hàng
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Điểm Giao Hàng
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Khách Hàng
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            SDT
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Giá trị Đơn hàng
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Ngày Tạo
                                        </th>

                                        <th className="sort table-title" scope="col">
                                            Thanh Toán
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Shipper
                                        </th>
                                        <th className="sort table-title" scope="col">
                                            Trạng Thái
                                        </th>
                                        {/* <th scope="col">Users</th>
                                        <th className="sort table-title" data-sort="completion" scope="col">
                                            Completion
                                        </th>
                                        <th scope="col" /> */}
                                    </tr>
                                </thead>

                                <tbody className="list">
                                    {orders.length > 0 &&
                                        orders.map((item, index) => {
                                            return <OrderItem data={item} key={index} />;
                                        })}
                                </tbody>
                            </Table>
                            {orders.length === 0 && !isLoading && (
                                <>
                                    <div className="center_flex" style={{ padding: "50px 0 0 0" }}>
                                        <img src="/icons/empty.png" alt="" style={{ textAlign: "center", width: 300 }} />
                                    </div>
                                    <h1 className="description" style={{ fontSize: 18, textAlign: "center", padding: "20px 0 50px 0" }}>
                                        Không có đơn hàng nào!!!
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
                            {!isLoading && orders.length > 0 && (
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
};
