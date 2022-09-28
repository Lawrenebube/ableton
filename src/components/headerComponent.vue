<template>
    <div class="header">  
        <div class="logolinks">
            <div>
                <router-link to="/en">
                 <img class="logo" alt="ableton logo" src="../assets/pngegg.png">
                </router-link> 
            </div>
            <nav>
                <router-link class="link" to="/">Live</router-link> 
                <router-link class="link" to="/Push">Push</router-link>
                <router-link class="link" to="/Link">Link</router-link>
                <router-link class="link" to="/Shop">Shop</router-link>
                <router-link class="link" to="/Packs">Packs</router-link>
                <router-link class="link" to="/needHelp">Help</router-link>
                <router-link class="link" to="/More">More +</router-link>
            </nav>
        </div> 
        <nav class="longLink">
            <router-link to="/tryForFree">Try Live for free</router-link>
            <router-link class="register" to="/register">log in or register</router-link>
        </nav>
    </div>
</template>
<script>
    
export default {
  name: 'headerComponent',
  components: {
    
  }
}
</script>
<style scoped>
    .header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        margin: 1em 0em 0em -3em;
        line-height: 1.5;
    }
    .logolinks {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
    }
    .logolinks nav {
        margin-left: 1.5em;
    }
    .logo {
        height: 59px;
        margin-top: -16px;
    }
    .link {
        margin-right: 1.2em;
        color: black;
        font-weight: 500;
        font-size: 1.1rem;
    }
    .link:focus, link:active{
        color: #ff764d;
    }
    
    .longLink{
        font-weight: 500;
        margin-left: 20em;
        font-size: 1.1rem;
        margin-top: -16px;
    }
    .register {
        color:black ;
        margin-left: 2em;
    }
</style>