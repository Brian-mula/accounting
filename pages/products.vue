<template>
  <div>
    <div class="flex justify-end items-end p-2">
      <div
        
        class="bg-blue-600 py-2 pr-2 rounded-sm cursor-pointer hover:bg-blue-700 flex items-center"
      >
        <img
          src="~/assets/images/add-svgrepo-com.svg"
          alt=""
          class="h-6 w-6 mx-2"
        />
        <Popover class="relative">
          <PopoverButton
            as="div"
            class="pl-10 flex items-center p-2 cursor-pointer text-base font-normal text-gray-50 hover:bg-blue-700 border-none"
            >Add</PopoverButton
          >
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <div class="bg-white">
              <PopoverPanel class="absolute z-10 bg-white  p-4 rounded">
                <div class="grid grid-cols-1">
                  <nuxt-link
                    to="/newProduct"
                    class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                  >
                     Product
                  </nuxt-link>
                  <nuxt-link
                    to="newService"
                    class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                  >
                     Service
                  </nuxt-link>
                </div>
              </PopoverPanel>
            </div>
          </transition>
        </Popover>
      </div>
    </div>
    <form class="bg-white shadow-md rounded px-8 pt-3 pb-4 mb-2">
      <h3 class="pt-2 pb-4 px-4 text-lg text-gray-500">Search</h3>
      <div class="grid grid-cols-3 gap-4">
        <div class="w-80">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Category
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Any category</option>
            </select>
          </div>
        </div>
        <div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Search Keywords
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder=""
            />
          </div>
        </div>
        <div class="w-80">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="status">
              Brand
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Any brand</option>
            </select>
          </div>
        </div>
        <div class="w-80">
          <div class="mb-4 w-full">
            <label class="block text-gray-700 text-sm mb-2" for="status">
              Status
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option value="3">Any status</option>
            </select>
          </div>
        </div>
        <div class="mb-4 w-80">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Barcode
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>
      </div>
      <div class="flex justify-end items-center">
        <div class="mx-4">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Reset
          </button>
        </div>
        <div class="mx-4">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
          >
            Search
          </button>
        </div>
      </div>
    </form>
    <div class="mt-8 mb-4">
      <div
        class="flex justify-between border-b-4 bg-white rounded px-8 pt-2 pb-2 items-center"
      >
        <div>
          <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">Truck</h5>

          <p class="font-normal text-gray-500 text-sm">Barcode</p>
        </div>
        <div
          class="bg-green-600 flex justify-center items-center rounded-md h-6"
        >
          <span class="text-sm font-bold tracking-tight text-white px-1 py-0">
            Active
          </span>
        </div>
        <div>
          <h5 class="mb-1 mt-1 text-lg tracking-tight text-purple-700">
            Ksh.30000
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>

<style lang="scss" scoped></style>
