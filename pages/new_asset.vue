<template>
  <div>
    <form>
      <div class="flex">
        <div class="m-2 bg-white" id="custome">
          <h3 class="text-purple-900 px-4 pt-2 border">Asset details</h3>
          <div class="px-4">
            <div class="mb-4 w-full">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Name:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="flex justify-between w-full">
              <div class="mb-4 w-72">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Purchase date:
                </label>
                <input
                  type="date"
                  class="appearance-none w-full border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>

              <div class="mb-4 mx-4 w-72">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Inservice date
                </label>
                <input
                  type="date"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
            </div>

            <!-- !category and brand -->
            <div class="flex">
              <div class="w-72">
                <div class="mb-4 w-full">
                  <label class="block text-gray-700 text-sm mb-2" for="status">
                    Category Account
                  </label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="3">Assets</option>
                  </select>
                </div>
              </div>
              <div class="mb-4 w-72 mx-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Location:
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <!-- !end of category and brand -->
            </div>
            <div class="flex">
              <div class="w-72">
                <div class="mb-4 w-full">
                  <label class="block text-gray-700 text-sm mb-2" for="status">
                    Usefull life
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="mb-4 w-72 mx-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Employee:
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <!-- !end of category and brand -->
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Description:
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="bg-white m-2 h-min" id="rightCustome">
          <h3 class="px-4 text-purple-900 text-sm py-2 border">
            Pricing details
          </h3>
          <div class="px-4">
            <div class="flex justify-between">
              <div class="mb-4 mx-2 w-64">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Purchase Amount.
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 mx-2 w-64">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Cash Account.
                </label>
                <select
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="3">None selected</option>
                </select>
              </div>
            </div>
            <div class="flex">
              <div class="w-80 mx-2">
                <div class="mb-4 w-full">
                  <label class="block text-gray-700 text-sm mb-2" for="status">
                    Tax 2
                  </label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="3">VAT</option>
                  </select>
                </div>
              </div>
              <div class="w-80 mx-2">
                <div class="mb-4 w-full">
                  <label class="block text-gray-700 text-sm mb-2" for="status">
                    Tax 2
                  </label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="3">VAT</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full bg-white mt-2">
        <h3 class="text-purple-900 text-sm px-4 pt-2 border">
          Asset Deprecation
        </h3>
        <div class="flex">
          <div class="mb-4 mt-3 pl-4 w-96">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Salvage level
            </label>
            <input
              type="number"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>

          <div class="mb-4 mt-3 pl-4 w-96">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Depreciation method
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Please select</option>
            </select>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-start mt-2 mb-2">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
#custome {
  width: 38rem;
}
#rightCustome {
  width: 30rem;
}
</style>
