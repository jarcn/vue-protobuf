# vue-protobuf

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 根据proto文件生成对应的js文件
```
npx pbjs -t json-module -w commonjs -o src/proto/proto.js  src/proto/*.proto
```
