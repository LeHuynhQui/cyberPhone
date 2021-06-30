function ProductService(params) {
    this.getProductListAPI = function (params) {
        return axios({
            url: `https://60db09f4801dcb0017290db1.mockapi.io/api/products`,
            method: "GET",
        })
    }
}