/*


1
解释下什么是 HTTP 协议，并且给出请求和响应的格式

HTTP 协议 : 一个传输协议，协议就是双方都遵守的规范。
1，浏览器（客户端）按照规定的格式发送文本数据（请求）到服务器
2，服务器解析请求，按照规定的格式返回文本数据（响应）到浏览器
3，浏览器解析得到的数据，并做相应处理

请求和返回是一样的数据格式，分为 4 部分：
1，请求行或者响应行
    - 请求格式： 'GET / HTTP/1.1\r\n' (method path HTTP/version)
    - 响应格式： 'HTTP/1.1 200 OK\r\n' (HTTP/version status-code explanation)
2，Header（请求的 Header 中 Host 字段是必须的，其他都是可选）
3，\r\n\r\n（连续两个换行回车符，用来分隔 Header 和 Body）
4，Body（可选）

answer:
HTTP 超文本传输协议，浏览器（客户端）与服务器之间收发文本数据所遵守的共同规范。
1、浏览器（客户端）--请求--> 服务器
2、服务器 --响应--> 浏览器
3、浏览器解析数据，并做出相应处理。

请求的格式：
'POST / HTTP/1.1\r\n'
'host:zhihu.com\r\n'
'\r\n'
'......'
第一部分：请求行，第一行写明是post请求类型，以及http1.1版本。
第二部分：请求头部Header，第二行至若干行，host 字段表目的地，必备，其他可选。
第三部分：空行，分隔 Header 和Body。
第四部分：请求数据Body，可选。

响应的格式：
'HTTP/1.1 200 OK\r\n'
'Date: Fri, 22 May 2009 06:07:21 GMT\r\n'
'\r\n'
<html>
      <head></head>
      <body>
            <!--body goes here-->
      </body>
</html>
第一部分：状态行，由HTTP协议版本号， 状态码， 状态描述三部分组成。
第二部分：为消息头，说明了客户端要使用的一些附加信息。。
第三部分：空行，分隔 Header 和 Body
第四部分：响应正文，服务器返回给客户端的文本信息，浏览器解析后显示成网页。
 */


/*
 // 2



 写出 http://ent.qq.com/movie/ 的原始请求数据（头部字段只需要包含 host）

 a：GET / HTTP/1.1\r\nHost:ent.qq.com\r\n\r\n

 写出 https://www.zhihu.com/question/21358581 的原始请求数据 (头部字段只需要包含 host)

 a: GET / HTTP/1.1\r\nHost:zhihu.com\r\n\r\n
*/

// 引入一个模块, 会在下面用到
const net = require('net')

// 定义我们的 log 函数
const log = console.log.bind(console)

// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
const ensure = (condition, message) => {
    // 在条件不成立的时候, 输出 message
    if (!condition) {
        log('*** 测试失败:', message)
    }
}


// 3
// 补全函数
const protocolOfUrl = (url) => {
    /*
    url 是字符串, 可能的值如下
    'g.cn'
    'g.cn/'
    'g.cn:3000'
    'g.cn:3000/search'
    'http://g.cn'
    'https://g.cn'
    'http://g.cn/'

    根据上课的, 如果 url 中省略了协议部分, 那么默认用的是 http 协议
    如果没有省略, 则按照 url 中协议部分的解析
    返回代表协议的字符串, 'http' 或者 'https'
    */
    let protocol = url.slice(0, 6)
    if (protocol === 'https:') {
        return 'https'
    }
    return 'http'
}

// 测试函数
const testProtocolOfUrl = () => {
    const urls = [
        ['g.cn', 'http'],
        ['g.cn/', 'http'],
        ['g.cn:3000', 'http'],
        ['g.cn:3000/search', 'http'],
        ['http://g.cn', 'http'],
        ['https://g.cn', 'https'],
        ['http://g.cn/', 'http'],
    ]
    for (let i = 0; i < urls.length; i++) {
        const u = urls[i]
        const [url, protocol] = u
        const result = protocolOfUrl(url)
        ensure(result === protocol, `test protocol of url-${i}`)
    }
}

// 4
// 补全函数
const hostOfUrl = (url) => {
    /*
    url 是字符串, 可能的值如下
    'g.cn'
    'g.cn/'
    'g.cn:3000'
    'g.cn:3000/search'
    'http://g.cn'
    'https://g.cn'
    'http://g.cn/'

    返回代表主机的字符串, 比如 'g.cn'
    */
    let s = url
    if (url.indexOf('http') === 0) {
        // 有 http
        s = url.slice(7)
        if (url.indexOf('https') === 0) {
            // 有 https
            s = url.slice(8)
        }
    }
    // 没有 http 或者 https
    let colon = s.indexOf(':')
    let slash = s.indexOf('/')
    if (colon >= 0) {
        s = s.slice(0, colon)
    } else if (slash >= 0) {
        s = s.slice(0, slash)
    }
    return s
}

// 测试函数
const testHostOfUrl = () => {
    const urls = [
        ['g.cn', 'g.cn'],
        ['g.cn/', 'g.cn'],
        ['g.cn:3000', 'g.cn'],
        ['g.cn:3000/search', 'g.cn'],
        ['http://g.cn', 'g.cn'],
        ['https://g.cn', 'g.cn'],
        ['http://g.cn/', 'g.cn'],
    ]
    for (let i = 0; i < urls.length; i++) {
        const u = urls[i]
        const [url, host] = u
        const result = hostOfUrl(url)
        ensure(result === host, `test host of url-${i}`)
    }
}

