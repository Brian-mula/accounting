<template>
  <div class="bg-gray-200 h-max w-full">
    <div class="h-10 w-full"></div>
    <div class="h-fit bg-white px-4 mr-auto ml-auto" id="cwidth">
      <div class="h-10 w-full"></div>
      <div class="h-fit border mx-10 mt-10 py-2">
        <h5 class="mb-1 mt-1 text-lg tracking-tight text-center font-normal">
          Asset Detailed Report
        </h5>
        <p class="text-sm tracking-tight text-center px-1 py-0 font-normal">
          21/7/2022
        </p>
        <p class="text-sm tracking-tight text-center px-1 py-0 font-normal">
          Tq
        </p>
        <p
          class="text-sm tracking-tight text-center px-1 py-0 font-normal text-gray-600"
        >
          Asset Name: Truck
        </p>
        <p
          class="text-sm tracking-tight text-center px-1 py-0 font-normal text-gray-600"
        >
          2169
        </p>
        <p
          class="text-sm tracking-tight text-center px-1 py-0 font-normal text-gray-600"
        >
          Bungoma,Bungoma 50200
        </p>
      </div>
      <div class="flex justify-between mt-10">
        <div class="">
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Identifier
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              1
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Name
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              Truck
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Description
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              Bought for purpose
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Category Account
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              Vehicles
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Cash account
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              Cost of sales
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Purchase Value
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              900000
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Current Value
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              90000
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              In service date
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              20/2/2022
            </p>
          </div>
          <div class="flex px-4 justify-between items-center">
            <h5 class="mb-1 mt-1 text-lg tracking-tight font-normal mr-6">
              Purchase date
            </h5>
            <p
              class="text-sm font-normal tracking-tight px-1 pr-4 py-0 text-gray-600"
            >
              12/2/2022
            </p>
          </div>
        </div>
        <div>Right content</div>
      </div>
      <h5 class="mb-1 mt-10 text-2xl tracking-tight font-normal">
        Transactions Log
      </h5>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full border text-center">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Date
                    </th>
                     <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Transaction
                    </th>
                     <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Amount
                    </th>
                     <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 border-r"
                    >
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                 <tr class="bg-white border-b ">
                 <td class="py-4 px-6">
                    12/12/2022
                </td>
                <td class="py-4 px-6">
                    Purchase
                </td>
                <td class="py-4 px-6">
                    90000
                </td>
                <td class="py-4 px-6">
                    90000
                </td>
                 </tr>
                  <tr class="bg-white border-b ">
                 <td class="py-4 px-6">
                    Current Value
                </td>
                <td class="py-4 px-6" colspan="2">
                    
                </td>
                <!-- <td class="py-4 px-6">
                    90000
                </td> -->
                <td class="py-4 px-6">
                    90000
                </td>
                 </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div class="h-10"></div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#cwidth {
  width: 49rem;
}
</style>
