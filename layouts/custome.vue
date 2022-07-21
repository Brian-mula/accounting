<template>
  <div class="flex">
    <div class="w-56">
      <side-nav />
    </div>
    <div class=" w-full bg-gray-100">
    <navbar1/>
    <div class="px-4 flex">
    <div class="w-64 h-screen bg-white border">
        <charts-of-aacounts-sidebar/>
    </div>
    <div class="w-full">
    <slot />
    </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import Navbar1 from '~~/components/navbar.vue';
</script>

<style lang="scss" scoped></style>
