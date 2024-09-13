/**
 * 项目api统一管理
 */
import request from "./request";

//请求 首页左侧表格数据
export default {
    getTableData() {
        return request.get('/api/home/getTableData')
    },

}