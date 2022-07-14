<template>
  <div>
    <div class="bg-white px-4 py-3 my-5 mr-auto ml-auto mb-3 border shadow-sm" id="custome">
      <div class="flex justify-between border">
        <div class="w-32 h-12 rounded-sm border mt-2 mx-2">
          <img
            src="https://cdn.pixabay.com/photo/2014/12/28/13/20/wordpress-581849__340.jpg"
            alt=""
            class="w-full h-full"
          />
        </div>
        <div class="flex justify-start">
          <div>
            <h3 class="pt-2 pb-1 px-4 text-2xl text-gray-900">
              Income recipt
            </h3>
            <p class="text-gray-700 text-base mb-4 px-4">No. 0000001</p>
          </div>
        </div>
      </div>
      <table class="relative text-left">
        <tr>
          <th class="text-purple-600 pr-5-">Amount:</th>
          <td class="text-gray-500 text-sm font-normal px-6">Ksh. 30000</td>
          
        </tr>
        <tr>
          <th class="text-purple-600 pr-5-">Date:</th>
          <td class="text-gray-500 text-sm font-normal px-6">13/2/2022</td>
          
        </tr>
        <tr>
          <th class="text-purple-600 pr-5-">For:</th> <br>
          <td class="text-gray-500 text-sm font-normal px-6">Services offered to company clients</td>
          
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#custome {
  width: 52rem;
}
</style>
