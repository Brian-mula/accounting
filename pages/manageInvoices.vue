<template>
  <div>
    <div class="flex justify-end items-end p-4">
      <nuxt-link to="/newInvoice"
        class="bg-blue-600 p-4 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
      >
       <font-awesome-icon :icon="['fas','plus']" class="text-white"/>
        <h4 class="text-white">New Invoice</h4>
      </nuxt-link>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Search</h3>
      <div class="flex justify-between items-center">
        <div class="w-80">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Client
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
              Invoice No.
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
              Status
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Any status</option>
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
    <div class="mt-8 mb-4">
      <div
      v-for="(invoice,index) in invoices" :key="index"
        class="flex justify-between border-b-4 bg-white rounded px-8 pt-2 pb-4"
      >
        <nuxt-link :to="{name:'manage-id',params:{id:invoice.id}}">
          <p class="font-normal text-gray-500 text-sm">#00001-8/7/2022</p>
          <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
            Post Client
          </h5>
        </nuxt-link>
        <div>
          <h5 class="mb-1 mt-1 text-sm font-bold tracking-tight text-gray-700">
            Created
          </h5>
          <p class="font-normal text-gray-500">8/7/2022</p>
        </div>
        <div>
          <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
            Ksh.30000
          </h5>
          <div class="bg-red-800 flex justify-center items-center rounded-md">
            <p class="font-normal text-gray-50 text-sm">Unpaid</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const invoices=ref([
  {
    id:12345,
    client_name:"Post client"

  }
])
</script>

<style lang="scss" scoped></style>
