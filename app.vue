<script setup>
const colorMode = useColorMode()
</script>
<template>
  <VitePwaManifest />
  <div class="container mx-auto">
    <div class="flex gap-2 mb-2">
      <NuxtLink to="/" class="p-3 bg-gray-500 text-white rounded block w-24">Home</NuxtLink>
      <NuxtLink to="/data" class="p-3 bg-gray-500 text-white rounded block w-24">Data</NuxtLink>
      <NuxtLink to="/posts" class="p-3 bg-gray-500 text-white rounded block w-24">Posts</NuxtLink>
    </div>
      <select v-model="colorMode.preference" class="border w-24 h-8 text-gray-700 rounded">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="sepia">Sepia</option>
    </select>
  </div>
  <NuxtPage />
</template>
<style>
html,
body {
  overflow: hidden !important;
}

body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style>