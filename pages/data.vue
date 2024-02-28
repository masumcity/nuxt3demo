<template>
  <div class="container mx-auto">
    <EasyDataTable 
    :headers="headers" 
    :items="data"
    header-text-direction="center"
    body-text-direction="center"
     />
  </div>
</template>

<script lang="ts" setup>
import type { Header } from "vue3-easy-data-table"

const headers: Header[] = [
  { text: "Name", value: "name" },
  { text: "Username", value: "username" },
  { text: "Email", value: "email" },
  { text: "Phone", value: "phone" },
  { text: "Website", value: "website" },
  { text: "Company Name", value: "company.name", sortable: true },
  { text: "Address", value: "address.street" },
  { text: "City", value: "address.city" },
]

const { data, error } = await useFetch('https://jsonplaceholder.typicode.com/users');
</script>