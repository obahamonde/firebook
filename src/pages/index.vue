<template>
  <div col center>
    Sign in with AWS Cognito
    <CognitoAuth dark:invert />
    <p>{{ data }}</p>
  </div>
</template>
<script setup lang="ts">
const data = ref();
async function fetchData() {
  const res = await fetch("/api/");
  const json = await res.json();
  data.value = json;
}
onMounted(fetchData());
</script>