const vscode = require('vscode');
const fs = require("fs");
/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {

	let disposable = vscode.commands.registerCommand('extension.load', function () {
		vscode.window.showInformationMessage('WriterHelper 已启用');
	});
	context.subscriptions.push(disposable);

	var array = []; //该数组用于存放配置文件的每行文本
	var path = "";

	//获取当前文件路径，修改配置
	context.subscriptions.push(vscode.commands.registerCommand('extension.getPath', (uri) => {
		vscode.workspace.getConfiguration().update('writerHelper.path',uri.path.substring(1),true);
	}));

	//监听配置变化
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(() => {
		//从配置获取文件路径
		path = vscode.workspace.getConfiguration().get('writerHelper.path');
		//按行将文本存入数组
		fs.readFile(path, function (err, data) {
			if (err) {
				return console.error(err);
			}
			array = data.toString().split("\r\n");
		});
	}));

	//悬浮菜单
	path = vscode.workspace.getConfiguration().get('writerHelper.path');
	fs.readFile(path, function (err, data) {
		if (err) {
			return console.error(err);
		}
		array = data.toString().split("\r\n");
	});
	let hover = vscode.languages.registerHoverProvider({ scheme: '*', language: '*' }, {
        provideHover(document, position, token) {
            var hoveredWord = document.getText(document.getWordRangeAtPosition(position));
			var markdownString = new vscode.MarkdownString();
			for(var i=0;i<array.length;i++) {
				if(array[i][0]=="@" && hoveredWord.toString()==array[i].substring(1)) {
					var str = "";
					//将两@开头的关键字间的内容存入str
					for(var j=i+1;j<array.length;j++){
						if(array[j][0]!='@')str = str.concat(array[j]+`\n`);
						else break;
					}
					markdownString.appendMarkdown(str);
					return {contents: [markdownString]};
				}
			}   
        }
    });
    context.subscriptions.push(hover);
}
exports.activate = activate;

module.exports = {
	activate
}