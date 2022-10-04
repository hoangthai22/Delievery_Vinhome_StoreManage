import axios from "axios";

const BASE_URL = "https://deliveryvhgp-webapi.azurewebsites.net/api/v1/";
const PRODUCT = "products";
const MENU = "menus";
const CATEGORY = "category-management";

//https://deliveryvhgp-webapi.azurewebsites.net/api/v1/products/s4/products?pageIndex=1&pageSize=10
export const getListProducts = (shopId, page, size) => {
    return axios.get(`${BASE_URL}${PRODUCT}/${shopId}/${PRODUCT}?pageIndex=${page}&pageSize=${size}`, {
        Accept: "application/json",
        "Content-Type": "application/json",
    });
};
//https://deliveryvhgp-webapi.azurewebsites.net/api/v1/menus/1/not-products/filter?storeId=s4&page=1&pageSize=100
export const getListProductOutOfMenu = (shopId, menuId, page, size) => {
    console.log(`${BASE_URL}${MENU}/${menuId}/filter?storeId=${shopId}&page=${page}&pageSize=${size}`);
    return axios.get(`${BASE_URL}${MENU}/${menuId}/not-products/filter?storeId=${shopId}&page=${page}&pageSize=${size}`, {
        Accept: "application/json",
        "Content-Type": "application/json",
    });
};

//https://deliveryvhgp-webapi.azurewebsites.net/api/v1/category-management/categories?pageIndex=1&pageSize=10
export const getListCategorys = (page, size) => {
    return axios.get(`${BASE_URL}${CATEGORY}/categories?pageIndex=${page}&pageSize=${size}`, {
        Accept: "application/json",
        "Content-Type": "application/json",
    });
};
export const putProductInStore = (product) => {
    return axios.put(`${BASE_URL}${PRODUCT}/${product.id}`, product);
};
//https://deliveryvhgp-webapi.azurewebsites.net/api/v1/products
//https://deliveryvhgp-webapi.azurewebsites.net/api/v1/products
export const postProductInStore = (product) => {
    return axios.post(`${BASE_URL}${PRODUCT}`, product);
};
