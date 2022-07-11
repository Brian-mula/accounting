<template>
  <div>
    <div class="flex justify-end items-end p-4">
      <nuxt-link
        to="/newInvoice"
        class="bg-blue-600 p-4 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
      >
        <img
          src="~/assets/images/add-svgrepo-com.svg"
          alt=""
          class="h-6 w-6 mx-2"
        />
        <h4 class="text-white">New Subscription</h4>
      </nuxt-link>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Search</h3>
      <div class="flex justify-start items-center">
        <div class="w-96">
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
          <div class="mb-4 mx-8 w-96">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Subscription Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
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

    <h3 class="bg-white text-gray-500 text-sm p-4 mt-4">Results</h3>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-400 bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">
              <div class="flex items-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">Id</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Client name</th>
            <th scope="col" class="px-6 py-3">Next date</th>
            <th scope="col" class="px-6 py-3">Generated</th>
            <th scope="col" class="px-6 py-3">Total</th>
            <th scope="col" class="px-6 py-3">Every</th>
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-gray-50 "
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
                />
                <label for="checkbox-table-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="px-6 py-4">1</td>
            <td class="px-6 py-4">Power</td>
            <td class="px-6 py-4">Post client</td>
            <td class="px-6 py-4">1/01/2022</td>
            <td class="px-6 py-4">1</td>
            <td class="px-6 py-4">Ksh. 200</td>
            <td class="px-6 py-4">1 month</td>
            <td class="px-6 py-4">Edit</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
