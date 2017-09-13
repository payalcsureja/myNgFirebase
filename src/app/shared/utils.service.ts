import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class UtilsService {
  static getRestUrl() {
    return environment.restUrl + 'api/';
  }
}


// If you create a file utils.ts which contains

// export default class Utils {
//     static doSomething(val: string) { return val; }
//     static doSomethingElse(val: string) { return val; }
// }

// then you can simplify your client code like this:

// import Utils from './utils'

// export class MyClass {
//      constructor()
//      {
//          Utils.doSomething("test");
//      }
// }

