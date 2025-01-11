<template>
<div class="insurance-data">
  <table class="insuranceTable">
    <tbody>
      <tr>
        <td>Policy Number</td>
        <td>{{ props.insurance.policyNumber }}</td>
      </tr>
      <tr>
        <td>Policy Holder</td>
        <td>{{ props.insurance.policyHolder }}</td>
      </tr>
      <tr>
        <td>Coverage Type</td>
        <td>{{ props.insurance.coverageType }}</td>
      </tr>
      <tr>
        <td>Start Date</td>
        <td>{{ props.insurance.startDate }}</td>
      </tr>
      <tr>
        <td>End Date</td>
        <td>{{ props.insurance.endDate }}</td>
      </tr>
      <tr>
        <td>Premium Amount</td>
        <td>{{ props.insurance.premiumAmount }}</td>
      </tr>
      <tr>
        <td>Deductible</td>
        <td>{{ props.insurance.deductible }}</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="insurance-actions">
  <InsuranceActions :params="setPolicyNumber" />
</div>
</template>

<script lang="ts" setup>
import type { Insurance } from "./Insurance";
import InsuranceActions from "./InsuranceActions.vue";

const props = defineProps<{ insurance: Insurance }>();

const setPolicyNumber = {
  data: {
    policyNumber: props.insurance.policyNumber,
  },
};
</script>

<style lang="scss" scoped>
@import './Insurance.scss'
</style>
