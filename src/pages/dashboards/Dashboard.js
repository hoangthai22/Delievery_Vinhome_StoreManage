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
import React from "react";
// node.js library that concatenates classes (strings)
// react plugin used to create charts
// reactstrap components
import { Container } from "reactstrap";
import CardsHeader from "../../components/Headers/CardsHeader";

// core components
// import CardsHeader from "../../../components/Headers/CardsHeader.js";

function Dashboard() {
    const [activeNav, setActiveNav] = React.useState(1);
    const [chartExample1Data, setChartExample1Data] = React.useState("data1");
    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data(chartExample1Data === "data1" ? "data2" : "data1");
    };

    return (
        <>
            <CardsHeader name="" parentName="Dashboards" />
            <Container className="mt--6" fluid></Container>
        </>
    );
}

export default Dashboard;
