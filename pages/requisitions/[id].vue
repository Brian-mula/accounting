<template>
  <div>
    <div class="flex">
      <div class="mx-2 bg-white" id="customeleft">
        <h3 class="text-purple-900 px-4 pt-2 border">Information</h3>
        <div class="flex justify-between items-center mb-2">
          <div class="">
            <h3 class="text-purple-900 px-4 pt-2">Requisition type</h3>
            <p class="font-normal text-gray-500 text-sm px-4">
              Inbound requisition
            </p>
          </div>
          <div class="border-r-2 border-l-2">
            <h3 class="text-purple-900 px-4 pt-2">Date</h3>
            <p class="font-normal text-gray-500 text-sm px-4">13/7/2022</p>
          </div>
          <div class="">
            <h3 class="text-purple-900 px-4 pt-2">Number</h3>
            <p class="font-normal text-gray-500 text-sm px-4">#1111111</p>
          </div>
        </div>
      </div>
      <div class="mx-2" id="customeleft">
        <div class="flex">
          <div class="w-64 mx-2 bg-white">
            <h3 class="text-purple-900 px-4 pt-2 border">Source information</h3>
            <h3 class="text-purple-900 px-4 pt-2">Reference</h3>
            <p class="font-normal text-gray-500 text-sm px-4">
              Inbound requisition #1111111
            </p>
          </div>
          <div class="w-64 bg-white mx-2">
            <h3 class="text-purple-900 px-4 pt-2 border">Source information</h3>
            <h3 class="text-purple-900 px-4 pt-2">Reference</h3>
            <p class="font-normal text-gray-500 text-sm px-4">
              Inbound requisition #1111111
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 bg-white">
      <h3 class="text-purple-900 px-4 pt-2 border">Other Information</h3>
      <div class="flex">
        <div class="border-r-2" id="custome">
          <h3 class="text-purple-900 px-4 pt-2">Account</h3>
          <p class="font-normal text-gray-500 text-sm px-4">Other Payables</p>
        </div>

        <div class="">
          <h3 class="text-purple-900 px-4 pt-2">Notes</h3>
          <p class="font-normal text-gray-500 text-sm px-4">
            This is an inbound requisition
          </p>
        </div>
      </div>
    </div>
    <div class="mt-2 bg-white ">
    <h3 class="text-purple-900 px-4 pt-2 border">Product list</h3>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 bg-gray-50"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Items</th>
            <th scope="col" class="px-6 py-3">Unit Price</th>
            <th scope="col" class="px-6 py-3">Quantity</th>
            <th scope="col" class="px-6 py-3">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b">
            <td class="px-6 py-4">Gari #4</td>
            <td class="px-6 py-4">40000000</td>
            <td class="px-6 py-4">1</td>
            <td class="px-6 py-4">40000000</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#customeleft {
  width: 32rem;
}
#custome {
  width: 32rem;
}
</style>
