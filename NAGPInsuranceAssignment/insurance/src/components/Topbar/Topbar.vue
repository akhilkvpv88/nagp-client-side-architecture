
<template>
  <nav>
    <section class="ak-container">
      <section class="nav-flex">
        <div class="ak-brand">
          <img src="@/assets/logo.png">
        </div>

        <div class="links">
          <div><RouterLink to="/" class="lnk">Home</RouterLink></div>
          <div class="ak-btn-insurance"><RouterLink to="/insurance-details">Insurance Details</RouterLink></div>
        </div>
    </section>
    </section>
  </nav>

</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>


<!--importng google fonts-->
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
</style>

<!--custom css for header [navbar]-->
<style lang="scss" scoped>

/*nav {
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d8e0f0;
  box-shadow: 0 2px 10px #747982;
  margin-bottom: 20px;

  .brand {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .links {
    display: flex;
    gap: 20px;
  }
}*/


</style>

<style>
*{
  font-family: 'Montserrat', sans-serif!important;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box!important;
}
nav{
  width: 100%;
  background-color: #fff!important;
}
.nav-flex{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
.ak-container{
  width: 95%;
  margin: auto!important;
}
.links{
  display: flex;
  align-items: center;
}
.links>div > .lnk{
  color:#000;
  text-decoration: none !important;
  padding-right: 30px;
  font-size: 16px;
  font-weight: 500;
  transition: all .3s linear;
  position: relative;
  padding-bottom: 5px;
}
.links >div> .lnk::after{
  content: '';
  position: absolute;
  height: 3px;
  border-radius: 50px;
  width: 100%;
  bottom: 1px;
  width: 0%;
  left: 0px;
  background-color: #2015FF;
  transition: all .3s linear;
}
.links >div> .lnk:hover{
  color: #2015FF;
}
.links>div>.lnk:hover::after{
  width: 80%;
}
.ak-brand{
  overflow: hidden; 
  position: relative;
}
.ak-brand img{
  width: 50%; 
  height: auto; 
  display: block;
  transform:translate(0px)!important;
}
.ak-btn-insurance{
  --border-width: 50px;
  padding: 13px 23px;
  background-color: #2015FF;
  color: #fff;
  border-radius:var(--border-width);
  border-style: solid;
  animation: borderAnimation 5s infinite;
  position: relative;
}
.ak-btn-insurance > a{
  color: #fff;
  font-weight: 600;
  font-size: 14px;
}

</style>