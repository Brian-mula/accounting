<template>
  <div>
    <form class="bg-white px-4">
      <div class="grid grid-cols-3 gap-6 mt-2">
        <div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Client.
            </label>
            <select
              class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              <option>Any Client</option>
            </select>
          </div>
        </div>
        <div class="mb-4 w-80">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Date.
          </label>
          <input
            type="date"
            class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder=""
          />
        </div>

        <div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm mb-2" for="username">
              Duration.
            </label>
            <input
              type="date"
              class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="0.0"
            />
          </div>
        </div>
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
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Notes.
          </label>
          <textarea
            class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
          </textarea>
        </div>
      </div>
       <div class="flex items-center justify-end mt-2 mb-2 pb-2">
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

<style lang="scss" scoped></style>
