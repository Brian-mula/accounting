<template>
  <div>
  <div class="flex justify-end items-end p-4">
      <nuxt-link to="/new_journal"
        class="bg-blue-600 p-4 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
      >
        <img
          src="~/assets/images/add-svgrepo-com.svg"
          alt=""
          class="h-6 w-6 mx-2"
        />
        <h4 class="text-white">New Journal</h4>
      </nuxt-link>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-3 pb-2 mb-1">
      <h3 class="pt-2 pb-1 mb-1 px-4 text-lg text-gray-500 border">Search</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="w-80">
          <div class="mb-2 w-full">
            <label class="block text-gray-700 text-sm mb-1" for="username">
              Account
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Any Account</option>
            </select>
          </div>
        </div>
        <div>
          <div class="mb-2">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Description
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div class="w-80">
          <div class="mb-2 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="status">
              Date
            </label>
            <input
              type="date"
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div class="w-80">
          <div class="mb-2 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="status">
              Source
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option selected>Any source</option>
              <option
                v-for="(source, index) in sources"
                :key="index"
                :value="source"
              >
                {{ source }}
              </option>
            </select>
          </div>
        </div>
        <div class="mb-2 w-80">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Number
          </label>
          <input
            class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
      </div>
      <div class="flex justify-end items-center">
        <div class="mx-4">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Reset
          </button>
        </div>
        <div class="mx-4">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Search
          </button>
        </div>
      </div>
    </form>
     <div class="mt-8 mb-4">
     <h3 class="pt-1 pb-1 mb-1 px-4 text-lg text-gray-500 border">Results</h3>
      <div
      v-for="(journal,index) in journals" :key="index"
        class="flex justify-between border-b-4 bg-white rounded px-8 pt-2 pb-4"
      >
        <nuxt-link :to="{name:'journals-id',params:{id:journal.id}}">
          <p class="font-normal text-gray-500 text-sm">#09-8/7/2022</p>
          <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
            Expense #00001
          </h5>
        </nuxt-link>
        <div class="flex items-center">
          <h5 class="mb-1 mt-1 text-sm font-bold tracking-tight text-gray-700">
            Long ==> Main
          </h5>
          
        </div>
        <div>
          <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
            Ksh.30000
          </h5>
          <div class="bg-gray-200 flex justify-center items-center rounded-md">
            <p class="font-normal text-gray-500 text-sm">auto</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const source = ref("");
const journals=ref([
  {
    id:12345,
    client_name:"Post client"

  }
])
const sources = ref([
  "Manual journal",
  "Invoice",
  "Requisition",
  "Stock transaction",
  "Invoice payment",
  "Income",
  "Invoice sales cost",
  "Refund receipt",
  "Expense",
  "Stock transfer",
  "Purchase Refund",
  "Asset",
  "Asset operation",
  "Asset depreciation",
  "Purchase Invoice",
]);
</script>

<style lang="scss" scoped></style>
