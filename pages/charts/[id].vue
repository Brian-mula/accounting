<template>
  <div>
    <div class="bg-white py-4 flex justify-between items-center mb-3">
      <div>
        <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
          Assets
        </h5>
      </div>
      <div>
        <h5
          class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
        >
          Ksh. 5000000
        </h5>
      </div>
    </div>

    <div >
          <div
            v-for="asset in assetTypes"
            :key="asset.id"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <nuxt-link
              :to="{ name: 'asset-id', params: { id: asset.id } }"
              class="flex justify-between w-full"
            >
              <div>
                <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                  {{ asset.title }}
                </h5>
                <p class="font-normal text-gray-500 text-xs px-4">#11</p>
              </div>
              <div>
                <h5
                  class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
                >
                  Ksh. 25000
                </h5>
                <p class="font-normal text-gray-500 text-xs px-4">Debit</p>
              </div>
            </nuxt-link>
          </div>
        </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custome",
});

const assetTypes = ref([
  {
    id: 11,
    title: "Current Assets",
  },
  {
    id: 12,
    title: "Fixed Assets",
  },
  
]);

</script>

<style lang="scss" scoped></style>
