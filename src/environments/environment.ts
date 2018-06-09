// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBCMAHy_kR0UxmlLoI5hTdOL71T-j2CVqc",
    authDomain: "code-challenger.firebaseapp.com",
    databaseURL: "https://code-challenger.firebaseio.com",
    projectId: "code-challenger",
    storageBucket: "",
    messagingSenderId: "40664362528"
  },
  testRunnerBaseUrl: "/api/function/jasmine-faas"
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
