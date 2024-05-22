<template>
  <header>
    <div class="h-16 px-4 border-b">
      <div class="flex items-center h-full w-full max-w-screen-lg mx-auto">
        <nav>
          <NuxtLink
            to="/"
            class="font-bold text-lg leading-none p-1 bg-green-100 inline-block"
            >Pokemon <br />DB</NuxtLink
          >
        </nav>
      </div>
    </div>
  </header>
  <div class="px-4">
    <div class="flex h-full w-full max-w-screen-lg mx-auto bg-red-50">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
