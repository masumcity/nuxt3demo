<script setup>
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const colorMode = useColorMode();

const x = ref(null);
const y = ref(null);

const switchln = (locale) => {
  console.log(locale);
  setLocal('bn');
}
</script>

<template>
  <div class="container mx-auto">
    <div class="pt-10">
      <form class="m-2 p-3">
        <p>{{ colorMode.preference }}</p>
        <select v-model="locale" class="border w-24 h-8 text-gray-700 rounde">
          <option value="en">en</option>
          <option value="bn">bn</option>
        </select>
        <p>{{ $t('_welcome') }}</p>
        <h1>{{ $t('_hello') }}</h1>
        <p>{{ $t('_html') }}</p>
      </form>
    </div>
  </div>
</template>

