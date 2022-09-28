<template>
  <!-- <headerComponent/> -->
  <router-view/>
</template>
<script>
  // import headerComponent from '@/components/headerComponent.vue'
  


export default {
  name: 'AppView',
  components: {
    // headerComponent
     
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
  }
#app {
  font-family: Avenir,-apple-system,BlinkMacSystemFont, "Segoe UI",Roboto,"Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* justify-content: center; */
  font-size: 16px;
 
}
</style>
