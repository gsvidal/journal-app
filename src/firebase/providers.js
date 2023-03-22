import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const {
      user: { displayName, email, photoURL, uid },
    } = result;

    return {
      ok: true,
      //User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;

    // Update displayName
    await updateProfile( FirebaseAuth.currentUser, { displayName });
    
    // console.log(resp);
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    let customErrorMessage;
    switch (error.code) {
      case 'auth/email-already-in-use':
        customErrorMessage =
          'There is an existing account with associated with this email address';
      break;
      case 'auth/invalid-email':
        customErrorMessage = 'Invalid Email';
      break;
      case 'auth/operation-not-allowed':
        customErrorMessage = 'Operation not allowed';
      break;
      case 'auth/weak-password':
        customErrorMessage = 'Weak password';
      break;
    }
    return {
      ok: false,
      errorMessage: customErrorMessage,
    };
  }
};
