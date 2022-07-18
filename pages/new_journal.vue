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
      <div class="mt-3" id="table_width">
        <div class="flex bg-white border items-start">
          <div
            class="border-r px-4 py-3 text-sm text-purple-800 text-left w-60 flex items-start"
          >
            Account name
          </div>
          <div
            class="border-r px-4 py-3 text-sm text-purple-800 w-60 flex items-start"
          >
            Description
          </div>
          <div
            class="border-r px-4 py-3 text-sm text-purple-800 w-60 flex items-start"
          >
            Debit
          </div>
          <div
            class="border-r px-4 py-3 text-sm text-purple-800 w-60 flex items-start"
          >
            Credit
          </div>
        </div>
        <div class="flex bg-white border">
          <div class="px-4 py-1 border-r w-60">
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
          </div>
          <div class="px-4 py-1 border-r w-60">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="px-4 py-1 border-r w-60">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="px-4 py-1 border-r w-60">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div class="flex bg-white border">
          <div class="px-4 py-1 border-r w-60">
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
          </div>
          <div class="px-4 py-1 border-r w-60">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="px-4 py-1 border-r w-60">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="px-4 py-1 border-r w-60">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div class="flex">
          <div class="bg-white px-2 cursor-pointer ml-80 flex">
            <div class="px-4 py-2 border-r w-40">Total</div>
            <div class="px-4 py-2 border-r w-60">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="0.0"
            />
            </div>
            <div class="px-4 py-2 border-r w-56">
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="0.0"
            />
            </div>
          </div>
        </div>
      </div>
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
#table_width {
  width: 60rem;
}
</style>
