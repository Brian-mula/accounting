<template>
  <div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
    </form>
    <div class="mt-8 mb-4">
    <div class="flex justify-between border-b-4 bg-white  rounded px-8 pt-6 pb-8  ">
      <div>
        <p class="font-normal text-gray-500">#00001-8/7/2022</p>
        <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">Post Client</h5>
      </div>
      <div>
      <h5 class="mb-1 mt-1 text-sm font-bold tracking-tight text-gray-700">Created</h5>
       <p class="font-normal text-gray-500">8/7/2022</p>
      </div>
      <div>
      <h5 class="mb-1 mt-1 text-lg  tracking-tight text-gray-700">Ksh.30000</h5>
       <div class="bg-red-800 flex justify-center items-center rounded-sm">
       <p class="font-normal text-gray-50">Unpaid</p>
       </div>
      </div>
    </div>
    
    </div>
    
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
