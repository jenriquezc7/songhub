import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase)

export const createUser = functions.auth.user().onCreate(event => {
    const doc = admin.firestore().doc(`/users/${event.data.uid}`);
    return doc.set({email: event.data.email, username: event.data.email});
});
