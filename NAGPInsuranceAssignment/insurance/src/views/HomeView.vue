<script setup lang="ts"></script>

<template>
  <!--top banner-->
  <section class="w-100">
    <section class="">
      <section class="ak-flex h-100vh">
        <article class="text-content">
          <h1>
            A perfect Insurance Plan Created Just For You
          </h1>
          <p>When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.</p>
          <article class="ak-btn-lg-insurance"><RouterLink to="/insurance-details">Insurance Details</RouterLink></article>
          <!--Customer and experience section-->
          <section class="cus-flex">
            <article>
              <h1>27K</h1>
              <p>Satisfied Customers</p>
            </article>
            <article>
              <h1>12+</h1>
              <p>Years of Experience</p>
            </article>
          </section>
        </article>
        <article class="ak-banner-image">
          <img src="@/assets/banner_image.png" width="100%"/>
        </article>        
      </section>
    </section>
  </section>
  <!--top banner end-->
</template>

<style scoped lang="scss">
@import './HomeView.scss';
</style>
