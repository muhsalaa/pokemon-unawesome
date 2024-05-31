<template>
  <NuxtLink
    :to="`/pokemon/${id}`"
    class="flex gap-2 border border-gray-200 py-4 pl-4 rounded-lg overflow-hidden relative justify-between"
    :style="backgroundStyle"
  >
    <span class="flex flex-col">
      <span class="capitalize font-bold">{{ pokename }}</span>
      <span class="text-xs text-gray-500 mb-2"
        >#{{ id?.toString().padStart(4, "0") }}</span
      >
      <span class="text-xs capitalize italic">{{ poketypes?.join(", ") }}</span>
      <span>
        <span
          :class="`rounded-full w-3.5 h-3.5 inline-block border border-black dark:border-white ${
            poketypes?.length === 2 &&
            'last:top-0.5 last:-left-1.5 relative last:w-3 last:h-3'
          }`"
          v-for="type in poketypes?.slice(0, 2)"
          :key="type!"
          :style="`background-color: rgba(var(--${type}))`"
        ></span>
      </span>
    </span>

    <img
      :src="artwork"
      :alt="pokename"
      class="absolute right-4 max-h-24 w-full max-w-24"
    />

    <svg
      id="svg2"
      version="1.1"
      height="256"
      width="256"
      viewBox="0 0 256 256"
      class="absolute -right-16 -top-8 transform rotate-12 -z-10"
    >
      <path
        id="mainsymbolpath"
        style="opacity: 0.1; fill: #000000; fill-opacity: 1; stroke: none"
        d="m 154.54015,127.99605 c 0,14.65791 -11.88258,26.5405 -26.54049,26.5405 -14.65792,0 -26.5405,-11.88259 -26.5405,-26.5405 0,-14.65791 11.88258,-26.5405 26.5405,-26.5405 14.65791,0 26.54049,11.88259 26.54049,26.5405 z M 127.98849,38 C 82.019956,38 44.102136,72.45551 38.65601,116.95141 l 48.360613,0 c 4.858969,-18.07571 21.360667,-31.3734 40.971867,-31.3734 19.6112,0 36.13066,13.29769 40.99488,31.3734 l 48.36062,0 C 211.8949,72.45551 173.95702,38 127.98849,38 z M 38.65601,139.04859 C 44.102136,183.54449 82.019956,218 127.98849,218 c 45.96853,0 83.90641,-34.45551 89.3555,-78.95141 l -48.36062,0 c -4.86422,18.07571 -21.38368,31.37341 -40.99488,31.37341 -19.6112,0 -36.112898,-13.2977 -40.971867,-31.37341 l -48.360613,0 z"
      />
    </svg>
  </NuxtLink>
</template>

<script setup lang="ts">
import { graphql } from "gql.tada";

const props = defineProps<{
  id: number;
  artwork: string;
  pokename: string;
}>();

const PokemonDetailQuery = graphql(`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      types {
        type {
          name
        }
      }
    }
  }
`);

const { data } = await useAsyncQuery(PokemonDetailQuery, {
  name: props.pokename,
});

const backgroundStyle = computed(() => {
  if (poketypes?.length === 2) {
    return `background: linear-gradient(95deg, rgba(var(--${poketypes[0]}), 0.4), rgba(var(--${poketypes[1]}), 0.4));`;
  } else if (poketypes?.length === 1) {
    return `background-color: rgba(var(--${poketypes[0]}), 0.4);`;
  }
  return "background-color: #DEDFE7;";
});

const pokeData = data.value?.pokemon;
const poketypes = pokeData?.types?.map((item) => item?.type?.name);
</script>
