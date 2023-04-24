// import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// import * as functions from 'firebase-functions';
//
// const admin = require('firebase-admin');
// const serviceAccount = require('../serviceAccount.json');
//
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://fibal-app.firebaseio.com"
// });
//
//
// const universal = require(`${process.cwd()}/dist/fibalteleport/server`).app;
//
// export const ssr = functions.https.onRequest(universal);