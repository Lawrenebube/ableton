<template>
    <div class="writeUp">
        <p class="firstParagraph">
            We make
            <router-link class="link" to="/">Live </router-link> ,  
            <router-link class="link" to="/Push">Push </router-link> and
            <router-link class="link" to="/Link">Link  —  </router-link> 
            unique software and hardware for music creation and performance.
             With these products, our community of users creates amazing things.
        </p>
        <p class="secondParagraph">
            Ableton was founded in 1999 and released the first version of Live in 2001.
             Our products are used by a community of dedicated musicians,
              sound designers, and artists from across the world.
        </p>
        <section class="firstPic">
            <img class="pic1" src="../assets/yellowbg2.png" alt="">
            <div class="pic2">
                <img src="../assets/yellowbgpic.png" alt="" >
            </div>
        </section>
        <div class="write2">
            <p class="write2Paragraph1">
                Making music isn’t easy.
                 It takes time, effort, and learning. 
                 But when you’re in the flow, it’s incredibly rewarding. 
            </p>
            <p class="write2Paragraph2">
                We feel the same way about making Ableton products.
                 The driving force behind Ableton is our passion for what we make,
                  and the people we make it for.
            </p>
        </div>
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9SbnhgjeyXA" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowfullscreen></iframe>
            <p class="videospan">
                Why Ableton - Juanpe Bolivar
            </p>
        </div>
        <div class="paragraph3">
            <p class="write3Paragraph1" >
                We are more than 350 people from 30 different countries 
                divided between our headquarters in Berlin and our offices
                    in Los Angeles and Tokyo.
            </p>
            <p class="write3Paragraph2">
                Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day.
                We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught,
                and most of us are somewhere in between.
                What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big:
                helping to shape the future of music culture.
            </p>
        </div>
        <section class="secondPic">
            <div class="ingreenbg">
                <img src="../assets/greenbg1.png" alt="">
                <img src="../assets/greenbg2.png" alt="" >
            </div>
            <img class="biggreenpic" src="../assets/greenbg3.png" alt="">
        </section>
        <section class="paragraph4">
            <p class="write4Paragraph1">
                We believe it takes focus to create truly outstanding instruments.
                 We only work on a few products and we strive to make them great.
            </p>
            <p class="write4Paragraph2">
                Rather than having a one-size-fits-all process,
                we try to give our people what they need to work their magic and grow.
                We’ve learned that achieving the best results comes from building teams that are richly diverse,
                and thus able to explore problems from a wider set of perspectives. 
                We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
            </p>
        </section>
        <div>
            <img src="../assets/computerimage.png" alt="">
        </div>
        <section class="paragraph5">
            <p class="write4Paragraph1">
                We’re passionate about what we do,
                but we’re equally passionate about improving who we are.
            </p>
            <p class="write4Paragraph2">
                We work hard to foster an environment where people can grow both personally and professionally,
                 and we strive to create a wealth of opportunities to learn from and with each other.
            </p>
            <p class="write5Paragraph3">
                Alongside an internal training program,
                employees are actively supported in acquiring new knowledge and skills,
                and coached on applying these in their daily work.
                In addition, staff-organized development and music salons are a chance
                to discuss new technologies, production techniques and best practices.
            </p>
        </section>
        <section>
            <div class="purplebg">
                <img class="purplebg1" src="../assets/purplebg1.png" alt="">
                <img class="purplebg2" src="../assets/purplebg2.png" alt="">
            </div>
        </section>
        <section class="paragraph5">
            <p class="write4Paragraph1">
                We want our employees to love it here. 
                Since we’re looking for exceptional talent from around the world, 
                we will do everything we can to make your transition as easy as possible.
            </p>
            <p class="write4Paragraph2">
                If you're joining us in Berlin, we'll help with relocation and paperwork. 
                We’ll even provide you with free German or English lessons. 
                Plus, working in Germany means you can expect comprehensive health insurance for you and your family, 
                as well as generous maternity and paternity leave. Office hours are flexible, 
                but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, 
                informal small-group activities.
            </p>
        </section>
        <section class="bluebg">
            <img src="../assets/bluebg.png" alt="">
            <div class="bluesection">
                <p>
                We’re really proud of the work we’ve done so far. 
                But there’s so much more to come. 
                If you’d like to be a part of it, please join us.
            </p>
            <router-link  class="link" to="./jobs">See latest jobs ></router-link>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name:'writeUp'
    }
</script>
<style scoped>
.writeUp{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.2em;
    place-items: center;
    text-align: center;
    justify-content: center;
    margin: 3em auto ;
    line-height: 1.8;
}
.firstParagraph {
    font-weight: 500;
    max-width: 26em;
    font-size: 1.6rem;
    text-align: left;
}
.secondParagraph {
    max-width: 38em;
    font-weight: 400;
    font-size: 1.1rem;
    text-align: left; 
    margin-bottom: 5em;
}
.link {
    color: #0000ff;
}
.firstPic{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: -5em;

}
.pic1 {
    margin: 7em 0em 0em 4em;
    background-color: red;
    z-index: 20;
}
.pic2 {
    background-color:#fbffa7 ;
    padding: 14em 11em 14em 12em;
    justify-content: center;
    align-content: center;
    margin-left: -9em;   
}
.write2 {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin-top: 5em;
    gap: 1.5em;
}
.write2Paragraph1 {
    font-weight: 500;
    max-width: 26em;
    font-size: 1.6rem;
    text-align: left;
}
.write2Paragraph2   {
    max-width: 38em;
    font-weight: 400;
    font-size: 1.1rem;
    text-align: left; 
    margin-bottom: 3.5em; 
}
.video {
    margin-left: -2.6em;
}
iframe {
    width: 40em;
    height: 28em;
}
.videospan {
    text-align: left;
    font-size: 0.8rem;
    margin-top: -0.3em;
    margin-bottom: 4em;
}
.write3Paragraph1, .write4Paragraph1 {
    font-weight: 500;
    max-width: 25em;
    font-size: 1.6rem;
    text-align: left;
    margin-bottom: 1em;
}
.write3Paragraph2, .write4Paragraph2, .write5Paragraph3 {
    max-width: 38em;
    font-weight: 400;
    font-size: 1.1rem;
    text-align: left; 
    margin-bottom: 3.5em; 
}
.secondPic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 4em;
}
.ingreenbg {
    display: grid;
    grid-template-columns: 1fr;
    gap: 6em;
    background-color: #b6ffc0;
    padding: 5em 15em 5em 6em;
    margin-right: -6.5em;
}
.biggreenpic {
    margin-top: 10em;
}
.paragraph5 {
    margin-top: 6em;
}
.write5Paragraph3 {
    margin: -3em 0em 3em 0em;
}
.purplebg {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 9em;
    background-color: #d5b3ff;
    padding: 4em 0em 6em 0em ;
}
.purplebg1 {
    margin-left: -7em;
    margin-top: 12em;
}
.purplebg2 {
    margin-top: 4em;
    margin-right: -10em;
}
.bluebg {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #b1c5ff;
    margin: 3em 5em;
}
.bluesection {
    font-weight: 500;
    max-width: 12em;
    font-size: 1.6rem;
    text-align: left;
    margin: auto 4.5em ;
}
.bluesection p {
    margin-bottom: 1em;
}
</style>