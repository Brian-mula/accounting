<template>
    <div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Search</h3>
      <div class="flex items-center">
        <div class="w-96 mx-4">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Name:
            </label>
             <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div>
          <div class="mb-4 w-96 mx-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Supply Number.
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
          <button type="button" class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Reset</button>
      </div>
       <div class="mx-4">
        <button type="button" class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Search</button>
       </div>
      </div>
    </form>
<!-- !results section -->
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
            <th scope="col" class="px-6 py-3">Business name</th>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Country</th>
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Added By</th>
           
            <th scope="col" class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(recurrent, index) in recurrents"
            :key="index"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                />
                <label for="checkbox-table-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td class="px-6 py-4">{{ recurrent.buzname }}</td>
            <td class="px-6 py-4">{{ recurrent.name }}</td>
            <td class="px-6 py-4">{{ recurrent.country }}</td>
            <td class="px-6 py-4">{{ recurrent.status }}</td>
            <td class="px-6 py-4">Ksh. {{ recurrent.addedBy }}</td>
            
            <td class="px-6 py-4">
              <div class="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  class="py-2 px-3 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                   <img
                    src="~/assets/images/pencil.png"
                    alt=""
                    class="h-6 w-6 mx-2"
                  />
                </button>
                <button
                  type="button"
                  class="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
                >
                  <img
                    src="~/assets/images/delete.png"
                    alt=""
                    class="h-6 w-6 mx-2"
                  />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>

<script setup>
const recurrents = ref([
  {
    buzname: "NextInvention",
    name: "Edwin Kundu",
    country: "Kenya",
    status: "active",
    addedBy: "Mulati Brian",
   
  },
   {
    buzname: "NextInvention",
    name: "Edwin Kundu",
    country: "Kenya",
    status: "active",
    addedBy: "Mulati Brian",
   
  },
]);
</script>

<style lang="scss" scoped>

</style>