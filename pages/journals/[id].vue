<template>
  <div class="bg-gray-300 h-screen m-0">
    <div class="h-10"></div>
    <div class="" id="">
      <!-- !journal tabs -->
      <ul
        class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
        id="tabs-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <div
            @click="handleDetails"
            class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
          >
            Journal
          </div>
        </li>
        <li class="nav-item" role="presentation">
          <div
            @click="handleVoucher"
            class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
          >
            Journal log
          </div>
        </li>
      </ul>
      <!-- !journal tabs -->
      <div>
        <div
          v-if="details"
          class="tab-pane fade show active px-4 bg-white ml-auto mr-auto mt-4"
          id="custome"
        >
          <h3 class="pt-4 pb-3 mb-1 px-4 text-2xl font-normal">
            Journal Entry #7
          </h3>
          <p class="font-normal text-lg px-4 pb-1 pt-2">Date: 8/7/2022</p>
          <p class="font-normal text-lg px-4 pb-1 pt-2">
            Description: Payment to supplier #11
          </p>
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
                          Account
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
                      </tr>
                    </thead>
                    <tbody class="text-left">
                      <tr class="bg-white border-b">
                        <td class="py-2 px-6 border-r">NextInvention</td>
                        <td class="py-2 px-6 border-r">Payment supplier</td>
                        <td class="py-2 px-6 border-r">430000</td>
                        <td class="py-2 px-6 border-r"></td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="py-2 px-6 border-r">Main</td>
                        <td class="py-2 px-6 border-r">Payment supplier</td>
                        <td class="py-2 px-6 border-r"></td>
                        <td class="py-2 px-6 border-r">430000</td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="py-2 px-6 border-r" colspan="2">Total</td>

                        <td class="py-2 px-6 border-r">430000</td>
                        <td class="py-2 px-6 border-r">430000</td>
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

<style lang="css" scoped>
#custome {
  width: 50rem;
}
#customs {
  width: 68rem;
}
</style>
