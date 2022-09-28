<template>
    <div class="bars">
        <headerComponent/>
        
           <div class="top-split">
                <article class="outnow">
                    <p class="out">
                        Out now: Free Live 11.2 update
                    </p>
                    <p class="out">
                        Improvements to the Reverb device, AUv3 support
                    </p>
                    <router-link to="/more" class="link1">Learn more</router-link> <span class="arrow">></span> 
                </article>
                <article class="explore">
                    <p class="loop">
                        Explore Collective Creation at Loop Create on October 29
                    </p>
                    <router-link to="" class="link2">Sign up now </router-link><span class="arrow2">></span>
                </article>
            </div>
            <div class="stef">
                <p>
                    Made in Ableton Live: Reid Stefan
                </p>
                <router-link to="/more" class="link3">Watch the video </router-link><span>></span>
            </div>
            <div class="latest">
                <h2>The latest from Ableton</h2>
                <nav>
                    <router-link to="" class="navlink">All posts</router-link>
                    <router-link to="" class="navlink">Artists</router-link>
                    <router-link to="" class="navlink">News</router-link>
                    <router-link to="" class="navlink">Downloads</router-link>
                    <router-link to="" class="navlink">Tutorials</router-link>
                    <router-link to="" class="navlink">Videos</router-link>
                    <router-link to="" class="navlink">Loop</router-link>
                </nav>
            </div>
            <div class="latestpics">
                <section>
                    <img src="../assets/caliph.png" alt="">
                    <router-link to="">
                        <p class="artist">Artists</p>
                        <p class="latestheading">
                            Califato ¾: Taking Flamenco Into The Future
                        </p>
                    </router-link>
                </section>
                <section>
                    <img src="../assets/freeze.png" alt="">
                    <router-link to="">
                        <p class="tut">Tutorials</p>
                        <p class="latestheading">
                            Freeze, Delay and Deconstruct – Sound Design with Spectral Time
                        </p>
                    </router-link>
                </section>
                <section>
                    <img src="../assets/together.png" alt="">
                    <router-link to="">
                        <p class="loo">loop</p>
                        <p class="latestheading">
                            Get Together: The Changing Forms of Musical Collaboration
                        </p>
                    </router-link>
                </section>
            </div>
            <div>
                <h2 class="focus">In focus: sound design</h2>
                <section class="sound-design">
                    <div>
                        <img src="../assets/slinkdevice.png" alt="">
                        <router-link to="">
                            <p class="pack">Packs</p>
                            <p class="sound-design-paragraph">
                            Slink Devices by Hypnus Records
                            </p>
                        </router-link>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/V_PtNGowT-0" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                    <p class="vide">Videos</p>
                    <p class="sound-design-paragraph">
                        Hybrid Theory: Creative Sound Design with Live 11’s New Reverb
                    </p>
                    </div>
                    <div class="challenge">
                        <img src="../assets/challenge.png" alt="">
                        <router-link to="">
                        <p class="artist"> Artists</p>
                        <p class="sound-design-paragraph">
                            Challenge Accepted: How A.Fruit Combines Sound Design for Games with Bass-Forward Production
                            </p>
                        </router-link>
                    </div>
                </section>
            </div>
            
            <section class="videos">
                <div class="video-title">
                <h2>One Thing videos: monthly creative tips</h2>
                <router-link to="" class="videos-see">See all videos ></router-link>
                </div>
                <section class="youtube">
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/kfnCsgxzUgY" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Chords to monophonic lines</p>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Z__rKq_qEOE" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Creative warping</p>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gGS2QH4PJjI" title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p>Jamming with mutes</p>
                    </div>
                </section>
            </section>
            
            <section class="feature">
                <div class="features">
                    <h2>
                        Videos and features from Loop events
                    </h2>
                    <router-link to="" class="features-see">See more ></router-link>
                </div>
                <section class="blog">
                    <div>
                        <img src="../assets/rachel.png" alt="">
                        <p>Rachel K Collier: Making A Musical Life Online</p>
                    </div>
                    <div>
                        <img src="../assets/kimbra.png" alt="">
                        <p>Kimbra: Expansion, Contraction, Improvisation</p>
                    </div>
                    <div>
                        <img src="../assets/lafa.png" alt="">
                        <p>
                            Lafawndah: Closing the Gap Between Artist and Audience
                        </p>
                    </div>
                </section>
            </section>
            <div class="more">
                <span>More:</span>
                <router-link to="" class="morelink">All Posts</router-link>
                <router-link to="" class="morelink">Artists</router-link>
                <router-link to="" class="morelink">News</router-link>
                <router-link to="" class="morelink">Downloads</router-link>
                <router-link to="" class="morelink">Tutorials</router-link>
                <router-link to="" class="morelink">Videos</router-link>
                <router-link to="" class="morelink">Loop</router-link>
                <router-link to="" class="morelink">One Thing</router-link>
            </div>
        
        <footerComponent/>
    </div>
