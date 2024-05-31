<template>
  <div class="min-h-screen flex flex-col">
    <header class="sticky top-0 bg-white z-10">
      <div class="h-16 border-b">
        <div
          class="flex items-center h-full w-full max-w-screen-lg mx-auto px-4"
        >
          <a class="-ml-1.5 mr-auto flex p-1.5" href="/"
            ><div class="-m-0.5 mr-px text-lg">✨</div>
            <div class="-skew-x-12">
              <div>POKÉMON</div>
              <div class="-mt-1 font-bold">UN-AWESOME!</div>
            </div></a
          >
        </div>
      </div>
    </header>
    <div class="flex w-full max-w-screen-lg mx-auto px-4">
      <aside
        class="h-[calc(100vh-4rem)] border-r py-4 pr-4 hidden flex-col sticky top-16 self-start md:flex"
      >
        <h2 class="mb-2">MENU</h2>
        <NuxtLink
          class="flex items-center gap-2 border-l px-2.5 py-2 hover:text-black border-gray-400 text-gray-400 text-sm"
          href="#"
        >
          <Bug class="w-4 h-4" /> Pokemons
        </NuxtLink>
        <NuxtLink
          class="flex items-center gap-2 border-l px-2.5 py-2 hover:text-black border-gray-400 text-gray-400 text-sm"
          href="#"
        >
          <Grid2X2 class="w-4 h-4" /> Types
        </NuxtLink>
      </aside>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Grid2X2, Bug } from "lucide-vue-next";
</script>

<style scoped></style>
