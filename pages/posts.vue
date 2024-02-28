<template>
  <div class="container mx-auto">
    <span>search value: </span>
    <input type="search" v-model="searchValue">
    <br />
    <EasyDataTable :headers="headers" :items="data" header-text-direction="center" buttons-pagination show-index
      :sort-by="sortBy" :sort-type="sortType" :search-value="searchValue" alternating>
      <template #expand="data">
        <div style="padding: 15px">
          {{ data.title }} won championships
        </div>
      </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts" setup>
const perpage = ref(6);
const sortBy = "title";
const sortType = "asc";

const searchValue = ref("");

//01718118122
const headers = [
  { text: "User ID", value: "userId", width: 100 },
  { text: "ID", value: "id", sortable: true },
  { text: "Title", value: "title", sortable: true },
  { text: "Body", value: "body" },
];

const { data, error } = await useFetch(`https://jsonplaceholder.typicode.com/posts`);
console.log(perpage.value)

</script>