walkthru-electronforge-webpack-vuejs
====================================
A quick walkthru of getting electron-forge, webpack and vuejs working.


## Pre-requisites:

- [Node.js (and NPM)](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Electron Forge](https://electronforge.io/)


## QuickStart

Clone the repository

```
$ git clone https://github.com/devMashHub/walkthru-electronforge-webpack-vuejs.git
$ cd walkthru-electronforge-webpack-vuejs
```

Install dependencies with NPM

```
$ npm install
```

Transpile and package javascript with webpack:

```
$ npm run wbp
```

Start the app:

```
$ electron-forge start
```


> **or build it yourself:**

	
## 1. Create the scaffolding using electron-forge
```
$ electron-forge init walkthru-electronforge-webpack-vuejs
$ cd walkthru-electronforge-webpack-vuejs
```
	
## 2. Test initial scaffolding is working
```
$ electron-forge start
```
	
## 3. Configure git, add remote and push (optional)

```
$ git config user.name 'username'
$ git config user.email 'email'
$ git remote add origin https://github.com/<yourgithub>/<repository>.git
$ git add -A
$ git commit -m "Installed scaffolding with electron-forge; initial git configuration"
$ git push origin master
```
	
## 4. Install and configure webpack

```
$ npm install -D webpack
$ npm install -D webpack-cli
```

Modify your package.json file and add a script for webpack:

```js
"scripts": {
	"wbp": "webpack"
},
```

Create a basic configuration file for webpack (webpack.config.js):

```js
const path = require('path')
module.exports = {
	mode: 'development',
	entry: {
		mainvue: './src/main.js'
	},
	output: {
		path: path.resolve(__dirname, 'bundles'),
		filename: '[name].js'
	},
	module: {
		rules: []
	},
	plugins: []
}
```

Create an empty entrypoint (main.js) in the src folder:

```	
$ fsutil file createnew src/main.js 0
```

Test webpack:

```	
$ npm run webpack
```
	
> Confirm webpack has created an output file called mainvue.js in the bundles folder.

Add the bundle folder to .gitignore

Commit changes and push git repository (optional):

```	
$ git add -A
$ git commit -m "Installed and configured webpack"
$ git push origin master
```

## 5. Install and configure Vue.js

```
$ npm install vue
```

Create a new html page named main.html in the src folder:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>walkthru-electronforge-webpack-vuejs</title>
  </head>
  <body>
    <div id="app-element">
      {{ message }}
    </div>
  </body>
</html>

<script src="main.js"></script>
```

Modify the existing main.js in the src folder:

```js
import Vue from 'vue/dist/vue.js'

var app = new Vue({
    el: '#app-element',
	data: {
    message: 'Hello Vue!'
  }
});
```

Modify the existing index.js in the src folder by replacing the line:
```js
mainWindow.loadURL(`file://${__dirname}/index.html`);
```
with
```js
mainWindow.loadURL(`file://${__dirname}/main.html`);
```

> You may also choose to delete the unused index.html from the src folder

Test Vue.js is working:

```
$ electron-forge start
```

Commit changes and push git repository (optional):

```	
$ git add -A
$ git commit -m "Installed and tested Vue.js"
$ git push origin master
```

## 6. Install and configure webpack support for Vue single file components

```
$ npm install -D babel-core
$ npm install -D babel-loader@7
$ npm install -D css-loader
$ npm install -D less-loader
$ npm install -D vue-loader
//$ npm install -D babel-preset-env
//$ npm install -D vue-style-loader
//$ npm install -D vue-template-compiler
```

Update the main.html in the src folder:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>walkthru-electronforge-webpack-vuejs</title>
  </head>
  <body>
    <div id="app-element">
      <app-view></app-view>
    </div>
  </body>
</html>

<script src="../bundles/mainvue.js"></script>
```

Update the main.js in the src folder:

```js
import Vue from 'vue/dist/vue.js'
import AppView from '../src/AppView.vue';

var app = new Vue({

    el: '#app-element',
    components: {
        AppView,
    }

});
```

Create a new Vue component named AppView.vue in the src folder:

```html
<style lang='less' scoped>
	div {
		margin: 16px;
		p {
			color: purple;
			font-size: 32px;
		}
	}
</style>

<template>
	<div>
		<p> {{ message }} </p>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello from your AppView single file component!',
            }
        }
    }
</script>
```

Update the webpack config file (webpack.config.js):

```js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: {
        mainvue: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]                
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
```

Transpile and package javascript with webpack:

```
$ npm run wbp
```

Test Vue.js single file component (AppView.vue) is working:

```
$ electron-forge start
```

Commit changes and push git repository (optional):

```	
$ git add -A
$ git commit -m "Created and tested Vue.js single file component"
$ git push origin master
```

