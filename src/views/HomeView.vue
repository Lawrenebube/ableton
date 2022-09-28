<template>
  <div class="home">
    <headerComponent/>
    <heroPage/>
    <writeUp/>
    <footerComponent/>
  </div>
</template>

<script>
    import headerComponent from '@/components/headerComponent.vue'
  import heroPage from '@/components/heroPage.vue'
  import writeUp from '@/components/writeUp.vue'
  import footerComponent from '@/components/footer.vue'


export default {
  name: 'HomeView',
  components: {
    headerComponent,
    heroPage,
    writeUp,
    footerComponent   
  }
}
</script>
<style scoped>
 .home {
 display: grid;
 grid-template-columns: 1fr;
  margin:  auto;
  max-width: 1500px;
 }
</style>
