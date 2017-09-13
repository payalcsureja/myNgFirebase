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
  git commit -a -m "utility shared functions"
  git push

  ng build --prod
  firebase login
  firebase deploy
-->