import { acceptHMRUpdate, defineStore } from "pinia";
import { User } from "~/types";
import { Ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const currentUser: Ref<User> = ref({
    email: "",
  });

  const savedEmail = ref(currentUser.value.email);
  const previousEmails = ref(new Set<string>());

  const usedEmails = computed(() => Array.from(previousEmails.value));
  const otherEmails = computed(() =>
    usedEmails.value.filter((email) => email !== savedEmail.value)
  );

  function setUser(u: User) {
    if (savedEmail.value) previousEmails.value.add(savedEmail.value);
    savedEmail.value = u.email;
    currentUser.value = u;
  }

  return {
    setUser,
    otherEmails,
    savedEmail,
    currentUser,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
