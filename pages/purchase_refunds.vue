<template>
    <div>
    <div class="flex justify-end items-end p-2">
      <div
        
        class="bg-blue-600 pr-2 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
      >
        
         <nuxt-link to="/new_purchase_refund"
        class="bg-blue-600 py-2 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
      >
        <font-awesome-icon :icon="['fas','plus']" class="text-white px-2" />
        <h4 class="text-white">New Puchase Refund</h4>
      </nuxt-link>
      </div>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Search</h3>
      <div class="flex justify-between items-center">
        <div class="w-80">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Supplier
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Any Client</option>
            </select>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Refund No.
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div class="w-80">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="status">
              Is Received
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">All</option>
              <option value="3">Unreceived</option>
              <option value="3">Partially received</option>
              <option value="3">Received</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex justify-end items-center">
      <div class="mx-4">
          <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Reset</button>
      </div>
       <div class="mx-4">
        <button type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Search</button>
       </div>
      </div>
    </form>
    <div class="mt-4 bg-white pb-2 px-4">
      <h3 class="text-purple-900 px-4 pt-2 border-b-2">Results</h3>
      <div class="flex justify-between items-center mb-2 border-b pb-2" v-for="invoice in purchase_refund" :key="invoice.id">
       <nuxt-link :to="{name:'refundables-id',params:{id: invoice.id}}" >
        <div class="cursor-pointer">
          <p class="font-normal text-gray-700 text-md">Next Invention</p>
          <p class="font-normal text-gray-600 text-sm">
           Githurai
            
          </p>
          <span class="text-gray-600 text-sm">Kiambu</span>
          <p class="font-normal text-gray-600 text-sm">
            Nairobi-central -50200
          </p>
        </div>
       
       </nuxt-link>
        <div>
          <h5 class="mb-1 mt-1 text-sm font-bold tracking-tight text-gray-500">
            Created
          </h5>
          <p class="font-normal text-gray-500 text-xs">8/7/2022</p>
          
        </div>
        <div>
          <div class="">
          <h3 class="pt-2 pb-1 px-4 text-lg text-gray-500">Ksh. 34000000</h3>
            <div class="flex justify-center items-center">
            <div class="bg-green-600 flex items-center justify-center rounded-sm">
            <p class="font-normal text-gray-50 text-sm px-3">paid</p>
            </div>
             <div class="bg-orange-600 flex items-center justify-center mx-2 rounded-sm">
            <p class="font-normal text-gray-50 text-sm px-3">Unreceived</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script setup>
const purchase_refund=ref([
    {
        id:123457,
        state:"Central"
    },
     {
        id:123458,
        state:"Central"
    },
     {
        id:123459,
        state:"Central"
    }
])
</script>

<style lang="scss" scoped>

</style>