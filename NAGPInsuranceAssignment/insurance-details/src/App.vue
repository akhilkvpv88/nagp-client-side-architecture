<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Input, Button } from "insurance-components-library";
import InsuranceTemplate from "./components/Insurance/Insurance.vue";
import { loadInsurance } from "./services/insurance";
import "insurance-components-library/dist/style.css";
import type { Insurance } from "./components/Insurance/Insurance";

const policyNumber = ref();
const search = ref("");
const insurance = ref();
const insurances = ref();

const loadInsuranceByPolicyNumber = (polNo: string) => {
  policyNumber.value = polNo;
  insurance.value = insurances.value.filter(
    (s: Insurance) => s.policyNumber === polNo
  )[0];
};

onMounted(async () => {
  insurances.value = await loadInsurance();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  policyNumber.value = urlParams.get("policyNumber");

  if (policyNumber.value !== undefined) {
    insurance.value = insurances.value.filter(
      (s: Insurance) => s.policyNumber === policyNumber.value
    )[0];
  }
});

const openInsurance = () => {
  const newurl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?policyNumber=${search.value}`;
  window.history.pushState({ path: newurl }, "", newurl);
  loadInsuranceByPolicyNumber(search.value);
};
</script>

<template>
  <div class="ak-wrapper">
    <section>
      <div class="insuranceContainer">
        <div class="ak-header">
          <h2>
            {{
              insurance
                ? ``
                : ``
            }}
          </h2>

          <div class="searchBox">
            <Input
              v-model="search"
              class="searchInput"
              placeholder="Enter Policy Number"
            ></Input>
            <Button type="primary" @click="openInsurance">Search</Button>
          </div>
        </div>

        <InsuranceTemplate v-if="insurance" :insurance="insurance" />

        <div v-if="policyNumber && !insurance" class="insuranceNotFound">
          <h3>Insurance not found</h3>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.insuranceContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .header {
    width: 100%;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .searchBox {
      display: flex;
      align-items: center;
      gap: 10px;

      .searchInput {
        max-width: 200px;
      }
    }
  }

  .insuranceNotFound {
    text-align: center;
    margin-top: 20px; // Add margin to separate from other elements
  }
}
</style>
<style>
  .ak-wrapper{
    height: 80vh!important;
  }
  .searchBox{
    width: 80%!important;
    display: flex;
    padding: 0px!important;
    margin: auto!important;
  }
  .searchBox > input[type='text']{
    border: none!important;
    padding: 10px 15px!important; 
  }
  .searchInput{
    border: none!important; 
  }
  .el-input__inner::placeholder{
    color: #000; 
  }
  /* Style for the placeholder text */
  /*input[type="text"]::placeholder {
        color: #000; 
        font-style: italic;
    }*/
    
  .ak-header{width: 100%!important; margin-top: 60px!important;}
  .el-input__inner{
    border:none!important;
    border-radius: 0px!important;
    padding: 5px 10px;
    background-color: transparent!important;
    height:64px!important;
    color:#000!important;
    font-size: 18px;
    background-color: #f5f5f5!important;
    padding:15px!important;
  }
  .el-input__wrapper{
    border-radius: 0px!important;
    padding:0px!important;
  }
  .el-button{
    border-radius: 0!important;
    height: 66px!important;
  }
  .el-input__wrapper:focus{
    outline: 0!important;
  }
  .el-button{
    background-color: #2015FF!important;
    font-size: 1.1em;
    font-weight: 600;
    padding: 15px 25px!important;
    border: none!important;
  }
  .searchBox{
    border: 2px solid #2015FF;
  }
  .insuranceData[data-v-14b33ad8]{
    width:80%!important;
    max-width: none!important;
    display: block!important;
  }
  .insuranceActions{
    margin-top: 50px!important;
  }
  .insuranceActions[data-v-41d83963]{
    justify-content: center!important;
  }
  .pay-premium{
    background: #B31312!important;
    border-radius: 100px!important;

  }

  tr{
    border: 0px solid !important;
  }
</style>