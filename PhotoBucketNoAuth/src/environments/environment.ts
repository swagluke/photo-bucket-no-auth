// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCU0OxZSTZfgys8PJ82Kp-ubM4Q1zJ-HSw",
    authDomain: "photo-bucket-no-auth.firebaseapp.com",
    databaseURL: "https://photo-bucket-no-auth.firebaseio.com",
    storageBucket: "photo-bucket-no-auth.appspot.com",
    messagingSenderId: "366849382934"
  }
};
