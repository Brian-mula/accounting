<template>
    <div>
    
   <div v-for="asset in current_assets" :key="asset.id" class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer">
     <nuxt-link :to="{name:'current-id',params:{id: asset.id}}" class="flex justify-between w-full">
      <div>
        <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
          {{asset.title}}
        </h5>
        <p class="font-normal text-gray-500 text-xs px-4">#11</p>
      </div>
      <div>
        <h5
          class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
        >
          Ksh. 50000
        </h5>
        <p class="font-normal text-gray-500 text-xs px-4">Debit</p>
      </div>
     </nuxt-link>
    </div>
    </div>
</template>

<script setup>
const current_assets=ref([
    {
        id: 111,
        title:'Cash'
    },
    {
        id: 112,
        title:'Bank',

    },
    {
        id: 113,
        title:'Inventory'
    },
    {
        id: 114,
        title:'Accounts Receivable'
    },
    {
        id: 115,
        title:'Petty Cash'
    },
    {
        id: 116,
        title:'Foreign exchange gains and losses'
    }
])
</script>

<style lang="scss" scoped>

</style>