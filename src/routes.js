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

import Dashboard from "./pages/dashboards/Dashboard";
import { Menus } from "./pages/menus/Menu";
import { Order } from "./pages/orders/Order";
import ProductManage from "./pages/products/ProductManage";

const routes = [
    {
        collapse: false,
        path: "/dashboard",
        name: "Bảng điều khiển",
        icon: "fa-solid fa-gauge",
        state: "dashboardsCollapse",
        component: Dashboard,
        layout: "/admin",
    },
    {
        collapse: false,
        path: "/menu",
        name: "Thực Đơn",
        component: Menus,
        icon: "fa-solid fa-bars",
        state: "tablesCollapse",
        layout: "/admin",
        miniName: "T",
    },
    {
        collapse: false,
        path: "/products",
        name: "Sản Phẩm",
        component: ProductManage,
        icon: "fa-solid fa-carrot in-active",
        state: "tablesCollapse",
        layout: "/admin",
        miniName: "T",
    },
    {
        path: "/orders",
        name: "Đơn Hàng",
        icon: "fa-solid fa-box",
        component: Order,
        layout: "/admin",
    },
];

export default routes;
