<template>
  <div class="w-full">
    <form class="">
      <div class="flex justify-between mb-4">
        <div class="bg-white w-96 h-min">
          <div class="mb-1 w-80 px-4">
            <label class="block text-gray-700 text-sm mb-2 pt-4" for="username">
              Method:
            </label>
            <select
              v-model="i_method"
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="offline">Print(offline)</option>
              <option value="mail">Send via email</option>
            </select>
          </div>
          <div class="mb-4 w-96 px-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Client:
            </label>
            <select
              v-model="i_client"
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option>Select client</option>
              <option
                v-for="client in clients"
                :key="client.id"
                :value="client.id"
              >
                {{ client.name }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <div class="bg-white w-3/4 ml-4 pb-4" id="custW">
            <div class="mb-1 w-80 px-4">
              <label
                class="block text-gray-700 text-sm mb-2 pt-4"
                for="username"
              >
                Invoice Number:
              </label>
              <input
                v-model="i_invoiceNumber"
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-96 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Invoice Date:
              </label>
              <div class="flex">
                <Datepicker v-model="date"></Datepicker>
              </div>
            </div>
            <div class="mb-4 w-96 px-4">
              <label class="block text-gray-700 text-sm mb-1" for="username">
                Issue Date:
              </label>
              <div class="flex">
                <!-- <Datepicker v-model="issueDate"></Datepicker> -->
                <input
                  v-model="i_issueDate"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
            </div>
            <div class="mb-1 w-96 px-4">
              <label
                class="block text-gray-700 text-sm mb-1 pt-2"
                for="username"
              >
                Payment terms:
              </label>
              <input
                v-model="i_paymentTerms"
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <table
          class="w-full text-sm text-right text-gray-500 dark:text-gray-400"
        >
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-sm text-purple-800 w-20">
                Item
              </th>
              <th scope="col" class="px-6 py-3 w-80 text-center">
                Description
              </th>
              <th scope="col" class="px-6 py-3 w-20">Unit Price</th>
              <th scope="col" class="px-6 py-3 w-20">Quantity</th>
              <th scope="col" class="px-6 py-3 w-20">Subtotal</th>
              <th scope="col" class="px-6 py-3 w-20">Total</th>
              <th scope="col" class="px-6 py-3 w-20"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b"
             
            >
            
              <td class="px-6 py-4 w-32">
                <select
                  v-model="i_item"
                  name=""
                  id=""
                  class="block bg-gray-200 py-2 px-0 w-full text-sm text-gray-500 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option>select item</option>
                  <option
                    v-for="(item, index) in filteredItems"
                    :key="index"
                    :value="item.name"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </td>
              <td class="px-6 py-4 w-80">
                <textarea
                  v-model="i_description"
                  class="w-full border border-slate-300"
                />
              </td>
              <td class="px-6 py-4 w-32">
                <input
                  disabled
                  v-model="i_unitPrice"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
              <td class="px-6 py-4 w-20">
                <input
                  v-model="i_quantity"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
              <td class="px-6 py-4 w-20">
                <input
                  v-model="i_subtotal"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
              <td class="px-6 py-4 w-20">
                <input
                  v-model="i_total"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </td>
              <!-- <td class="px-4 py-4">
                <div
                  @click="deleteInvoiceItem"
                  class="bg-blue-600 p-2 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
                >
                  <font-awesome-icon
                    :icon="['fas', 'minus']"
                    class="text-white "
                  />
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <div class="flex justify-end items-end p-2">
        <div
          @click="addInvoiceItem"
          class="bg-blue-600 p-2 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
        >
          <font-awesome-icon :icon="['fas', 'plus']" class="text-white" />
        </div>
      </div> -->

      <div class="flex justify-start items-center mb-2">
        <button
          @click="handleSubmit"
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

const clients = ref([]);
onMounted(async () => {
  clients.value = await getAllClients();
  console.log(clients.value);
});

const issueDate = ref();

const i_method = ref("select any");
const i_client = ref("Select client");
const i_invoiceNumber = ref("");
const date = ref();
const i_issueDate = ref("");
const i_paymentTerms = ref("");

const i_item = ref("");
const i_description = ref("");
const i_unitPrice = ref("");
const i_quantity = ref();
const i_subtotal = ref();
const i_total = ref();



const addInvoiceItem = () => {
  i_invoiceItems.value.push({
    item: "",
    description: "",
    unitPrice: "",
    quantity: "",
    subTotal: "",
    total: "",
  });
  console.log("you clicked me");
};
const deleteInvoiceItem=()=>{
  i_invoiceItems.value.pop()
}
i_issueDate.value = new Date().toISOString().substring(0, 10);


watch(i_quantity,()=>{
i_subtotal.value=parseInt(i_unitPrice.value)* parseInt( i_quantity.value);
})
// input autopopulation
const items = ref([
  {
    name: "Truck",
    price: 3000000,
    description:"it was bought for deliveries"
  },
  {
    name: "Gari",
    price: 4000000,
    description:"bought for staff transportation"
  },
  
]);
const filteredItems=computed(()=>{
  items.value.filter((item)=>{
    i_description.value=item.description;
    i_unitPrice.value=item.price;
   
  })
})
// watch(i_item, () => {
//   items.value.forEach((item) => {
//     i_unitPrice.value = item.price;
//     i_description.value=item.description
//   });
  
// });

const handleSubmit = () => {
  console.log(myDate.value);
  console.log([
    {
      "item ->": tableRows.value.item,
      description: tableRows.value.description,
    },
  ]);
};
</script>

<style lang="css" scoped>
#custW {
  width: 40rem;
}
</style>
