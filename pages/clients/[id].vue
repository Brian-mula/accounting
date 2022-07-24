<template>
  <div>
    <div class="bg-blue-100">
      <div class="h-8"></div>
      <div class="bg-white mx-4">
        <div class="mx-4 py-3 flex">
          <img
            class="w-28 h-28 rounded-sm"
            src="https://cdn.pixabay.com/photo/2016/11/29/20/22/girl-1871104__340.jpg"
            alt="user photo"
          />
          <h5 class="mb-1 mt-1  px-4 text-2xl tracking-tight text-purple-900 font-normal">
            Mulati Brian
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
          <h3 class="pt-2 pb-2 mb-1 px-4 text-lg font-normal border bg-blue-50">
            Quick Information
          </h3>
        <div class="flex items-center py-6">
        <div class="w-96">
          <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900 ">Count of invoices: <span class="text-xs text-black px-6">2</span></p>
          <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900 ">Count of due invoices: <span class="text-xs text-black px-6">2</span></p>
        </div>
        <div class="w-96">
          <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900 ">Last  invoice: <span class="text-xs text-black px-6">#0002 | Ksh. 65</span></p>
         <p class="font-normal text-sm px-4 pb-1 pt-2 text-purple-900 ">Last payment: <span class="text-xs text-black px-6">No payment has been made</span></p>
        </div>
        </div>
        <h3 class="pt-2 pb-2 mb-1 px-4 text-lg font-normal border bg-blue-50">
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
          class="tab-pane fade px-4 bg-white ml-auto mr-auto mt-4"
          id="customs"
        >
          <div class="flex flex-col px-2">
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
                          Date
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Action
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Staff Member
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Journal Number
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Debit
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Credit
                        </th>
                        <th
                          scope="col"
                          class="text-sm font-medium text-gray-900 px-6 py-2 border-r-black"
                        >
                          Journal Date
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-left">
                      <tr class="bg-white border-b">
                        <td class="py-2 px-6 border-r text-sm text-gray-500">12/3/2022</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Add</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Brian Mulati</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">7</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Main</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Payment to supplier</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">0</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">430000</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">13/5/2011</td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="py-2 px-6 border-r text-sm text-gray-500">12/3/2022</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Add</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Brian Mulati</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">7</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">NextInvention</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Payment to supplier</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">430000</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">0</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">13/5/2011</td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="py-2 px-6 border-r text-sm text-gray-500">12/3/2022</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Add</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Brian Mulati</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">7</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Journal</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">Payment to supplier</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">430000</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">430000</td>
                        <td class="py-2 px-6 border-r text-sm text-gray-500">13/5/2011</td>
                      </tr>
                    </tbody>
                  </table>
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
</template>

<script setup>
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
</script>

<style lang="scss" scoped></style>
