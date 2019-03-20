export const ProductsUrl = "http://localhost:3000/server/data/shopList"
export default {
    /**
     * 通过用户的编号来获取carts信息
     * @param cb 返回的数据
     */
    ProductLists(cb) {
        fetch(ProductsUrl).then(res => {
            res.json().then(data => {
                cb(data)
            })
        })
    },

}