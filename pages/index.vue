<template>
  <div class="w-full p-4">
    <div class="grid md:grid-cols-3 gird-cols-1 sm:grid-cols-2 gap-4 w-full">
      <PokeCard
        v-for="pokemon in pokeData?.results"
        :key="pokemon!.id!"
        :id="pokemon!.id!"
        :artwork="pokemon!.artwork!"
        :pokename="pokemon!.name!"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { graphql, type ResultOf } from "gql.tada";
import PokeCard from "~/components/common/PokeCard.vue";

const variables = ref({ limit: 30, offset: 0 });

const PokemonsQuery = graphql(`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      nextOffset
      prevOffset
      results {
        id
        artwork
        name
      }
    }
  }
`);

const { data } = await useAsyncQuery(PokemonsQuery, variables.value);

const pokeData = data.value?.pokemons;
</script>

<style scoped></style>
