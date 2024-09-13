import axios from 'axios'
import { ElMessage } from 'element-plus'
const instance = axios.create();//创建实例
const NETWORK_ERROR = '网络异常，请稍后重试'
//请求拦截器
instance.interceptors.request.use(function (config) {
  // 发送请求之前做什么
  return config;
}, function (error) {
  // 对请求错误做什么
  return Promise.reject(error);
});

// 相应拦截器
instance.interceptors.response.use(
  (res) => {
    const { code, data, msg } = res.data;
    if (code === 200) {
      return data
    } else {
      ElMessage.error(msg || NETWORK_ERROR)
      return Promise.reject(msg || NETWORK_ERROR)
    }
  }
);
// 封装 GET 请求
export const get = (url, params = {}) => {
  // 给 params 设置默认值，防止未传递 params 时出错
  return instance.get(url, { params });
};

// 封装 POST 请求
export const post = (url, data = {}) => {
  return instance.post(url, data);
};

// 封装 PUT 请求
export const put = (url, data = {}) => {
  return instance.put(url, data);
};

// 封装 DELETE 请求
export const del = (url, data = {}) => {
  return instance.delete(url, { data });
};

export default {
  get,
  post,
  put,
  del
}


