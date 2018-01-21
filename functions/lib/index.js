"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.createUser = functions.auth.user().onCreate(event => {
    const doc = admin.firestore().doc(`/users/${event.data.uid}`);
    return doc.set({ email: event.data.email, username: event.data.email });
});
//# sourceMappingURL=index.js.map