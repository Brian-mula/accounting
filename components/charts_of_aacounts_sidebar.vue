<template>
  <div>
    <div class="w-64">
      <div class="mt-5">
        <div v-for="(chart, index) in charts" :key="index">
          <nuxt-link :to="{name:'charts-id',params:{id: chart.id}}"

            class="flex items-center p-2 text-base font-normal text-gray-700 hover:bg-gray-200 bg-white cursor-pointer"
          >
            <span class="ml-10 text-sm">{{ chart.title }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const charts = ref([
  {
    id: 123,
    title: "Assets",
  },
  {
    id: 124,
    title: "Revenues",
  },
  {
    id: 125,
    title: "Liabilitie",
  },
  {
    id: 126,
    title: "Expenses",
  },
  {
    id: 127,
    title: "Owners Equity",
  },
]);
</script>

<style lang="scss" scoped></style>
