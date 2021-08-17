import request from '../lib/request.js'

// params是object类型的请求参数
// BidRequest 是定义好的请求体model
// BidResponse 是定义好的响应model
// getAdRes 是接口名称
export function getAdRes(params) {
    const req = request.create('BidRequest', params)
    return request( req, 'BidResponse')
}
