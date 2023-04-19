// import MarkdownIt from "markdown-it";
// import hljs from "highlight.js";
// import fs from "fs";
// import path from "path";

// // 创建 markdown-it 实例
// const md = new MarkdownIt();

// export function generateHtmlBymd(filename: string, suffix = ".md") {
// 	return new Promise<string>((resolve) => {
// 		const mdFilesDir = `../../md/`; // Markdown 文件所在的目录
// 		const absolutePath = path.resolve(__dirname, mdFilesDir);
// 		console.log(absolutePath);
// 		fs.readdir(absolutePath, (err, files) => {
// 			console.log(files);
// 			if (err) throw err;
// 			const mdFiles = files.filter((file) => file === filename + suffix);
// 			if (mdFiles.length > 0) {
// 				const mdContent = fs.readFileSync(`${absolutePath}/${mdFiles[0]}`, "utf8");
// 				const htmlContent = md.render(mdContent) as string;
// 				resolve(htmlContent);
// 				return false;
// 			}
// 			resolve("");
// 		});
// 	});
// }
