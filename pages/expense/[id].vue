<template>
  <div>
    <div class="bg-gray-50 mt-10">
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
            Details
          </div>
        </li>
        <li class="nav-item" role="presentation">
          <div
            @click="handleVoucher"
            class="cursor-pointer nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
          >
            Voucher
          </div>
        </li>
      </ul>
      <div class="tab-content" id="tabs-tabContent">
        <div v-if="details" class="tab-pane fade show active px-4">
          <table class="relative text-left">
            <tr>
              <th class="text-purple-600 pr-5-">Code:</th>
              <td class="text-gray-500 text-sm font-normal px-6">00001</td>
            </tr>
            <tr>
              <th class="text-purple-600 pr-5-">Date:</th>
              <td class="text-gray-500 text-sm font-normal px-6">00001</td>
            </tr>
            <tr>
              <th class="text-purple-600 pr-5-">Description:</th>
              <td class="text-gray-500 text-sm font-normal px-6">
                It was used to pay electricity
              </td>
            </tr>
            <tr>
              <th class="text-purple-600 pr-5-">Amount:</th>
              <td class="text-gray-500 text-sm font-normal px-6">Ksh. 650</td>
            </tr>
            <tr>
              <th class="text-purple-600 pr-5-">Treasury:</th>
              <td class="text-gray-500 text-sm font-normal px-6">
                Main treasury
              </td>
            </tr>
          </table>
        </div>
        <div
          v-if="voucher"
          class="tab-pane fade px-4"
        
        >
          <expense-receipt/>
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

<style lang="scss" scoped></style>
