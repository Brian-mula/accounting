<template>
  <div>
    <form >
    <div class="flex">
      <div class="bg-white h-min" id="custom">
        <div class="w-full">
          <div class="mb-4 w-full px-4 flex items-center py-2">
            <label class="block text-gray-700 text-md mb-2 mr-3" for="status">
              Supplier:
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Select Supplier</option>
            </select>
          </div>
        </div>
      </div>
      <div class="bg-white mx-3" id="custom">
        <div class="mb-4 w-full mx-4 flex items-center py-2 px-4">
          <label class="block text-gray-700 text-md mx-4 mb-2" for="username">
            Refund Number:
          </label>
          <input
            class="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
        <div class="mb-4 w-full mx-4 flex items-center py-2 px-4">
          <label class="block text-gray-700 text-md mx-4 mb-2" for="username">
           Refund Date:
          </label>
          <div class="flex">
            <Datepicker v-model="issueDate"></Datepicker>
          </div>
        </div>
        
      </div>
    </div>

    <!-- !table -->
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-3">
      <table class="w-full text-sm text-right text-gray-500 dark:text-gray-400">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-sm text-purple-800 w-20 font-normal">
              Item
            </th>
            <th scope="col" class="px-6 py-3 w-80 text-center font-normal text-purple-800">Description</th>
            <th scope="col" class="px-6 py-3 w-20 font-normal text-purple-800">Unit Price</th>
            <th scope="col" class="px-6 py-3 w-20 font-normal text-purple-800">Quantity</th>
            <th scope="col" class="px-6 py-3 w-20 font-normal text-purple-800">Subtotal</th>
            <th scope="col" class="px-6 py-3 w-20 font-normal text-purple-800">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b"
            v-for="tableRow in tableRows"
            :key="tableRow"
          >
            <td class="px-6 py-4 w-20">
              <select
                v-model="tableRow.item"
                name=""
                id=""
                class="block py-4 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                <option value="">Item</option>
              </select>
            </td>
            <td class="px-6 py-4 w-80">
              <textarea
                class="w-full border border-slate-300"
                v-model="tableRow.description"
              />
            </td>
            <td class="px-6 py-4 w-20">
              <input
                v-model="tableRow.unitPrice"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </td>
            <td class="px-6 py-4 w-20">
              <input
                v-model="tableRow.quantity"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </td>
            <td class="px-6 py-4 w-20">Ksh.xxx</td>
            <td class="px-6 py-4 w-20">Ksh.xxx</td>
            <td class="px-6 py-4 w-20">
              <div class="cursor-pointer" @click="deleteRaw">
                <font-awesome-icon :icon="['fas','trash']" class="text-red-500" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="bg-white shadow-md p-4 flex justify-between">
        <div class="cursor-pointer" @click="addNewRow">
           <font-awesome-icon :icon="['fas','plus']" class="text-green-500" />
        </div>
        <div class="text-purple-800">Total: Ksh. xxx</div>
      </div>
    </div>
    <!-- !table -->
      <div class="flex justify-start items-center mb-2">
        <button
          type="button"
          class=" mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
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
</style>
