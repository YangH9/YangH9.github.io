module.exports = {
  printWidth: 150, // 一行的字符数换行
  tabWidth: 2, // 一个tab代表几个空格数
  useTabs: false, // 是否使用tab进行缩进
  singleQuote: true, // 字符串是否使用单引号
  semi: false, // 行尾是否使用分号，默认为true
  trailingComma: 'none', // 是否使用尾逗号
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  endOfLine: 'auto', // 保留在 Windows 和 Unix 下的换行符,
  disableLanguages: ['vue'] // 不格式化vue文件，vue文件的格式化单独设置
}