</template>
<script>
    import headerComponent from '@/components/headerComponent.vue'
    import footerComponent from '@/components/footer.vue';
export default {
    name:'barComponent',
    components: {
        headerComponent,
        footerComponent
    }
}
</script>
<style scoped>
    .bars {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        max-width: 1400px;
        margin: auto ;
    }
    .top-split {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.3em;
    }
    .outnow {
        background: url('../assets/firstslinkfilter.png') 
                no-repeat center center/cover;
        height: 33em;
        width: 50rem;
        text-align: left;
        color: yellow;
        padding: 3em 5em 5em 4em;
        line-height: 1.5;
    }
    .out {
        font-weight: 500;
        font-size: 3.1rem;
    }
    .link1 {
        color: yellow;
        font-weight: 500;
        text-decoration-line: underline;
    }
    .explore {
        background: radial-gradient(orange,rgb(228,203,150),rgb(243,122,93));
        height: 18em;
        width: 28rem;
        margin-top: 14em;
        font-weight: 600;
        text-align: left;
        padding: 2em 4em 5em 2.5em;
        line-height: 1.8;
    }
    .loop {
        font-size: 1.6rem;
        
    }
    .link2 {
        color: black;
        font-weight: bold;
        font-size: 1.2rem;
        text-decoration: underline;
    }
    .stef {
        background: url(../assets/reidstefan1.png) 
                no-repeat center center/cover;
        height: 18em;
        width: 30rem;
        margin: -4em 0em 5em 8em;
        text-align:left;
        font-weight: 600;
        color: cyan;
        padding: 2.5em 7em 4em 3em;
        line-height: 1.5;
    }
    .stef p {
        font-size: 1.7rem;
    }
    .link3 {
        color: cyan;
        font-size: 1.2rem; 
        text-decoration: underline;
    }
    .latest {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4em;
       margin:auto 3em 2em 0em;
    }
    .latest h2{
        font-weight: 500;
        font-size: 2.3rem;
        margin-top:-0.4em;
    }
    .navlink {
        font-weight: 500;
        color: #0000ff;
        margin-right: 1.2em;
        font-size: 1.2rem;
    }
    .latestpics {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-left: 7em;
        margin-bottom: 5em;
        gap: 1em;
        text-align: left;
    }
    .artist {
        color: yellow;
        font-size: 1em;
    }
    .tut {
        font-size: 1em;
        color: #b6ffc0; 
    }
    .loo {
        font-size: 1em;
        color: #b1c5ff;
    }
    .latestheading, .sound-design-paragraph {
        color: black;
        font-weight: 500;
        font-size: 1.1rem;
       padding: 0.2em 4em 0.8em 0em;
    }
    .focus {
        text-align: left;
        margin:auto auto 1em 3em;
        font-weight: 600;
        font-size: 2rem;
    }
    iframe {
        height: 12em;
        width: 23rem;
    }
    .sound-design {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
        text-align: left;
        margin-left: 6em;
        margin-bottom: 3em;
    }
    .videos {
        text-align:left;
        margin:auto auto 1em 6em;
    }
    .video-title {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 6em;
    }
    .videos h2 {
        margin:auto auto 1em 0em;
        font-weight: 600;
        font-size: 2rem;
    }
    .videos-see, .features-see  {
        color: #0000ff;
        font-weight: 600;
        font-size: 1.2rem;
        margin-left: 20em;
        margin-top: 0.3em;
    }
    .youtube {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .youtube p {
        color: black;
        font-weight: 500;
        font-size: 1.1rem;
        margin-top: 0.5em;
    }
    .pack {
        color:rgb(255,73,204);
    }
    .vide {
        color:#b1c5ff;
    }
    .feature {
        margin:2em auto 5em 6em;
        text-align: left;
    }
    .features {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5em;
    }
    .features h2 {
        margin:auto auto 1em 0em;
        font-weight: 600;
        font-size: 2rem;
    }
    .features-see {
        margin-left: 22em;
    }
    .feature p {
        font-weight: 500;
        font-size: 1.05rem;
        padding: 0.2em 4em 0.8em 0em;
    }
    .blog {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1em;
    }
    .blog img {
        width: 23rem;
    }
    .more {
        background-color:rgb(238,238,238);
        width: 100%;
        height:10em;
        font-weight: 500;
       padding: 4em ;
    }
    .more span {
        font-size: 1.3rem;
        margin-right:1.2em;
    }
    .morelink {
        margin-right:0.8em;
        font-size: 1.2rem;
        color: #0000ff;
    }
</style>