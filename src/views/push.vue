<template>
    <div>
        <HeaderComponent/>
        <nav>
           <router-link to="">Overview</router-link> 
           <router-link to="">what's new</router-link> 
           <router-link to="">Making beats</router-link> 
           <router-link to="">Playing notes and chords</router-link> 
           <router-link to="">Sampling</router-link> 
           <router-link to="">Design</router-link> 
           <router-link to="">Tech specs</router-link> 
           <router-link to="">Learn Push</router-link> 
           <router-link to="">Buy Now</router-link> 
        </nav>
        <footerComponent/>
    </div>
</template>
<script>
    import headerComponent from '@/components/headerComponent.vue'
    import footerComponent from '@/components/footer.vue';
export default {
    name:'pushComponent',
    components:{
        headerComponent,
        footerComponent
    }
}
</script>