<template>
    <div class="help">
        <headerComponent/>
        <div class="horizontalLine"></div>
        <!-- <div class="first" > -->
            <nav>
                <router-link to="" class="navlink">Overview</router-link>
                <router-link to="" class="navlink">Learn Live</router-link>
                <router-link to="" class="navlink">Learn Push</router-link>
            </nav>
            <main>
                <h1>Need help?</h1>
                <section>
                    <div class="knowledge">
                        <div>
                            <h2>Knowledge Base</h2> 
                            <p>Find help articles on all of our products plus support
                                for your shopping and product licence questions.
                            </p>
                            <router-link to="" class="link">Go to the Knowledge Base</router-link>
                        </div>
                        <div>
                            <h2>Search the Knowledge Base:</h2>
                            <div class="inputblock">
                                <input type="email" name="email" placeholder='Keyword, e.g. "installation" '>
                                <button>Search</button>
                            </div>
                        </div>
                    </div>
                    <div class="links">
                        <h2>Suggested Articles</h2>
                        <router-link to="" class="link">Live 11 Technical FAQ</router-link>
                        <router-link to="" class="link">Mac Compatibility</router-link>
                        <router-link to="" class="link">Windows Compatibility</router-link>
                        <router-link to="" class="link">Installing Live</router-link>
                        <router-link to="" class="link">Authorizing Live</router-link>
                    </div>    
                </section>
            </main>
            
        <!-- </div> -->
        <section class="pictures">
            <div class="picture">
                <img src="../assets/learn-live.png" alt="">
                <div class="writing">
                    <h2>Learn Live</h2>
                    <p>
                        Video tutorials from getting started through to mastering the latest features,
                        plus further training options.
                    </p>
                    <router-link to="" class="link">Watch Learn Live video series ></router-link>
                </div>
                
            </div>
            <div class="picture">
                <img src="../assets/learn-push.png" alt="">
                <div class="writing">
                    <h2>Learn Push</h2>
                    <p>
                        From setup to sound design and beyond – our growing collection of tutorials 
                        shows how you can make music with Push.
                    </p>
                    <router-link to="" class="link">Watch Learn Push 2 series ></router-link>
                </div>
                
            </div>
            <div class="picture">
                <img src="../assets/learn3.png" alt="">
                <div class="writing">
                    <h2>Learning Music</h2>
                    <p>
                        Learn the fundamentals of music making – beats, melodies, harmonies, 
                        basslines, and song structure – and make music right in your browser.
                    </p>
                    <router-link to="" class="link">Get started making music ></router-link>
                </div>
            </div>
            <div class="picture">
                <img src="../assets/learning-s.png" alt="">
                <div class="writing">
                    <h2>Learning Synths</h2>
                    <p>
                        Learn the fundamentals of synthesis at your own pace with a powerful 
                        but easy-to-learn synthesizer that runs in your web browser.
                    </p>
                    <router-link to="" class="link">Get started making sounds ></router-link>
                </div>
            </div>
            <div class="picture">
                <img src="../assets/making-music.png" alt="">
                <div class="writing">
                    <h2>Making Music</h2>
                    <p>
                        Some tips from 74 Creative Strategies for Electronic 
                        Producers – Dennis DeSantis’ book on solving musical problems, 
                        making progress and finishing what you start.
                    </p>
                    <router-link to="" class="link">Check out chapters from the book ></router-link>
                </div>
            </div>
        </section>
        <section class="resources">
            <h1>More learning resources</h1>
            <div class="split">
                <div class="first-spilt">
                    <article>
                        <h2>Live & Push manual</h2>
                        <p>
                            Everything you need to know about Live and Push.
                        </p>
                        <router-link to="" class="link">Check out the manual ></router-link>
                    </article>
                    <article>
                        <h2>Certified Training</h2>
                        <p>
                            All over the globe, 
                            a growing group of trainers and institutions are offering approved Ableton 
                            teaching at all skill levels, both for individuals and groups.
                        </p>
                        <div class="bluebg">
                            <h3>Training in Ibiza:</h3>
                            <router-link to="" class="link">2 trainers and institutions offer certified training in Ibiza ></router-link>
                        </div>
                        <router-link to="" class="link">Not based in Ibiza? Find training near you</router-link>
                    </article>
                    <div>
                        <h2>User Groups</h2>
                        <p>
                            For beginners and seasoned users alike, 
                            Ableton User Groups are open to any Live user who wants to share 
                            their knowledge and learn from others in person.
                        </p>
                        <router-link to="" class="link">Find a User Group near you ></router-link>
                    </div>
                </div>
                <div>
                    <h2>Learn finger drumming</h2>
                    <p>
                        Practice your finger drumming skills with Melodics, 
                        a standalone app that offers a great way to learn and refine your playing. 
                        Its free to download and comes with 20 lessons to get you started.
                    </p>
                    <router-link to="" class="link">Download Melodics for free ></router-link>
                </div>
            </div>
        </section>
        <section class="contact-support">
            <h1>Contact Support</h1>
            <div class="support">
                <article>
                   <h2> Sales support</h2>
                   <p>    Get in touch with us if you’ve got some questions before you buy a product,
                        or if you need help with your order, license or the authorisation process.
                    </p>
                    <router-link to="" class="link">Submit your sales questions ></router-link>
                </article>
                <article>
                   <h2>Technical support</h2> 
                    <p>Need help with setting up or other technical issues?</p>
                    <router-link to="" class="link">Please log in ></router-link>
                </article>
            </div>
        </section>
        
        <footerComponent/>
    </div>
