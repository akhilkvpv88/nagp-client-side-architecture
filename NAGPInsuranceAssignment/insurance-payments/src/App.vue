<script setup lang="ts">
import Home from "./views/Home/Home.vue";
import { ref } from "vue";
import "insurance-components-library/dist/style.css";
</script>

<template>
  <Suspense>
    <Home />
  </Suspense>
</template>
@/views/Home/Insurance