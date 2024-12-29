// * ================= Homework: OS MODULE =================
import os from "node:os";
import { URL } from "node:url";
// ? --------- 1-MASHQ ---------
// console.log(os.version());
// console.log(os.platform());
// ? --------- 1-MASHQ ---------

// ? --------- 2-MASHQ ---------
// console.log((os.totalmem() / 1024 / 1024 / 1024).toFixed(2), "GB");
// ? --------- 2-MASHQ ---------

// ? --------- 3-MASHQ ---------
// console.log(os.userInfo().username);
// ? --------- 3-MASHQ ---------

// ? --------- 4-MASHQ ---------
// console.log("Yadro'lar soni: ", os.cpus().length);
// ? --------- 4-MASHQ ---------

// * ================= Homework: OS MODULE =================
// ! --------------------------------------------------------
// * ================= Homework: PATH MODULE =================
import path from "path";
// ? --------- 5-MASHQ ---------
// console.log(path.basename(path.join(process.cwd(), "home.js")));
// ? --------- 5-MASHQ ---------

// ? --------- 6-MASHQ ---------
// console.log(path.extname(path.join(process.cwd(), "home.js")));
// ? --------- 6-MASHQ ---------

// ? --------- 7-MASHQ ---------
// console.log(path.dirname(path.join(process.cwd(), "home.js")));
// ? --------- 7-MASHQ ---------

// ? --------- 8-MASHQ ---------
// console.log(path.join(process.cwd(), "sub","rasm.jpg"));
// ? --------- 8-MASHQ ---------

// * ================= Homework: PATH MODULE =================
// ! --------------------------------------------------------
// * ================= Homework: URL MODULE =================
// ? --------- 9-MASHQ ---------
// const url = new URL("https://www.example.com:8080/path");
// console.log("Domain: ", url.hostname);
// console.log("Port: ", url.port);
// ? --------- 9-MASHQ ---------

// ? --------- 10-MASHQ ---------
// const url = new URL("https://www.example.com/search?name=Ali&age=25");
// console.log(url.searchParams.get("name"));
// ? --------- 10-MASHQ ---------

// ? --------- 11-MASHQ ---------
// const url = new URL("https://www.example.com");
// console.log(url.protocol);
// ? --------- 11-MASHQ ---------

// ? --------- 12-MASHQ ---------
// const url = new URL("https://user:pass@example.com:8080/path?query=value");
// console.log("protokol: ", url.protocol);
// console.log("login: ", url.username);
// console.log("password: ", url.password);
// console.log("domain: ", url.hostname);
// console.log("port: ", url.port);
// console.log("path: ", url.href);
// console.log("query: ", url.searchParams.get("query"));
// ? --------- 12-MASHQ ---------

// * ================= Homework: URL MODULE =================
