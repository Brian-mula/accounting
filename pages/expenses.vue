<template>
  <div>
    <div class="flex justify-end items-end p-2">
      <div
        class="bg-blue-600 py-2 pr-2 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
      >
        <nuxt-link
          to="/new_expense"
          class="bg-blue-600 px-4 py-1 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
        >
           <font-awesome-icon :icon="['fas','plus']" class="text-white px-2" />
          <h4 class="text-white">New Expense</h4>
        </nuxt-link>
      </div>
    </div>
    <div class="flex justify-between items-center mb-4">
      <div class="flex justify-center w-80 cursor-pointer">
        <div
          class="flex justify-center p-4 rounded-md shadow-sm bg-white w-full"
        >
          <div>
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Last 7 days
            </h5>
            <p class="text-gray-700 text-base mb-4">Ksh. 3000000</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center w-80 cursor-pointer">
        <div
          class="p-4 rounded-md shadow-sm bg-white w-full flex justify-center"
        >
          <div>
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Last 30 days
            </h5>
            <p class="text-gray-700 text-base mb-4">Ksh. 3000000</p>
          </div>
        </div>
      </div>

      <div class="flex justify-center w-80 cursor-pointer">
        <div
          class="flex justify-center p-4 rounded-md shadow-sm bg-white w-full"
        >
          <div>
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Last year
            </h5>
            <p class="text-gray-700 text-base mb-4">Ksh. 3000000</p>
          </div>
        </div>
      </div>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-4 pb-8 mb-4">
      <h3 class="pt-2 pb-2 px-4 text-lg text-gray-500">Search</h3>
      <div class="flex items-center justify-between">
        <div class="w-80 mx-4">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Code:
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>

        <div class="mb-4 w-80 mx-4">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Category.
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

    <div class="mt-8 mb-4 bg-white">
      <h3 class="bg-white text-gray-500 text-sm border px-4 py-2 mt-2">
        Results
      </h3>
      <div v-for="(expense, index) in expenses" :key="index">
        <nuxt-link
          :to="{ name: 'expense-id', params: { id: expense.id } }"
          class="flex justify-between items-center rounded px-8 pt-2 pb-2"
        >
          <div>
            <h5 class="mb-1 mt-1 text-md tracking-tight text-gray-700">
              {{ expense.category }}
            </h5>
            <p class="font-normal text-gray-500 text-sm">#00001-8/7/2022</p>
          </div>

          <div>
            <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
              Ksh.30000
            </h5>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
const expenses = ref([
  {
    id: 12345,
    category: "Long term",
  },
  {
    id: 12346,
    category: "Short  term",
  },
]);
</script>

<style lang="scss" scoped></style>
