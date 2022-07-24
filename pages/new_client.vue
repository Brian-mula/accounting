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
            <div
              class="flex items-center mb-4 mx-4 hover:cursor-pointer"
              @click="handleIndividual"
            >
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
            <div
              class="flex items-center mb-4 mx-4 cursor-pointer"
              @click="handlebusine"
            >
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
                v-model="c_name"
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
                  v-model="c_phone"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Mobile:
                </label>
                <input
                  v-model="c_mobile"
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
                  v-model="c_street1"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Street Address 2:
                </label>
                <input
                  v-model="c_street2"
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
                  v-model="c_city"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-44 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  State:
                </label>
                <input
                  v-model="c_state"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-44 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Postal Code:
                </label>
                <input
                  v-model="c_postalCode"
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
                v-model="c_country"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option
                  v-for="(country, index) in countries"
                  :key="index"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>
            </div>
          </div>
          <div v-if="business">
            <div class="mb-4 w-full px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Business Name:
              </label>
              <input
                v-model="c_name"
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
                  v-model="c_phone"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Mobile:
                </label>
                <input
                  v-model="c_mobile"
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
                  v-model="c_street1"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Street Address 2:
                </label>
                <input
                  v-model="c_street2"
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
                  v-model="c_city"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-44 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  State:
                </label>
                <input
                  v-model="c_state"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-44 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Postal Code:
                </label>
                <input
                  v-model="c_postalCode"
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
                v-model="c_country"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="3">Kenya</option>
              </select>
            </div>
          </div>
        </div>
        <div class="bg-white mx-3 h-fit" id="custom">
          <div class="w-full">
            <div class="bg-gray-100 border py-3">
              <h3 class="px-4 text-lg text-purple-900">Account Details</h3>
            </div>
            <div class="flex justify-between items-center mt-2">
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Code Number:
                </label>
                <input
                  v-model="c_codeNumber"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Invoicing Method:
                </label>
                <select
                  v-model="c_invoicingMethod"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option value="offline">Print(offline)</option>
                </select>
              </div>
            </div>
            <div class="flex justify-between items-center mt-2">
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Opening Balance:
                </label>
                <input
                  v-model="c_openBal"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
              <div class="mb-4 w-72 px-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Starting Balance Date:
                </label>
                <input
                  v-model="c_startingDate"
                  type="date"
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder=""
                />
              </div>
            </div>
            <div class="mb-4 w-full px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Currency:
              </label>
              <select
                v-model="c_currency"
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="Kes">Kes Kenya shillings</option>
              </select>
            </div>
            <div class="mb-4 w-72 px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Email:
              </label>
              <input
                v-model="c_email"
                type="email"
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder=""
              />
            </div>
            <div class="mb-4 w-full px-4">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Category:
              </label>
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="3"></option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end mt-2 mb-2">
        <button
          @click="handleSubmit"
          type="button"
          class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const business = ref(false);
const individual = ref(true);
const handlebusine = () => {
  business.value = true;
  individual.value = false;
};
const handleIndividual = () => {
  business.value = false;
  individual.value = true;
};
const c_name = ref("");
const c_phone = ref("");
const c_mobile = ref("");
const c_street1 = ref("");
const c_street2 = ref("");
const c_city = ref("");
const c_state = ref("");
const c_postalCode = ref("");
const c_country = ref("");
const c_codeNumber = ref("");
const c_invoicingMethod = ref("");
const c_openBal = ref("");
const c_startingDate = ref("");
const c_currency = ref("");
const c_email = ref("");

const countries = ref(["Kenya", "Uganda", "Rwanda", "Burundi"]);
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("starting to post");
  console.log(c_city.value);
  await postClient(
    c_name.value,
    c_phone.value,
    c_mobile,
    c_street1.value,
    c_street2.value,
    c_city.value,
    c_state.value,
    c_postalCode.value,
    c_country.value,
    c_codeNumber.value,
    c_invoicingMethod.value,
    c_openBal.value,
    c_startingDate.value,
    c_currency.value,
    c_email.value
  );
  // await addClient(c_name.value,c_phone.value,c_mobile.value,c_street1.value,c_street2.value,c_city.value,c_state.value,c_postalCode.value,c_country.value)
  console.log("posted");
};
</script>

<style lang="css" scoped>
#custom {
  width: 34rem;
}
</style>
