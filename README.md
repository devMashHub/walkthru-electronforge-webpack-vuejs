walkthru-electronforge-webpack-vuejs
====================================
A quick walkthru of getting electron-forge, webpack and vuejs working.


## Pre-requisites:

	Node.js (and NPM)
	https://nodejs.org/en/

	Git
	https://git-scm.com/
	
	Electron Forge
	https://electronforge.io/
	
	
## 1. Create the scaffolding using electron-forge

	> electron-forge init walkthru-electronforge-webpack-vuejs
	> cd walkthru-electronforge-webpack-vuejs

	
## 2. Test initial scaffolding is working

	> electron-forge start

	
## 3. Configure git, add remote and push (optional)

	> git config user.name 'username'
	> git config user.email 'email'
	> git remote add origin https://github.com/<yourgithub>/<repository>.git
	> git add -A
	> git commit -m "Installed scaffolding with electron-forge; initial git configuration"
	> git push origin master
	