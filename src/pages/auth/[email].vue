<script setup lang="ts">
const props = defineProps<{ email: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setUser({ email: props.email })
})

</script>
<template>
  <div>
    <div text-4xl col center>
      <img src="/logo.png" x16 grayscale dark:filter-none />
    </div>
    <p>
      Hi {{ props.email }}
    </p>

    <template v-if="user.otherEmails.length">
      <p text-sm mt-4>
        <span opacity-75>aka</span>
        <ul>
          <li v-for="otherEmail in user.otherEmails" :key="otherEmail">
            <router-link :to="`/auth/${otherEmail}`" replace>
              {{ otherEmail }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        btn text-sm
        @click="router.back()"
      >
      Back
      </button>
    </div>
  </div>
</template>