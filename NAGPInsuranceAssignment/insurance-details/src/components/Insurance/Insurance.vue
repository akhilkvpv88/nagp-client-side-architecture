<template>
  <div class="insuranceData">
    <InsuranceData :insurance="props.insurance" />
  </div>
</template>

<script lang="ts" setup>
import type { Insurance } from "./Insurance";
import InsuranceData from "./InsuranceData.vue";

const props = defineProps<{
  insurance: Insurance;
}>();
</script>

<style lang="scss" scoped>
@import './Insurance.scss'
</style>