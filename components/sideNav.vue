<template>
  <div class="h-full bg-blue-900">
    <div class="overflow-y-auto py-4 bg-blue-900 h-screen">
      <a
        href="https://flowbite.com/"
        class="flex items-center pl-2.5 mb-5 justify-center"
      >
        <h2 class="text-white text-xl uppercase">Accounting</h2>
      </a>
      <ul class="space-y-2 pt-8">
        <li>
          <nuxt-link
            to="/"
            class="flex items-center p-2 text-base font-normal text-gray-50 hover:bg-blue-700 bg-blue-700"
          >
            <span class="ml-10 text-sm">Dashboard</span>
          </nuxt-link>
        </li>
        <li>
          <Popover class="relative">
            <PopoverButton as="div" 
              class="pl-10 flex items-center p-2 cursor-pointer text-base font-normal text-gray-50 hover:bg-blue-700 border-none "
              >Sales</PopoverButton
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
                <PopoverPanel class="absolute z-10 bg-white w-full p-4 rounded">
                  <div class="grid grid-cols-1">
                    <nuxt-link
                      to="/manageInvoices"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Manage Invoices
                    </nuxt-link>
                    <nuxt-link
                      to="recurrent"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Recurrent Invoices
                    </nuxt-link>
                     <nuxt-link
                      to="recurrent"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Create Invoice
                    </nuxt-link>
                    
                  </div>

                  <img src="/solutions.jpg" alt="" />
                </PopoverPanel>
              </div>
            </transition>
          </Popover>
        </li>
        <li>
          <Popover class="relative">
            <PopoverButton as="div" 
              class="pl-10 flex items-center p-2 cursor-pointer text-base font-normal text-gray-50 hover:bg-blue-700 border-none "
              >Inventory</PopoverButton
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
                <PopoverPanel class="absolute z-10 bg-white w-full p-4 rounded">
                  <div class="grid grid-cols-1">
                    <nuxt-link
                      to="/products"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Products & Services
                    </nuxt-link>
                    <nuxt-link
                      to="recurrent"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Price List
                    </nuxt-link>
                     <nuxt-link
                      to="requisition"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                       Requisitions
                    </nuxt-link>
                    
                  </div>

                  
                </PopoverPanel>
              </div>
            </transition>
          </Popover>
        </li>
        <li>
          <Popover class="relative">
            <PopoverButton as="div" 
              class="pl-10 flex items-center p-2 cursor-pointer text-base font-normal text-gray-50 hover:bg-blue-700 border-none "
              >Purchases</PopoverButton
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
                <PopoverPanel class="absolute z-10 bg-white w-full p-4 rounded">
                  <div class="grid grid-cols-1">
                    <nuxt-link
                      to="/purchaseInvoice"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Purchase invoices
                    </nuxt-link>
                    <nuxt-link
                      to="/purchase_refunds"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Purchase refunds
                    </nuxt-link>
                     <nuxt-link
                      to="manage_suppliers"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Manage suppliers
                    </nuxt-link>
                    
                  </div>

                
                </PopoverPanel>
              </div>
            </transition>
          </Popover>
        </li>
        <li>
           <Popover class="relative">
            <PopoverButton as="div" 
              class="pl-10 flex items-center p-2 cursor-pointer text-base font-normal text-gray-50 hover:bg-blue-700 border-none "
              >Finance</PopoverButton
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
                <PopoverPanel class="absolute z-10 bg-white w-full p-4 rounded">
                  <div class="grid grid-cols-1">
                    <nuxt-link
                      to="/expenses"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Expenses
                    </nuxt-link>
                    <nuxt-link
                      to="/income"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Incomes
                    </nuxt-link>
                     <nuxt-link
                      to="manage_suppliers"
                      class="flex items-center p-2 text-base font-normal text-gray-600 hover:bg-gray-100"
                    >
                      Treasuries & bank
                    </nuxt-link>
                    
                  </div>

                
                </PopoverPanel>
              </div>
            </transition>
          </Popover>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
const isActive = ref(true);
</script>

<style lang="scss" scoped></style>
