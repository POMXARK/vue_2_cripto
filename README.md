# vue_2_cripto

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


/usr/local/bin/npm
which npm
node --max_old_space_size=300 /usr/local/bin/npm run build

docker build -t vue_2_cripto .



### demo-deploy (all in one)
- docker build -t vue_2_cripto .
- docker run -d -p 8000:8080 --name vue_2_cripto vue_2_cripto