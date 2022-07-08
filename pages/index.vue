<template>
  <div class="w-full px-4">
    <div class="flex justify-between">
      <div class="">
      <h5 class="mb-1 mt-1 text-sm tracking-tight text-gray-500 py-3">Total Receivables</h5>
        <div
          class="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
        >
          <div class="flex">
            <div class="w-52 h-3 bg-green-600"></div>
            <div class="w-20 h-3 bg-orange-500"></div>
          </div>
          <div class="flex justify-between">
            <div>
              <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Current
              </h5>
              <p class="font-normal text-green-700">Ksh. 3,200,000</p>
            </div>
            <div>
              <div>
                <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                  Overdue
                </h5>
                <p class="font-normal text-orange-500">Ksh.200,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
      <h5 class="mb-1 mt-1 text-sm tracking-tight text-gray-500 py-3">Total Cash</h5>
        <div
          class="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
        >
          <div class="flex">
           
            <div class="w-52 h-3 bg-green-600"></div>
            <div class="w-20 h-3 bg-orange-500"></div>
          </div>
          <div class="flex justify-between">
            <div>
              <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Bank
              </h5>
              <p class="font-normal text-green-700">Ksh. 3,200,000</p>
            </div>
            <div>
              <div>
                <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                  Cash
                </h5>
                <p class="font-normal text-orange-500">Ksh.200,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h5 class="mb-1 mt-1 text-sm tracking-tight text-gray-500 py-3">Total Payables</h5>
        <div
          class="block p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100"
        >
          <div class="flex">
            <div class="w-52 h-3 bg-green-600"></div>
            <div class="w-20 h-3 bg-orange-500"></div>
          </div>
          <div class="flex justify-between">
            <div>
              <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Current
              </h5>
              <p class="font-normal text-green-700">Ksh. 3,200,000</p>
            </div>
            <div>
              <div>
                <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
                  Overdue
                </h5>
                <p class="font-normal text-orange-500">Ksh.200,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
const isLarge = ref(true);
const isSmall = ref(true);
</script>

<style lang="scss" scoped></style>
