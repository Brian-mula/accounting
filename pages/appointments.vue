<template>
  <div>
    <form class="bg-white shadow-md rounded px-8 pt-3 pb-4 mb-2">
      <h3 class="pt-2 pb-1 px-4 text-lg text-gray-500 border-b-2">Search</h3>
      <div class="grid grid-cols-3 gap-6 mt-2">
        <div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Status.
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option>Scheduled</option>
              <option>All</option>
              <option>Done</option>
              <option>Dismissed</option>
            </select>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Staff.
          </label>
          <select
            class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
          >
            <option>Any Staff</option>
          </select>
        </div>

        <div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Action.
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option>Any Action</option>
              <option>Deliver</option>
              <option>Follow Up Call</option>
              <option>Follow up Email</option>
              <option>Meeting</option>
              <option>Reservation</option>
            </select>
          </div>
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
    <div
      class="flex justify-between border-b-4 bg-white rounded px-8 pt-2 pb-2 items-center mt-4"
    >
      <div>
        <h5 class="mb-1 mt-1 text-lg tracking-tight text-gray-700">
          Here goes Results
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
