<template>
  <div>
    <div class="bg-white py-4 flex justify-between items-center">
      <div>
        <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
          Charts of accounts
        </h5>
      </div>
      <!-- <div>
        <h5
          class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
        >
          Ksh. 5000000
        </h5>
      </div> -->
    </div>

    <div class="mt-2 bg-white" id="custome-height">
      

      <div class="w-full">
        <div
          v-if="
            !showAssets &&
            !showliabilities &&
            !showCapital &&
            !showRevenue &&
            !showExpenses
          "
        >
          <div
            @click="handleAssets"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <div>
              <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Assests
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">#1</p>
            </div>
            <div>
              <h5
                class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
              >
                Ksh. 5000000
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">Debit</p>
            </div>
          </div>
          <!-- !liabilities -->
          <div
            @click="handleLiabilities"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <div>
              <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Liabilities
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">#2</p>
            </div>
            <div>
              <h5
                class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
              >
                Ksh. 50000
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">Credit</p>
            </div>
          </div>
          <!-- !Owner's equity -->
          <div
            @click="handleCapital"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <div>
              <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Owner's equity
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">#3</p>
            </div>
            <div>
              <h5
                class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
              >
                Ksh. 700000
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">Credit</p>
            </div>
          </div>
          <!-- !Revenue -->
          <div
            @click="handleRevenue"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <div>
              <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Revenue
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">#4</p>
            </div>
            <div>
              <h5
                class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
              >
                Ksh. 200000
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">Credit</p>
            </div>
          </div>
          <!-- !expenses -->
          <div
            @click="handleExpenses"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <div>
              <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                Expenses
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">#5</p>
            </div>
            <div>
              <h5
                class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
              >
                Ksh. 40000
              </h5>
              <p class="font-normal text-gray-500 text-xs px-4">Debit</p>
            </div>
          </div>
        </div>
        <div v-if="showAssets">
          <div
            v-for="asset in assetTypes"
            :key="asset.id"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <nuxt-link
              :to="{ name: 'asset-id', params: { id: asset.id } }"
              class="flex justify-between w-full"
            >
              <div>
                <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                  {{ asset.title }}
                </h5>
                <p class="font-normal text-gray-500 text-xs px-4">#11</p>
              </div>
              <div>
                <h5
                  class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
                >
                  Ksh. 50000
                </h5>
                <p class="font-normal text-gray-500 text-xs px-4">Debit</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div v-if="showliabilities">Liabilities</div>
        <div v-if="showCapital">Owner's equity</div>
        <div v-if="showRevenue">
        <div
            v-for="revenue in revenueTypes"
            :key="revenue.id"
            class="bg-gray-200 py-4 flex justify-between items-center hover:bg-gray-300 mt-1 cursor-pointer"
          >
            <nuxt-link
              :to="{ name: 'revenues-id', params: { id: revenue.id } }"
              class="flex justify-between w-full"
            >
              <div>
                <h5 class="px-4 mb-1 mt-1 text-lg tracking-tight text-gray-700">
                  {{ revenue.title }}
                </h5>
                <p class="font-normal text-gray-500 text-xs px-4">#11</p>
              </div>
              <div>
                <h5
                  class="px-4 border-l-4 mb-1 mt-1 text-lg tracking-tight text-gray-700"
                >
                  Ksh. 50000
                </h5>
                <p class="font-normal text-gray-500 text-xs px-4">Credit</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div v-if="showExpenses">Expenses</div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custome",
});
const showAssets = ref(false);
const showliabilities = ref(false);
const showCapital = ref(false);
const showRevenue = ref(false);
const showExpenses = ref(false);

const assetTypes = ref([
  {
    id: 11,
    title: "Current Assets",
  },
  {
    id: 12,
    title: "Fixed Assets",
  },
  
]);
const revenueTypes=ref([
  {id:45,
  title:"Other incomes"
  },
   {id:46,
  title:"Sales"
  },
   {id:47,
  title:"Sales Returns"
  },
   {id:48,
  title:"Cost of sales"
  }
])
const handleAssets = () => {
  showAssets.value = true;
  console.log("am turning to true");
};
const handleLiabilities = () => {
  showliabilities.value = true;
};
const handleCapital = () => {
  showCapital.value = true;
};
const handleRevenue = () => {
  showRevenue.value = true;
};
const handleExpenses = () => {
  showExpenses.value = true;
};
</script>

<style lang="css" scoped>
#custome-height {
  height: 26rem;
}
</style>
