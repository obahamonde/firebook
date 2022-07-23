<script setup lang="ts">
useHead({
  title: "FireBook",
  meta: [
    { name: "description", content: "🔥 Likefacebook but ON FIRE 🔥" },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#00aba9" : "#ffffff")),
    },
  ],
  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div col center>
   <router-view/>
   <Auth br m-4 />
  </div>
</template>
