import axios from "axios";

const BASE_URL = "https://deliveryvhgp-webapi.azurewebsites.net/api/v1/";
const BASE_URL_V2 = "https://deliveryvhgp-webapi.azurewebsites.net/api/v2/";
const STORE = "store-management";

//https://deliveryvhgp-webapi.azurewebsites.net/api/v1/store-management/stores?pageIndex=1&pageSize=10
// export const getListStores = (page, size) => {
//     return axios.get(`${BASE_URL}/${STORE}/${"stores"}?pageIndex=${page}&pageSize=${size}`, {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//     });
// };

//https://deliveryvhgp-webapi.azurewebsites.net/api/v2/brands?pageIndex=1&pageSize=10
export const getListBrands = (page, size) => {
    return axios.get(`${BASE_URL_V2}/${"brands"}?pageIndex=${page}&pageSize=${size}`, {
        Accept: "application/json",
        "Content-Type": "application/json",
    });
};

//https://deliveryvhgp-webapi.azurewebsites.net/api/v1/storeCategory-management/storeCategories?pageIndex=1&pageSize=10
export const getListStoreCategory = (page, size) => {
    return axios.get(`${BASE_URL}/${"storeCategory-management"}/storeCategories?pageIndex=${page}&pageSize=${size}`, {
        Accept: "application/json",
        "Content-Type": "application/json",
    });
};
