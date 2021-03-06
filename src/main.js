#!/usr/bin/env node
const lexer = require('./lexer')
const parser = require('./parser')
const runtime = require('./runtime')


const ove = {
  exec (text, hasPreprocess = true) {
    return runtime.run(parser.parse(lexer.lex(text, hasPreprocess)))
  }
}

// Node 环境下解释输入参数
console.log(ove.exec(process.argv[2]))

module.exports = ove
