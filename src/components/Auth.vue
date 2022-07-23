<script setup lang="ts">
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { useUserStore } from '~/store/user';

const auth = getAuth(initializeApp({
  apiKey: "AIzaSyC-EWWaIHK_yLZMM9EAMhzSH7cyYc6exls",
  authDomain: "intaas-880b3.firebaseapp.com",
  databaseURL: "https://intaas-880b3-default-rtdb.firebaseio.com",
  projectId: "intaas-880b3",
  storageBucket: "intaas-880b3.appspot.com",
  messagingSenderId: "244469163250",
  appId: "1:244469163250:web:2fd9dc63e68510a6e4dc6b",
  measurementId: "G-DCT8N5SDFE"
}));

const { setUser, getUser, currentUser } = useUserStore();

const login = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  setUser(
    {
      "name": user.displayName,
      "email": user.email,
      "avatar": user.photoURL,
      "uid": user.uid,
      "_sts": {
        "accessToken": user.stsTokenManager.accessToken,
        "idToken": await user.getIdToken(),
        "refreshToken": user.stsTokenManager.refreshToken,
        "expiresIn": user.stsTokenManager.expirationTime,
        "tokenType": "Bearer"
      }

    }
  );
};

const logout = async () => {
  await signOut(auth);
  setUser(null);
};

</script>

<template>
<div x16>
<div col center v-if="getUser()">
  <img :src="getUser().avatar" 
  
    @click="logout"
  rf sh-lg /> 
  </div>
  <div v-else>
  <Ico icon="logos:google-icon" @click="login" 
    icon-btn sh-md rf p-1 x16
   title="Login with Google"
   />
   </div></div>
</template>