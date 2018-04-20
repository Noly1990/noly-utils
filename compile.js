const babel=require('babel-core');
const fs=require('fs');

const options=JSON.parse(fs.readFileSync('./.babelrc'));

let res=babel.transform('code();',options)

console.log(res)