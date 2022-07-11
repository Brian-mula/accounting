<template>
  <Popover class="relative">
    <PopoverButton class="flex items-center p-2 text-base font-normal text-gray-50 hover:bg-blue-700">Solutions</PopoverButton>

    <PopoverPanel class="absolute z-10">
      <div class="grid grid-cols-1">
        <a href="/analytics">Analytics</a>
        <a href="/engagement">Engagement</a>
        <a href="/security">Security</a>
        <a href="/integrations">Integrations</a>
      </div>

      <img src="/solutions.jpg" alt="" />
    </PopoverPanel>
  </Popover>
</template>

<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
</script>