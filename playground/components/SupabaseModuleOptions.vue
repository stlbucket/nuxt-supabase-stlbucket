<template>
  <div style="display: flex; flex-direction: column">
    <h3>Supabase Module Options (calculated)</h3>
    <pre>{{ JSON.stringify(supabaseModuleOptions,null,2) }}</pre>
  </div>
</template>

<script lang="ts" setup>
  const supabaseModuleOptions = ref()
  const loadData = async () => {
    const { data, error } = useFetch('/api/supabase-module-options')
    supabaseModuleOptions.value = error.value ?? data.value
  }
  loadData()
</script>