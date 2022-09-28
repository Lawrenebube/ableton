<template>
    <div class="hero">
        <div class="horizontalLine"></div>
        <header>
            <nav>
                <router-link to="/more" class="link">About</router-link>
                <router-link to="/jobs" class="link">Jobs</router-link>
                <router-link to="/Apprenticeships" class="link">Apprenticeships</router-link>
            </nav>
            <p class="name"><span>Ableton</span></p>
    </header>
    </div>
    
</template>
<script>
    export default {
        name:'heroPage'
    }
</script>
<style scoped>
    .hero {
        grid-template-columns: 1fr;   
    }
    header{
        display: grid;
        grid-template-columns: 1fr;
        line-height: 1.5;
        /* margin: 1em 0em 1em 6em; */
    }
.horizontalLine {
    border-top: 0.15em solid #F3F3F3;
}
nav {
    display:flex;
    flex-direction: row;
    max-width: 20em;
    align-content: flex-start;
    justify-content: flex-start;
    margin:1em auto 2em 4em;
    font-size: 0.92rem;
}
.link {
    /* background-color: yellow; */
    color: black;
    font-weight: 500;
    
    margin-right: 2em;
}
.link:focus{
        color: #ff764d;
    }
.name {
    display: grid;
    place-items: center;
    color: #ff764d;
    font-weight: 600;
    font-size: 2rem;
    margin: 0em 2em ;  
   text-align: center;
   position:relative;
   padding-bottom: 5em;
} 
.name::before {
            content: '';
            background: url('../assets/pexels-eduardo-dutra-2115217.jpg') 
                no-repeat center center/cover;
            position: absolute;
            top: 0px;
            left: 0px;
            width: 38em;
            height: 17em;
            z-index: -1;
            /* margin-bottom: 3em; */
}
.name span {
    margin: 2.5em auto;
    font-size: 2.5em;
    font-weight: 700;
}
</style>