<template>
    <footer>
        <div class="horizontalLine"></div>
        <h1 class="title" >Ableton</h1>
        <div class="blocks">  
            <section class="block1">
                <div class="registerblock">
                    <router-link class="link" to="/register">Register Live or Push ></router-link>
                    <router-link class="link" to="/More">About Ableton ></router-link>
                    <router-link to="/jobs" class="link">Jobs ></router-link>
                </div>
                <div>
                    <a href="http://" target="_blank" >
                        <img class="sociallogo" src= "../assets/facebook.png">
                    </a>
                    <a href="http://" target="_blank" >
                        <img class="sociallogo" src= "../assets/twitter.png">
                    </a>
                    <a href="http://" target="_blank" >
                        <img class="sociallogo" src= "../assets/youtube.png">
                    </a>
                    <a href="http://" target="_blank" >
                        <img class="sociallogo" src= "../assets/instagram.png">
                    </a>
                </div>
            </section>
            <section>
                <h3>Education</h3>
                <router-link to="/shop" class="link">
                    Offers for students and teachers ></router-link>
                <router-link to="/jobs" class="link">Ableton for the Classroom ></router-link>
                <router-link to="/jobs" class="link">Ableton for Colleges and Universities ></router-link>
            </section>
            <section>
                <h3>Sign up to our newsletter</h3>
                <p>
                    Enter your email address to stay up to date with the latest offers,
                    tutorials, downloads, surveys and more.
                </p>
                <div class="inputblock">
                    <input type="email" name="email" placeholder="Email Address">
                    <button>Sign up</button>
                </div>
            </section>
            <section>
                <h3>Community</h3>
                <router-link to="/jobs" class="link">Find Ableton User Groups ></router-link>
                <router-link to="/jobs" class="link">Find Certified Training ></router-link>
                <router-link to="/jobs" class="link">Become a Certified Trainer ></router-link>
            </section>
            <section>
                <h3>Distributors</h3>
                <router-link to="/jobs" class="link">Find Distributors ></router-link>
                <router-link to="/jobs" class="link">Try Push in-store ></router-link>
            </section>
            <section>
                <h3>Language and Location</h3>
                <div>
                    <select class="dropdown1" name="language" id="">
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">Français</option>
                        <option value="ja">日本語</option>
                        <option value="zh-cn">简体中文</option>
                    </select>
                    <select class="dropdown2" name="countries" id="">
                        <option value="">Nigeria</option>
                    </select>
                </div>
            </section>
        </div>
        <section class="footerLink">
            <div class="footLinks">
                <router-link to="/contactUs" class="link footLink">Contact Us</router-link>
                <router-link to="/press" class="link footLink"> Press Resources</router-link>
                <router-link to="/legalInfo" class="link footLink">Legal Info</router-link>
                <router-link to="/privacy" class="link footLink">Privacy Policy</router-link>
                <router-link to="/cookie" class="link footLink">Cookie Settings</router-link>
                <router-link to="/imprint" class="link footLink">Imprint</router-link>                 
            </div>
            <div class="foot2">
                <span>Made in Berlin</span>
                <img class="logo" src="../assets/pngegg.png" alt="">
            </div>
        </section>
    </footer>
</template>
<script>
    export default {
        name:'footerComponent'
    }
</script>
<style scoped>
    footer {
        margin-bottom:2em ;
        line-height:1.8;
    }
    .horizontalLine {
        border-top: 0.15em solid #F3F3F3;
    }
    .title {
        text-align: left;
        margin-top: 2em;
        margin-left: 2em;
        font-size:3rem;
    }
    .blocks {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2em;
        margin:2em 6em;
    }
    .blocks section {
        display: grid;
        grid-template-columns: 1fr;
        text-align: left;
    }
    .link {
        color:black;
    }
    .registerblock {
        display: grid;
        grid-template-columns: 1fr;
    }
    .sociallogo {
        height: 2.2em;
        margin-right: 0.3em;
    }
    .inputblock {
       max-width: 24em;
       margin-top: 0.5em;
       
    }
    input{
        border: none;
        outline: none;
        height: 2.4em;
        font-size: 0.9em;
        background-color: #EEEEEE;
        padding: 0em 2em 0em 2em;
    }
    button {
        display: inline-block;
        background-color: #0000ff;
        outline: none;
        border: none;
        color:white;
        font-weight: 500;
        font-size: 1em;
        padding: 0.5em 1.2em
    }
    .dropdown1 {
        background-color: #EEEEEE;
        border: none;
        padding: 0.5em 1em 0.5em 1em;
        margin-right: 0.1em;
    }
    .dropdown2 {
        background-color: #EEEEEE;
        border: none;
        padding: 0.5em 6em 0.5em 1em;
    }
    .footerLink {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5em;
        margin-left: 1em;
        font-size: 0.8rem;
    }
    .footLink {
        margin-right:1em;
    }
    .foot2 {
        display:grid;
        grid-template-columns: 1fr 1fr;
        max-width:20em;
        margin-left: 32em;
    }
    .logo {
        height: 3em;
        margin-top: -0.5em;
    }
</style>