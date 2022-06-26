<script setup lang="ts">
const user = useUserStore();
const name = $ref(user.savedName);

const router = useRouter();
const go = () => {
  if (name) router.push(`/auth/${encodeURIComponent(name)}`);
};
</script>

<template>
  <div>
  <Logo />

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="john@doe.com"
      aria-label="john@doe.com"
      type="email"
      autocomplete="false"
      p="x4 y2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">Please enter your email</label>

    <div>
      <button btn m-3 text-sm :disabled="!name" @click="go">Go</button>
  
    </div>
     <GoogleAuth />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