// 5
// 补全函数
const portOfUrl = (url) => {
    /*
    url 是字符串, 可能的值如下
    'g.cn'
    'g.cn/'
    'g.cn:3000'
    'g.cn:3000/search'
    'http://g.cn'
    'https://g.cn'
    'http://g.cn/'

    返回代表端口的数字, 比如 80 或者 3000
    注意, 如上课资料所述, 80 是 http 协议的默认端口, 443 是 https 协议的默认端口
    */
    let port = 80
    let host = hostOfUrl(url)
    let start = host + ':'
    if (url.indexOf(start) < 0) {
        // 没有 g.cn:
        if (protocolOfUrl(url) === 'https') {
            port = 443
        }
    } else {
        let tail = url.split(start)[1]
        port = Number(tail.split('/')[0])
    }
    return port
}

// 测试函数
const testPortOfUrl = () => {
    const urls = [
        ['g.cn', 80],
        ['g.cn/', 80],
        ['g.cn:3000', 3000],
        ['g.cn:3000/search', 3000],
        ['http://g.cn', 80],
        ['https://g.cn', 443],
        ['http://g.cn/', 80],
    ]
    for (let i = 0; i < urls.length; i++) {
        const u = urls[i]
        const [url, port] = u
        const result = portOfUrl(url)
        ensure(result === port, 'test port of url')
    }
}

// 6
// 补全函数
const pathOfUrl = (url) => {
    /*
    url 是字符串, 可能的值如下
    'g.cn'
    'g.cn/'
    'g.cn:3000'
    'g.cn:3000/search'
    'http://g.cn'
    'https://g.cn'
    'http://g.cn/'

    返回代表路径的字符串, 比如 '/' 或者 '/search'
    注意, 如上课资料所述, 当没有给出路径的时候, 默认路径是 '/'
    */
    let host = hostOfUrl(url)
    let list = url.split(host)
    let tail = list[1]
    let path = tail === '' ? '/' : tail
    if (tail[0] === ':') {
        // 有端口
        let index = tail.indexOf('/')
        if (index >= 0) {
            // 有 path
            path = tail.slice(index)
        } else {
            path = '/'
        }
    }
    return path
}

// 测试函数
const testPathOfUrl = () => {
    const urls = [
        ['g.cn', '/'],
        ['g.cn/', '/'],
        ['g.cn:3000', '/'],
        ['g.cn:3000/search', '/search'],
        ['http://g.cn', '/'],
        ['https://g.cn', '/'],
        ['http://g.cn/', '/'],
    ]
    for (let i = 0; i < urls.length; i++) {
        const u = urls[i]
        const [url, path] = u
        const result = pathOfUrl(url)
        ensure(result === path, 'test path of url')
    }
}

// 7
// 补全函数
const parsedUrl = (url) => {
    /*
    url 是字符串, 可能的值如下
    'g.cn'
    'g.cn/'
    'g.cn:3000'
    'g.cn:3000/search'
    'http://g.cn'
    'https://g.cn'
    'http://g.cn/'

    返回一个 object, 内容如下
    {
        protocol: protocol,
        host: host,
        port: port,
        path: path,
    }
    */
    let o = {
        protocol: protocolOfUrl(url),
        host: hostOfUrl(url),
        port: pathOfUrl(url),
        path: pathOfUrl(url),
    }
    return o
}


// 8
// 把向服务器发送 HTTP 请求并且获得数据这个过程封装成函数
// 这里为了方便处理, 我们把 url 统一固定成 http://movie.douban.com/top250
// 定义如下
const get = (url, callback) => {
    /*
    本函数使用上课代码 client.js 中的方式使用 socket 连接服务器
    获取服务器返回的数据
    注意, 返回的数据类型为 buffer
    */

    // ...
    // 板书其他部分代码
    // 设置连接服务器的信息

    // 计算出 host
    // const host = '115.182.201.8'
    // ... 板书其他部分代码


    let { protocol, host, port, path } = parsedUrl(url)

// 创建一个客户端, 可以连接到服务器
    const client = new net.Socket()

// 客户端根据给出的配置参数打开一个连接, 这样可以连接到服务器
    client.connect(port, host, () => {
        console.log('connect to: ', host, port)

        // 向服务器发送一个消息
        const request = `GET / HTTP/1.1\r\nHost: ${host}\r\n\r\n`
        client.write(request)
    })

// 当接收服务器的响应数据时触发 data 事件
    client.on('data', (d) => {
        // 参数是 d, 默认情况下是 buffer 类型
        // 可以用 d.toString() 将 buffer 转成字符串
        let resp = d.toString()
        console.log('response is', resp)
        callback(resp)
        // 完全关闭 client 的连接, 套路写法
        client.destroy()
    })

// client 关闭的时候触发这个事件
    client.on('close', function() {
        console.log('connection closed')
    })
}


const __main = () => {
    testProtocolOfUrl()
    testHostOfUrl()
    testPortOfUrl()
    testPathOfUrl()
    let url = 'http://movie.douban.com/top250'
    get(url, (...args) => {
        log('args is', args)
    })
}

__main()