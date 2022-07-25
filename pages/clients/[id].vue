<template>
  <div v-if="client">
    <div class="bg-blue-100">
      <div class="h-8"></div>
      <div class="bg-white mx-4">
        <div class="mx-4 py-3 flex">
          <img
            class="w-28 h-28 rounded-sm"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt="user photo"
          />
          <h5
            class="mb-1 mt-1 px-4 text-2xl tracking-tight text-purple-900 font-normal"
          >
            {{client.name}}
          </h5>
        </div>
      </div>
      <div class="h-8"></div>
      <div class="mx-4" id="">
        <!-- !journal tabs -->
        <ul
          class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 bg-white"
          id="tabs-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <div
              @click="handleDetails"
              class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
            >
              Details
            </div>
          </li>
          <li class="nav-item" role="presentation">
            <div
              @click="handleVoucher"
              class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
            >
              Invoices
            </div>
          </li>
        </ul>
        <!-- !journal tabs -->
        <div>
          <div
            v-if="details"
            class="tab-pane fade show active px-4 bg-white ml-auto mr-auto"
            id="custome"
          >
            <h3
              class="pt-2 pb-2 mb-1 px-4 text-lg font-normal border bg-blue-50"
            >
              Quick Information
            </h3>
            <div class="flex items-center py-6">
              <div class="w-96">
                <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900">
                  Count of invoices:
                  <span class="text-xs text-black px-6">2</span>
                </p>
                <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900">
                  Count of due invoices:
                  <span class="text-xs text-black px-6">2</span>
                </p>
              </div>
              <div class="w-96">
                <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900">
                  Last invoice:
                  <span class="text-xs text-black px-6">#0002 | Ksh. 65</span>
                </p>
                <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900">
                  Last payment:
                  <span class="text-xs text-black px-6"
                    >No payment has been made</span
                  >
                </p>
              </div>
            </div>
            <h3
              class="pt-2 pb-2 mb-1 px-4 text-lg font-normal border bg-blue-50"
            >
              Account summary
            </h3>
            <div class="flex flex-col px-4">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full border text-center">
                      <thead class="border-b bg-gray-200">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                          >
                            Currency
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                          >
                            Total
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                          >
                            Refunded
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                          >
                            Paid to date
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                          >
                            Credit note
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                          >
                            Balance due
                          </th>
                        </tr>
                      </thead>
                      <tbody class="text-left">
                        <tr class="bg-white border-b">
                          <td class="py-2 px-6 border-r">Ksh</td>
                          <td class="py-2 px-6 border-r">30000</td>
                          <td class="py-2 px-6 border-r">0.00</td>
                          <td class="py-2 px-6 border-r">0.00</td>
                          <td class="py-2 px-6 border-r">0.00</td>
                          <td class="py-2 px-6 border-r">30000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div
            v-if="voucher"
            class="tab-pane fade px-4 bg-white ml-auto mr-auto"
            id="customs"
          >
          <h3 class="pt-2 pb-2 px-4 text-lg font-normal bg-blue-50">
            Latest invoices for POS Client
          </h3>
            <div class="mt-8 mb-4">
              <div
                class="flex justify-between bg-white rounded px-8 pt-2 pb-4"
              >
                <p class="font-normal text-gray-500 text-sm">#00001-8/7/2022</p>
                <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                  Post Client
                </h5>

                <div>
                  <h5
                    class="mb-1 mt-1 text-sm font-bold tracking-tight text-gray-700"
                  >
                    Created
                  </h5>
                  <p class="font-normal text-gray-500">8/7/2022</p>
                </div>
                <div>
                  <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                    Ksh.30000
                  </h5>
                  <div
                    class="bg-red-800 flex justify-center items-center rounded-md"
                  >
                    <p class="font-normal text-gray-50 text-sm">Unpaid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-10"></div>
    </div>
  </div>
  <div v-else>
  <font-awesome-icon :icon="['fas','spinner spin 3x fw']"/>
  </div>
</template>

<script setup>
const route=useRoute();
const details = ref(true);
const voucher = ref(false);
const handleDetails = () => {
  voucher.value = false;
  details.value = true;
};
const handleVoucher = () => {
  details.value = false;
  voucher.value = true;
};
const client=ref(null);
onMounted(async()=>{
    client.value=await getClient(route.params.id);
    console.log(client.value);
})
</script>

<style lang="scss" scoped></style>
