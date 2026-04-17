const http = require("http");
const fs = require("fs");
const path = require("path");

const resumePath = path.join(__dirname, "resume.html");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/" || url === "/home") {
    fs.readFile(resumePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html;charset=utf-8" });
        res.end("<h1>服务器错误：简历文件不存在</h1>");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.end(data);
    });
  } else if (url === "/project") {
    res.writeHead(200, { "Content-Type": "application/json;charset=utf-8" });
    // 模拟项目列表 JSON
    const projectList = {
      projects: [
        { name: "成绩格式化工具", desc: "Node.js 自动化处理成绩单" },
        { name: "个人简历网站", desc: "局域网可访问的HTML简历" },
      ],
    };
    res.end(JSON.stringify(projectList));
  } else {
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
    res.end("<h1>404 Not Found</h1>");
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`简历服务器启动成功！`);
  console.log(`局域网访问地址：http://你的电脑IP:${PORT}`);
  console.log(`本地访问地址：http://127.0.0.1:${PORT}`);
});
