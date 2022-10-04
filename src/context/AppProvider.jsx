import React, { useEffect, useState } from "react";
import { getListCategorys } from "../apis/productApiService";
import { getListBrands, getListStoreCategory } from "../apis/storeApiService";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
    const [openModal, setOpenModal] = useState(false);
    const [productModal, setProductModal] = useState({});
    const [storeModal, setStoreModal] = useState({});
    const [categoryList, setCategoryList] = useState([]);
    const [brandList, setBrandList] = useState([]);
    const [storeCategoryList, setStoreCategoryList] = useState([]);
    const [menuModal, setMenuModal] = useState(0);
    const [isLogin, setIsLogin] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        getListCategorys(1, 100).then((res) => {
            const categorys = res.data;
            setCategoryList(categorys);
        });
        getListBrands(1, 100)
            .then((res) => {
                const brands = res.data;
                setBrandList(brands);
            })
            .catch((error) => console.log(error));
        getListStoreCategory(1, 100)
            .then((res) => {
                const storeCategory = res.data;
                setStoreCategoryList(storeCategory);
            })
            .catch((error) => console.log(error));
        return () => {};
    }, []);

    return (
        <AppContext.Provider
            value={{
                openModal,
                setOpenModal,
                user,
                setUser,
                isLogin,
                setIsLogin,
                productModal,
                setProductModal,
                categoryList,
                setCategoryList,
                storeModal,
                setStoreModal,
                brandList,
                setBrandList,
                storeCategoryList,
                setStoreCategoryList,
                menuModal,
                setMenuModal,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
