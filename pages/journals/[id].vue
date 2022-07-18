<template>
  <div class="bg-gray-300 h-screen m-0">
    <div class="h-10"></div>
    <div class="bg-white ml-auto mr-auto mt-4" id="custome">
      <h3 class="pt-4 pb-3 mb-1 px-4 text-lg text-gray-500">
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
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#custome {
  width: 50rem;
}
</style>
