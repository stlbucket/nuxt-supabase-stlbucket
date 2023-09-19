<template>
  <div style="display: flex; flex-direction: column">
    <h3>Runtime Config</h3>
    <pre>{{ JSON.stringify(runtimeConfig,null,2) }}</pre>
  </div>
</template>

<script lang="ts" setup>
  const runtimeConfig = ref()
  const loadData = async () => {
    const { data, error } = useFetch('/api/runtime-config')
    runtimeConfig.value = error.value ?? data.value
  }
  loadData()
</script>