// const fs = require("fs");
// const markdownIt = require("markdown-it")();

// const mdFilesDir = "../../md/"; // Markdown 文件所在的目录
// // const outputHtmlDir = '/path/to/output/html'; // 转换后的 HTML 文件输出目录

// // 读取 Markdown 文件内容并转换成 HTML

// function generateHtmlBymd(filename, suffix = ".md") {
// 	return new Promise((resolve, reject) => {
// 		fs.readdir(mdFilesDir, (err, files) => {
// 			console.log(files);
// 			if (err) throw err;
// 			const mdFiles = files.filter((file) => file === filename + suffix);
// 			if (mdFiles.length > 0) {
// 				const mdContent = fs.readFileSync(`${mdFilesDir}/${mdFiles[0]}`, "utf8");
// 				const htmlContent = markdownIt.render(mdContent);
// 				resolve(htmlContent);
// 			}
// 			resolve("");
// 		});
// 	});
// }
// generateHtmlBymd("directives").then((res) => {
// 	console.log(res);
// });
