const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),						//动态获取绝对路径
		filename: 'index.js'
	}
}