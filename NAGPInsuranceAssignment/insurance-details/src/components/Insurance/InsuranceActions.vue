<template>
  <div class="insuranceActions">
    <Button class="pay-premium" type="primary" @click="onClick">Pay Premium</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "insurance-components-library";
import { navigateTo } from "@/routes/routes";

const props = defineProps({
  params: Object,
});

const onClick = () => {
  
  navigateTo({
    path: `/payments`,
    query: { policyNumber: props.params?.data.policyNumber },
  });
};
</script>

<style lang="scss" scoped>
@import './Insurance.scss'
</style>
