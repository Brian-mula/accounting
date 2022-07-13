<template>
  <div>
    <form>
      <div class="flex">
        <div class="bg-white px-4" id="custom">
          <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Supplier details</h3>
          <div class="mb-4 w-full mx-4 pr-4">
            <label class="block text-gray-700 text-md mb-2" for="username">
              Business name:
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="flex justify-between">
            <div class="mb-4 w-full mx-4 pr-4">
              <label class="block text-gray-700 text-md mb-2" for="username">
                First name:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>

            <div class="mb-4 w-full mx-4 pr-2">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Last name:
              </label>
              <input
                class="appearance-none border w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="mb-4 w-full mx-4 pr-4">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Telephone:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>

            <div class="mb-4 w-full mx-4 pr-2">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Mobile:
              </label>
              <input
                class="appearance-none border w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="mb-4 w-full mx-4 pr-4">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Street address 1:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>

            <div class="mb-4 w-full mx-4 pr-2">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Street address 2:
              </label>
              <input
                class="appearance-none border w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="mb-4 w-full mx-4 pr-4">
              <label class="block text-gray-700 text-md mb-2" for="username">
                City:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>

            <div class="mb-4 w-full mx-4 pr-2">
              <label class="block text-gray-700 text-md mb-2" for="username">
                State:
              </label>
              <input
                class="appearance-none border w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-full mx-4 pr-2">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Postal Address:
              </label>
              <input
                class="appearance-none border w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="w-full mx-4 pr-4">
            <div class="mb-4 w-full pr-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Country
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
        <div class="ml-4 bg-white h-min" id="custom">
          <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Account details</h3>
          <div class="mb-4 w-full mx-4 pr-8">
            <label class="block text-gray-700 text-md mb-2" for="username">
              Supplier Number:
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
           <div class="w-full mx-4 pr-4">
            <div class="mb-4 w-full pr-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Currency
              </label>
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="3">Kenya shillings</option>
              </select>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="mb-4 w-full mx-4 pr-4">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Opening balance:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>

            <div class="mb-4 w-full mx-4 pr-2">
              <label class="block text-gray-700 text-md mb-2" for="username">
                Opening balance date:
              </label>
              <input
              type="date"
                class="appearance-none border w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
          </div>
          <div class="mb-4 w-full mx-4 pr-8">
            <label class="block text-gray-700 text-md mb-2" for="username">
              Email:
            </label>
            <input
            type="email"
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
          <div class="mb-4 w-full mx-4 pr-8">
            <label class="block text-gray-700 text-md mb-2" for="username">
              Notes:
            </label>
            <input
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
      </div>
       <div class="flex justify-start items-center mb-2 mt-4">
        <button
          type="button"
          class=" mt-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save Invoice
        </button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#custom {
  width: 34rem;
}
</style>
