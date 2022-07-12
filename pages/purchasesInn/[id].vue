<template>
  <div class="bg-gray-300">
    <div class="bg-white px-4 py-3 my-5 mr-auto ml-auto mb-3" id="custome">
      <div class="flex justify-between">
        <div class="w-32 h-12 rounded-sm">
          <img
            src="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="">
          <h3 class="pt-2 pb-1 px-4 text-2xl text-gray-900">
            Purchase Invoice
          </h3>
        </div>
      </div>
      <div class="flex justify-start mt-8">
        <div class="">
          <p class="font-normal text-gray-700 text-md p-0">Tq</p>
          <p class="font-normal text-gray-600 text-sm p-0">2169</p>
          <span class="text-gray-600 text-sm p-0">2169</span>
          <p class="font-normal text-gray-600 text-sm p-0">
            Bungoma,Bungoma,50200
          </p>
        </div>
      </div>

      <div class="flex justify-between mt-8">
        <div class="">
          <p class="font-normal text-sm p-0">Supplier:</p>
          <p class="font-normal text-gray-800 text-xs p-0">Next Invention</p>
          <span class="text-gray-800 text-xs p-0">Mulati Brian</span>
          <p class="font-normal text-gray-800 text-xs p-0">Githurai</p>
          <p class="font-normal text-gray-800 text-xs p-0">Kiambu</p>
          <p class="font-normal text-gray-800 text-xs p-0">
            Nairobi,central 50200
          </p>
        </div>

        <div class="">
          <p class="font-normal text-md p-0 m-0">P.O number: #1</p>
          <p class="font-normal text-gray-600 text-sm p-0 m-0">
            Date: 12/4/2022
          </p>
          <span class="text-gray-600 text-sm p-0 m-0">Due date: 12/5/2022</span>
        </div>
      </div>
      <div class="overflow-x-auto relative mt-8">
        <table class="w-full text-sm text-left border ">
          <thead class="text-xs  font-thin bg-white">
            <tr>
              <th scope="col" class="py-3 px-6 font-normal">Item</th>
              <th scope="col" class="py-3 px-6 font-normal">Details</th>
              <th scope="col" class="py-3 px-6 font-normal">Unit Price</th>
              <th scope="col" class="py-3 px-6 font-normal">Qty</th>
              <th scope="col" class="py-3 px-6 font-normal">Subtotal</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-300">
            <tr class="bg-white">
              <td class="py-4 px-6 font-normal">Gari</td>
              <td class="py-4 px-6 font-normal">It will be used for transport</td>
              <td class="py-4 px-6 font-normal">4000000</td>
              <td class="py-4 px-6 font-normal">1</td>
              <td class="py-4 px-6 font-normal">400000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-end items-center mt-6 mb-3">
        <table class=" text-sm text-left text-gray-500 border">
        <tr>
        <th class="text-sm font-normal pr-10 py-1">Subtotal</th>
        <td>400000</td>
        </tr>
        <tr>
        <th class="text-sm font-normal pr-10 py-1">VAT(16%)</th>
        <td>600000</td>
        </tr>
        <tr>
        <th class="text-sm font-normal pr-10 py-1">Total</th>
        <td>460000</td>
        </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#custome {
  width: 52rem;
}
</style>
