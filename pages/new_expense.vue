<template>
  <div>
    <form>
      <div class="flex">
        <div class="m-2 bg-white" id="custome">
          <div class="px-4">
            <div class="flex justify-between">
              <div class="mb-4 w-full">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Amount:
                </label>
                <input
                  class="appearance-none border w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="0.0"
                />
              </div>

              <div class="mb-4 mx-4 w-full">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Description:
                </label>
                <textarea
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                >
                </textarea>
              </div>
            </div>
            <div class="flex justify-between">
              <div class="mb-4 w-full pl-3 pr-2">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Code No:
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-full pr-3 pl-2">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Date:
                </label>
                <input
                  type="date"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
            </div>
            <!-- !category and brand -->
            <div class="flex justify-between">
              <div class="mb-4 w-full pl-3 pr-2">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Vendor:
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="w-full">
                <div class="mb-4 w-full">
                  <label class="block text-gray-700 text-sm mb-2" for="status">
                    Category
                  </label>
                  <select
                    class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    aria-label="Default select example"
                  >
                    <option value="3">Long Term</option>
                  </select>
                </div>
              </div>

              <!-- !end of category and brand -->
            </div>
            <div class="mb-4 w-72">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Journal Account:
              </label>
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="3">Any</option>
              </select>
            </div>
          </div>
        </div>
        <div class="bg-white m-2 h-min" id="rightCustome">
          <h3 class="px-4 text-purple-900 text-sm py-2 border">
            Upload Receipt image
          </h3>
          <div class="px-4">
            <div class="mb-4 mx-2">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Receipt Image
              </label>
              <input
                type="file"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
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
  width: 46rem;
}
#rightCustome {
  width: 22rem;
}
</style>