</template>
<script>
    import headerComponent from '@/components/headerComponent.vue'
    import footerComponent from '@/components/footer.vue'
    export default {
        name:'needHelp',
        components: {
            headerComponent,
            footerComponent
        }
    }
</script>
<style scoped>
    .help {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        font-weight: 400;
        max-width: 1500px;
        margin: auto ;
    }
    .horizontalLine {
        border-top: 0.15em solid #F3F3F3;
        width: 100%;
    }
    nav {
        text-align: left;
        width: 85%;
        margin: 1em auto auto auto; 
    }
    .navlink {
        font-weight: 500;
        color: #000;
        margin-right: 2em;
    }
    main {
        text-align: left;
        margin: auto 7em;
        line-height: 1.5;
        font-size: 1.1em;
    }
    main h1 {
        font-weight: 600;
        font-size: 4.5em;
        margin: 1em auto 0.8em auto;
    }
    main h2 {
        font-weight: 500;
        font-size: 1.5em;
    }
    main section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5em;
    }
    main p {
        margin: 1.2em auto;
        line-height: 1.8em;
    }
    .knowledge {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5em;
    }
    .inputblock {
       max-width: 24em;
       margin-top: 0.5em;
       
    }
    .inputblock:focus-within, .inputblock:active {
        outline: medium solid black;
        border-radius: 0.1em;
    }
    input{
        border: none;
        outline: none;
        height: 2.4em;
        font-size: 0.9em;
        background-color: #EEEEEE;
        padding: 0em 3em 0em 2em;
    }
    button {
        display: inline-block;
        background-color: #0000ff;
        outline: none;
        border: none;
        color:white;
        font-weight: 500;
        font-size: 1em;
        padding: 0.5em 2.6em
    }
    .links {
        display: grid;
        grid-template-columns: 1fr;
    }
    .link {
        color: #0000ff;  
    }
    .pictures {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5em;
        margin: 6em 7.5em ;
        line-height: 1.8em;
        text-align: left;
    }
    .writing {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
        font-size: 1.05em;
        margin: 3em 2em 1em 0em;
    }
    .writing h2 {
        font-weight: 500;
        font-size: 1.6rem;
    } 
    .resources {
        text-align: left;
        margin: auto 6em 4em 7.9em;
        width: 85%;
    }
    .resources h1 {
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 1em;
    }
    .split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2em;
    }
    .first-spilt {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3em;
    }
    .resources h2 {
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 0.8em;
    }
    .resources p {
        line-height: 1.8;
        margin-bottom: 1em;
        max-width: 30em;
    }
    .bluebg {
        padding: 1.5em 1.3em;
        background-color: #b1c5ff;
        margin-bottom: 1em;
    }
    .bluebg h3 {
        font-weight: 500;
        font-size: 1.2rem;
        margin-bottom: 0.5em;
    }
    .contact-support {
        display: grid;
        grid-template-columns: 1fr;
        text-align: left;
        margin: auto 6em 6em 7.2em;
        width: 85%;
    }
    .contact-support h1 {
        font-weight: 600;
        font-size: 2rem;
        margin-bottom: 1em;
    }
    .support {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2em;
        line-height: 1.8;
    }
    .support h2 {
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 0.8em;
    }
    .support p {
        max-width: 30em;
        margin-bottom: 1em;
    }
</style>