<template>
    <div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Search</h3>
      <div class="flex items-center justify-between">
        <div class="w-80 mx-4">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Code:
            </label>
             <input
              class=" appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <div class="mb-4 w-80 mx-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Date.
            </label>
            <input
            type="date"
              class=" appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        
      <div class="mb-4 w-80 mx-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Category.
            </label>
            <input
              class=" appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
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
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>