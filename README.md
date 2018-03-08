# MyNgFirebase - https://my-ng-firebase.firebaseapp.com/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

# Steps to get it up and running

Git clone https://github.com/payalcsureja/myNgFirebase.git
Cd myNgFirebase
Npm install

npm install -g typescript
npm install -g @angular/cli

ng serve -o

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng serve -o` to auto open dev server at `http://localhost:4200/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build ng build --environment=production

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<!--
## Firebase deploy

Run build cmd for the env you want like qa,stage,prod,firebase... with ng build --prod
Run firebase login and firebase deploy ... Which will deply dist dir
Make sure firebase is setup once, if not, run 'npm install -g firebase-tools' , 'firebase login', 'firebase init' with 'dist/' dir


##npm install --save toastr

##"../node_modules/toastr/build/toastr.min.css",
##"../node_modules/toastr/build/toastr.min.js"

##import * as toastr from 'toastr'
##toastr.error('toast working');

## OR

##npm install --save toastr
##npm install --save @types/toastr

##"../node_modules/toastr/build/toastr.min.css",
##"../node_modules/toastr/build/toastr.min.js"

##// in src/typings.d.ts
##declare module 'toastr';

##import * as toastr from 'toastr';

<!--
  git status
  git add *
  git commit -a -m "navbar shrink ui update"
  git push

  ng build --prod
  firebase login
  firebase deploy


  #How to use bash on Windows from visual studio code integrated terminal?
  Then open visual studio code and open the command palate using "ctrl+shift+p". Then type "open user setting" , then select " open user setting " from the drop down menu.
  Now copy this line of code to your own settings page (the pane on the right hand side) and save - "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe"

  Note: "C:\\Program Files\Git\bin\bash.exe" is the path where the bash.exe is located from git installation.

  Now press " ctrl+` " to open up terminal from vscode. And you will have bash

 
  Press and hold Ctrl + ` to open terminal. Inside terminal type 'bash' without the quotations to use gitbash in terminal. Note: Make sure you have gitbash installed on your machine.
  If you wish to use powershell again, just type 'powershell' without the quotations in terminal. To use Windows command line type 'cmd' in terminal.
  The setting you choose will be used as your default.

-->