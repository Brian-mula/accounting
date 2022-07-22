<template>
  <div>
    <form>
      <div class="flex">
        <div class="bg-white h-min" id="custom">
          <div class="bg-gray-100 border py-3">
            <h3 class="px-4 text-lg text-purple-900">Client Details</h3>
          </div>
          <h3 class="px-4 mt-8 text-lg text-purple-900">Client Type</h3>
          <div class="mt-2 px-4 flex">
            <div class="flex items-center mb-4 mx-4 hover:cursor-pointer" @click="handleIndividual">
              <input
                checked
                type="radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-purple-900 cursor-pointer"
                >Individual</label
              >
            </div>
            <div class="flex items-center mb-4 mx-4 cursor-pointer" @click="handlebusine">
              <input
                type="radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="default-radio-1"
                class="ml-2 text-sm font-medium text-purple-900 cursor-pointer"
                >Business</label
              >
            </div>
          </div>
         <div v-if="individual">
          <div class="mb-4 w-full px-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Full Name:
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Telephone:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Mobile:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Street Address 1:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Street Address 2:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="mb-4 w-44 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                City:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-44 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                State:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-44 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Postal Code:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="mb-4 w-full px-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Country:
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Kenya</option>
            </select>
          </div>
         </div>
         <div v-if="business">
          <div class="mb-4 w-full px-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Business Name:
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Telephone:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Mobile:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Street Address 1:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Street Address 2:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex justify-between items-center mt-2">
            <div class="mb-4 w-44 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                City:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-44 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                State:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-44 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Postal Code:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="mb-4 w-full px-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Country:
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Kenya</option>
            </select>
          </div>
         </div>
        </div>
        <div class="bg-white mx-3" id="custom">right</div>
      </div>
    </form>
  </div>
</template>

<script setup>
const business=ref(false)
const individual=ref(true)
const handlebusine=()=>{
business.value=true
individual.value=false
}
const handleIndividual=()=>{
    business.value=false
    individual.value=true
}
</script>

<style lang="css" scoped>
#custom {
  width: 36rem;
}
</style>
