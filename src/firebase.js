import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCK88T-7eX2PXTTA4yR0J1eBZUgM-2FbUM',
  authDomain: 'fir-authentication-9bdbf.firebaseapp.com',
  projectId: 'fir-authentication-9bdbf',
  storageBucket: 'fir-authentication-9bdbf.appspot.com',
  messagingSenderId: '1070048205800',
  appId: '1:1070048205800:web:4fee2b4737790de7bbe25d'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
