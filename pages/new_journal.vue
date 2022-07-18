<template>
  <div>
    <form>
      <div class="flex">
        <div class="bg-white h-min" id="custom">
          <div class="w-full">
            <div class="mb-4 w-full px-4 flex items-center py-2">
              <label class="block text-gray-700 text-md mb-2 mr-3" for="status">
                Date:
              </label>
              <input
                type="date"
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="w-full">
            <div class="mb-4 w-full px-4 flex items-center py-2">
              <label class="block text-gray-700 text-md mb-2 mr-3" for="status">
                Number:
              </label>
              <input
                type="number"
                class="appearance-none border w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="bg-white mx-3" id="customs">
          <div class="mb-4 w-full mx-4 flex items-center py-2 px-4">
            <label class="block text-gray-700 text-md mx-4 mb-2" for="username">
              Description
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>

          <div class="mb-4 w-full mx-4 flex items-center py-2 px-4">
            <label class="block text-gray-700 text-md mx-4 mb-2" for="username">
              Attachment
            </label>
            <input
              type="file"
              class="appearance-none border w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      </div>

      <!-- !table -->
      <div
        class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-3"
      >
        <table
          class="w-full text-sm text-right text-gray-500 dark:text-gray-400"
        >
          <thead class="bg-gray-50 text-left">
            <tr>
              <th scope="col" class="px-6 py-3 text-sm text-purple-800">
                Account Name
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-center text-purple-800"
              >
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-purple-800">Debit</th>
              <th scope="col" class="px-6 py-3 text-purple-800">Credit</th>
            </tr>
          </thead>
          <tbody class="text-left bg-white">
            <tr class=" border-b">
              <td class="px-6 py-4 border-r">
                <input
                  placeholder="search"
                  type="text"
                  list="cars"
                  class="bg-yellow-400 appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <datalist
                  id="cars"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Volvo</option>
                  <option>Saab</option>
                  <option>Mercedes</option>
                  <option>Audi</option>
                </datalist>
              </td>
              <td class="px-6 py-4 border-r">
                <textarea class="w-full border border-slate-300" />
              </td>
              <td class="px-6 py-4 border-r">
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
              <td class="px-6 py-4 border-r">
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
            </tr>
            <tr class=" border-b">
              <td class="px-6 py-4 w-40 border-r">
                <select
                  name=""
                  id=""
                  class="block py-2 px-0 w-full text-sm text-gray-500 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Any account</option>
                </select>
              </td>
              <td class="px-6 py-4 w-80 border-r">
                <textarea class="w-full border border-slate-300" />
              </td>
              <td class="px-6 py-4 w-20 border-r">
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
              <td class="px-6 py-4 w-20 border-r">
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
            </tr>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 w-20 border-r" colspan="2">Total</td>

              <td class="px-6 py-4 w-20 border-r">
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="0.0"
                />
              </td>
              <td class="px-6 py-4 w-20 border-r">
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="0.0"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- !table -->
      <div class="flex justify-start items-center mb-2">
        <button
          type="button"
          class="mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save Invoice
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
const date = ref();
const issueDate = ref();

const tableRows = ref([
  {
    item: "",
    description: "",
    unitPrice: "",
    quantity: "",
    subTotal: "",
    total: "",
  },
]);
const addNewRow = () => {
  tableRows.value.push({
    item: "",
    description: "",
    unitPrice: "",
    quantity: "",
    subTotal: "",
    total: "",
  });
  console.log("you clicked me");
};
const deleteRaw = () => {
  tableRows.value.pop();
};
</script>

<style lang="css" scoped>
#custom {
  width: 32rem;
}
#customs {
  width: 36rem;
}
</style>
