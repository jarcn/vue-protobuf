import axios from 'axios'
import protoRoot from '@/proto/proto'
import protobuf from 'protobufjs'

const httpService = axios.create({
    timeout: 45000,
    method: 'post',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/octet-stream'
    },
    responseType: 'arraybuffer'
})

// 请求体message
const PBMessageRequest = protoRoot.lookup('BidRequest')
// 响应体的message
const PBMessageResponse = protoRoot.lookup('BidResponse')

const apiVersion = '1.0.0'
const token = 'my_token'

function getMessageTypeValue(msgType) {
    const PBMessageType = protoRoot.lookup('framework.PBMessageType')
    const ret = PBMessageType.values[msgType]
    return ret
}

function transformRequest(data) {
    return data.messageData
}

function isArrayBuffer(obj) {
    return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
}

function transformResponseFactory(responseType) {
    return function transformResponse(rawResponse) {
        // 判断response是否是arrayBuffer
        if (rawResponse == null || !isArrayBuffer(rawResponse)) {
            return rawResponse
        }
        try {
            const buf = protobuf.util.newBuffer(rawResponse)
            // decode响应体
            const decodedResponse = PBMessageResponse.decode(buf)
            if (decodedResponse.messageData && responseType) {
                const model = protoRoot.lookup(responseType)
                decodedResponse.messageData = model.decode(decodedResponse.messageData)
            }
            return decodedResponse
        } catch (err) {
            return err
        }
    }
}

/**
 *
 * @param {*} msgType 接口名称
 * @param {*} requestBody 请求体参数
 * @param {*} responseType 返回值
 */
function request(requestBody, responseType) {
    // 构造公共请求体:PBMessageRequest
    const reqData = {
        messageData: requestBody, // 加密后的请求参数
    }

    // 将对象序列化成请求体实例
    const req = PBMessageRequest.create(reqData)

    return httpService.post('/api', req, {
        transformRequest,
        transformResponse: transformResponseFactory(responseType)
    }).then(({data, status}) => {
        // 对请求做处理
        if (status !== 200) {
            const err = new Error('服务器异常')
            throw err
        }
        console.log(data)
    }, (err) => {
        throw err
    })
}

// 在request下添加一个方法，方便用于处理请求参数
// 将请求数据encode成二进制，encode是proto.js提供的方法
request.create = function (protoName, obj) {
    const pbConstruct = protoRoot.lookup(protoName)
    return pbConstruct.encode(obj).finish();
}

export default request
