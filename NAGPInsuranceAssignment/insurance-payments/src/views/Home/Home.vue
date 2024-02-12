<template>
  <div class="insuranceContainer" v-if="insurance">
    <div class="container-fluid">
	<div class="row d-flex justify-content-center">
		<div class="col-sm-12">
			<div class="card p-5 mx-auto">
				
				<section class="d-flex pt-5 justify-content-between align-items-center">
					<div>
						<p class="heading">PAYMENT DETAILS</p>
					</div>
					
				</section>
				<form class="card-details pt-5">
					<article class="d-flex justify-content-between align-items-center">
						<div class="form-group mb-1">
								<p class="text-warning">Card Number</p> 
                          		<input type="tel" name="card-num" class="ak-form-text" placeholder="**** **** **** ****" size="20" id="cno" minlength="19" maxlength="19" inputmode="numeric" pattern="[0-9\s]{13,19}" 
         autocomplete="cc-number">
                        </div>

                        <div class="form-group mb-0">
                            <p class="text-warning mb-1">Cardholder's Name</p> <input type="text" name="name" class="ak-form-text" placeholder="Name" size="20">
                        </div>
					</article>	
					<article class="form-group pt-4 d-flex justify-content-between align-items-end w-100 mt-3 pb-5 mb-5">

                        		<div class="">
                        			<p class="text-warning mb-1">Expiration</p>
                        			<input type="text" class="ak-form-text" name="exp" placeholder="MM/YYYY" size="10" id="exp" minlength="7" maxlength="7">
                        		</div>
                        		<div class="">
                        			<p class="text-warning mb-1">Cvv</p>
                        			<input type="password" class="ak-form-text" name="cvv" placeholder="&#9679;&#9679;&#9679;" size="3" minlength="3" maxlength="3">
                        		</div>
                        		
					</article>
					</form>
					<article class="btn btn-primary ak-button-1"><RouterLink to="/">Pay &#8377;  {{ insurance.premiumAmount }}</RouterLink></article>
					<div class="overlay"></div>
			</div>
		</div>
	</div>
</div>


  

  </div>

  
</template>

<script lang="ts" setup>


import { loadInsurance } from "@/services/insurance";
import type { Insurance } from "@/views/Home/Insurance"
import { ref } from "vue"  

const policyNumber = ref();
const insurance = ref();
const insurances = ref();

// Select the button element


insurances.value = await loadInsurance();

const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  policyNumber.value = urlParams.get("policyNumber");

  if (policyNumber.value !== undefined) {
    insurance.value = insurances.value.filter(
      (s: Insurance) => s.policyNumber === policyNumber.value
    )[0];
  }

  


  

 // Function to handle form submission
const handlePaymentFormSubmit = async() => {
  console.log("Inside handlePaymentFormSubmit function")
  const formData = {
    cardNumber: (<HTMLInputElement>document.getElementById("cno")).value,
    cardholderName: (<HTMLInputElement>document.getElementsByName("name")[0]).value,
    expiration: (<HTMLInputElement>document.getElementById("exp")).value,
    cvv: (<HTMLInputElement>document.getElementsByName("cvv")[0]).value,
  };

  // Create a new web worker
  const worker = new Worker(new URL("../../validator/paymentFormValidationWorker.js", import.meta.url));

  // Send form data to the web worker for validation
  worker.postMessage(formData);

  // Handle validation result received from the web worker
  worker.onmessage = function (e) {
    const validationErrors = e.data;

    // Display validation errors or submit the form based on validation result
    if (Object.keys(validationErrors).length > 0) {
      // Handle validation errors
      console.error("Validation errors:", validationErrors);
    } else {
      // Submit the form
      console.log("Form submitted successfully");
      // You can submit the form here
    }

    // Terminate the web worker
    worker.terminate();
  };
}; 

</script>

<style lang="scss" scoped>
@import './Home.scss';
</style>
