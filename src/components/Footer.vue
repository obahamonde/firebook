<template>
  <button
    tr
    m-4
    class="icon-btn mx-2 !outline-none"
    title="Dark"
    @click="toggleDark()"
  >
    <div i="carbon-sun dark:carbon-moon" />
  </button>
  <nav text-xl mt-6 col tl m-4>
    <RouterLink class="icon-btn m-2" to="/" title="Home">
        <Ico icon="mdi-home" />
    </RouterLink>
    <RouterLink class="icon-btn m-2" to="/about" title="About">
       <Ico icon="mdi-post" />
    </RouterLink>
   
  </nav>
</template>
