// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firestore: {
    apiKey: "AIzaSyAOcSQKn32KNLcMTvrC90PXlILepURXHWk",
    authDomain: "ate-test.firebaseapp.com",
    databaseURL: "https://ate-test.firebaseio.com",
    projectId: "ate-test",
    storageBucket: "",
    messagingSenderId: "706489164087",
    appId: "1:706489164087:web:72a7cdc6c43dd37f"
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.