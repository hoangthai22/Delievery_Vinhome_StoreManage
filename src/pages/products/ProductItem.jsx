import React, { useContext } from "react";
import { Media } from "reactstrap";
import { AppContext } from "../../context/AppProvider";

export const ProductItem = ({ data }) => {
    const { setOpenModal, setProductModal } = useContext(AppContext);

    // console.log(data);
    return (
        <tr>
            <th scope="row" className="table-text-product">
                <Media className="align-items-center">
                    <a className="avatar  mr-3" href="#pablo" style={{ width: 100, height: 100, margin: "5px 0" }} onClick={(e) => e.preventDefault()}>
                        <img
                            alt="..."
                            src={data.cover || "https://firebasestorage.googleapis.com/v0/b/deliveryfood-9c436.appspot.com/o/food%2Ftopic-2.webp?alt=media&token=54a5086f-f2ea-4009-9479-28624019703e"}
                        />
                    </a>
                    <Media>
                        <span className="name mb-0 text-sm">{data.name}</span>
                    </Media>
                </Media>
            </th>
            <td className="budget table-text-product">{data.pricePerPack * 1000}</td>
            <td className="budget table-text-product">S{data.id}</td>
            <td>
                <span className="badge badge-lg badge-primary " style={{ color: "var(--secondary)", fontSize: 11, padding: "1em 1.4em" }}>
                    {data.productCategory}
                </span>
            </td>
            <td>
                {/* <Badge color="" className="badge-dot mr-4">
                    <i className="bg-warning" />
                    <span className="status">pending</span>
                </Badge> */}
                {!data.isActive ? (
                    <span className={`badge  status-success`} style={{ padding: "0.8em 1.2em", fontSize: 12 }}>
                        Còn Hàng
                    </span>
                ) : (
                    <span className={`badge  status-cancel`} style={{ padding: "0.8em 1.2em", fontSize: 12 }}>
                        Hết hàng
                    </span>
                )}
            </td>
            {/* <td>
                <div className="avatar-group">
                    <a className="avatar avatar-sm rounded-circle" href="#pablo" id="tooltip160923422" onClick={(e) => e.preventDefault()}>
                        <img alt="..." src={"https://i0.wp.com/www.society19.com/wp-content/uploads/2018/07/things-narcissistic-men-do.jpg?w=1000&ssl=1"} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip160923422">
                        Ryan Tompson
                    </UncontrolledTooltip>
                    <a className="avatar avatar-sm rounded-circle" href="#pablo" id="tooltip514211229" onClick={(e) => e.preventDefault()}>
                        <img alt="..." src={"https://i0.wp.com/www.society19.com/wp-content/uploads/2018/07/things-narcissistic-men-do.jpg?w=1000&ssl=1"} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip514211229">
                        Romina Hadid
                    </UncontrolledTooltip>
                    <a className="avatar avatar-sm rounded-circle" href="#pablo" id="tooltip726857513" onClick={(e) => e.preventDefault()}>
                        <img alt="..." src={"https://i0.wp.com/www.society19.com/wp-content/uploads/2018/07/things-narcissistic-men-do.jpg?w=1000&ssl=1"} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip726857513">
                        Alexander Smith
                    </UncontrolledTooltip>
                    <a className="avatar avatar-sm rounded-circle" href="#pablo" id="tooltip469193676" onClick={(e) => e.preventDefault()}>
                        <img alt="..." src={"https://i0.wp.com/www.society19.com/wp-content/uploads/2018/07/things-narcissistic-men-do.jpg?w=1000&ssl=1"} />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip469193676">
                        Jessica Doe
                    </UncontrolledTooltip>
                </div>
            </td> */}
            {/* <td>
                <div className="d-flex align-items-center">
                    <span className="completion mr-2">60%</span>
                    <div>
                        <Progress max="100" value="60" color="warning" />
                    </div>
                </div>
            </td> */}
            <td className="text-right">
                {/* <UncontrolledDropdown>
                    <DropdownToggle className="btn-icon-only text-light" color="" role="button" size="sm">
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Action
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Another action
                        </DropdownItem>
                        <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Something else here
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown> */}
                <i
                    className="fa-solid fa-pen-to-square mr-3 cusor"
                    style={{ fontSize: 22 }}
                    onClick={() => {
                        setProductModal(data);
                        setOpenModal(true);
                    }}
                ></i>
                <i className="fa-regular fa-trash-can mr-3 cusor" style={{ fontSize: 22 }}></i>
            </td>
        </tr>
    );
};
