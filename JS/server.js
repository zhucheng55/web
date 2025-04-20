const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// 启用 CORS
app.use(cors());

// 解析 JSON 请求体
app.use(bodyParser.json());

// 提供静态文件
app.use(express.static(__dirname));

// 注册接口
app.post('/user/addUser', (req, res) => {
    const { username, password, phone, email } = req.body;
    console.log('收到注册请求:', { username, password, phone, email });
    
    // 这里添加你的注册逻辑
    // 临时返回成功响应
    res.json({
        success: true,
        message: '注册成功'
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 