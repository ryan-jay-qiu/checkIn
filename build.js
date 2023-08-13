#!/usr/bin/env node

const esbuild = require('esbuild')
esbuild.build({
  bundle: true,
  entryPoints: ['index.js'],
  outfile: 'dist/main.js',
  // platform: 'node',
  // format: 'cjs',
  // target: ['chrome58','firefox57','safari11','edge16'],
  // minify: true, // 开启代码压缩
}).then(()=>{
  console.log("-----打包完毕-----");
  process.exit(1);
}).catch((e) => {
  console.error(e);
  process.exit(1);
});