// import os from "node:os";
// console.log(os.uptime()); // yoniq turgan vaqti (screen time)
// console.log(os.arch()); // raziryad 64
// console.log(os.cpus()); // yadro'lar soni
// console.log(os.freemem()); // opirativkadagi bo'sh joy
// console.log(os.totalmem()); // jami hotira

// console.log(__dirname);
// console.log(__filename);

import path from "path";
// console.log(path.basename(`${process.cwd()}/app.js`));

const pathName = path.join(process.cwd(), "apps", "app1.js");
// console.log(path.basename(pathName));
// console.log(path.dirname(pathName));
// console.log(path.extname(pathName));
// console.log(
//   path.format({
//     ext: ".js",
//     name: "app",
//     dir: process.cwd(),
//   })
// );
console.log(path.parse(pathName));
