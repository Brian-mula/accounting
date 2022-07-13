<template>
  <div>
    <form >
    <div class="flex">
      <div class="bg-white mt-1" id="custome">
        <h3 class="text-purple-900 px-4 pt-2 border">Requisition details</h3>
        <div class="px-4 flex">
          <div class="mb-4 w-96 mt-2">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Requisition type:
            </label>
            <input
              value="outbound requisition"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="mb-4 w-96 mt-2 mx-2">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Date:
            </label>
            <div class="flex">
              <Datepicker v-model="date"></Datepicker>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white mt-1 ml-4" id="custome">
        <h3 class="text-purple-900 px-4 pt-2 border">Item details</h3>
        <div class="mb-4 w-full mt-2 px-4">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Inventory information:
          </label>
          <input
            value="Warehouse"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
      </div>
    </div>
    <div class="mt-3 bg-white">
      <h3 class="text-purple-900 px-4 pt-2 border">Other information</h3>
      <div class="grid grid-cols-2 gap-4">
        <div class="mb-4 w-96 mt-2 pl-4" id="custome">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Journal account:
          </label>
          <select
            class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option value="3">Please select account</option>
          </select>
        </div>
        <div class=" mt-2" id="custome">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Number:
          </label>
          <input
            value="inbound requisition"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
        <div class="mb-4 w-96 px-4" id="custome">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Notes:
          </label>
          <input
            
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
      </div>
    </div>
     <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-2">
        <table
          class="w-full text-sm text-right text-gray-500 dark:text-gray-400"
        >
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-sm text-purple-800 w-20">
                Item
              </th>
    
              <th scope="col" class="px-6 py-3 w-20">Unit Price</th>
              <th scope="col" class="px-6 py-3 w-20">Quantity</th>
              <th scope="col" class="px-6 py-3 w-20 text-xm">Stock on hand</th>
              <th scope="col" class="px-6 py-3 w-20 text-xs">New Stock</th>
               <th scope="col" class="px-6 py-3 w-20 text-xs">Total</th>
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
              <td class="px-6 py-4 w-20">0</td>
              <td class="px-6 py-4 w-20">0</td>
              <td class="px-6 py-4 w-20">Ksh. 0</td>
              <td class="px-6 py-4 w-20">
                <div class="cursor-pointer" @click="deleteRaw">
                  <img
                    src="~/assets/images/delete.png"
                    alt=""
                    class="h-6 w-6 mx-2"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="bg-white shadow-md p-4 flex justify-between">
          <div class="cursor-pointer" @click="addNewRow">
            <img
              src="~/assets/images/add-svgrepo-com.svg"
              alt=""
              class="h-6 w-6 mx-2"
            />
          </div>
          <div class="text-purple-800">Total: Ksh. xxx</div>
        </div>
      </div>
      <div class="flex justify-start items-center mb-2">
        <button
          type="button"
          class=" mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Confirm
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
    stock_on_hand: "",
    unitPrice: "",
    quantity: "",
    new_stock_on_hand: "",
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
#custome {
  width: 34rem;
}
</style>
