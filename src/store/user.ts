import { acceptHMRUpdate, defineStore } from "pinia";
import { User } from "~/types";

export const useUserStore = defineStore("user", () => {
  const currentUser =  ref();

  function setUser(u: User) {
   currentUser.value = u;
  }

  function getUser() {
    return currentUser.value;
  }

  return {
    setUser,
    getUser,
    currentUser
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
