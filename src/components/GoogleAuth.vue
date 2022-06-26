<script setup lang="ts">
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import { useUserStore } from '~/store/user';

const user = ref()
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
const login = async () => {
  const result = await signInWithPopup(auth,new GoogleAuthProvider());
  user.value = result["_tokenResponse"]["idToken"];
};

watch(user, (value) => {
  if (value) {
    async()=>{
      const u = await fetch('/api/'+value);
      user.value = u.json();
    }
  }
});

</script>

<template>
<div col center>
<pre>
    {{user}}
  </pre>
  
  <Ico icon="logos:google-icon" @click="login" 
    icon-btn x8 sh-md r-f p-1
   title="Login with Google"
   />
  </div>
</template>