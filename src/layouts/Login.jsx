import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Spinner } from "reactstrap";
import "./style.css";

import { AppContext } from "../context/AppProvider";
import { notify } from "../components/Toast/ToastCustom";

export const Login = () => {
    const { setUser } = useContext(AppContext);
    const inputs = document.querySelectorAll(".input");
    const [isLoading, setIsLoading] = useState(false);
    let history = useHistory();
    function addcl() {
        let parent = this.parentNode.parentNode;
        parent.classList.add("focus");
    }

    function remcl() {
        let parent = this.parentNode.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", addcl);
        input.addEventListener("blur", remcl);
    });

    return (
        <div>
            <img class="wave" src="images/wave.png" alt="" />
            <div class="container">
                <div class="img">
                    <img src="images/bg.svg" />
                </div>
                <div class="login-content">
                    <form action="index.html" className="form-login">
                        <img src="images/avatar.svg" alt="" />
                        <h2 class="login-title">Chào mừng bạn đến với VinhomeGP Delivery</h2>
                        <div class="input-div one">
                            <div class="i">
                                <i class="fas fa-user"></i>
                            </div>
                            <div class="div">
                                <h5>Tên Đăng Nhập</h5>
                                <input type="text" class="input" />
                            </div>
                        </div>
                        <div class="input-div pass">
                            <div class="i">
                                <i class="fas fa-lock"></i>
                            </div>
                            <div class="div">
                                <h5>Mật Khẩu</h5>
                                <input type="password" class="input" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="btn-login"
                            value="Đăng Nhập"
                            disabled={isLoading}
                            onClick={(e) => {
                                e.preventDefault();
                                setIsLoading(true);
                                setTimeout(() => {
                                    setIsLoading(false);
                                    notify("Đăng Nhập Thành Công", "Success");
                                    setTimeout(() => {
                                        localStorage.setItem("user", JSON.stringify({ userName: "admin1", shopId: "s4" }));
                                        history.push("/");
                                    }, 1000);
                                }, 2000);
                            }}
                        >
                            {isLoading ? <Spinner style={{ color: "rgb(100,100,100)" }}>Loading...</Spinner> : "Đăng Nhập"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
