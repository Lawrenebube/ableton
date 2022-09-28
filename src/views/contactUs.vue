<template>
    <div class="contactUs">
        <headerComponent/>
        <div class="horizontalLine"></div>

        <div class="main">
            <h1>Contact Us</h1>
            <h2>Customer Support</h2>
            <section>
                <h3>Sales support</h3>
                <p class="cutoff">
                    Get in touch with us if you’ve got some questions before you buy a product, 
                    or if you need help with your order, license or the authorisation process.
                </p>
                <router-link class="link" to="">Submit your sales questions</router-link>
            </section>
            
            <section>
                <h3>Technical support</h3>
                <p class="space">
                    Need help with setting up or other technical issues?
                </p>
                <router-link to="" class="link">Submit your technical support request</router-link>
                <p class="space2">
                For more information, please view our 
                <router-link to="" class="link">Help section.</router-link>
            </p>
            </section>
            
            <section>
                <h3>Developer support</h3>
                <p class="space">
                    Your product is not working properly within Ableton Live?
                </p>
                <router-link to="" class="link">Submit your developer support request</router-link>
            </section>
            <div class="moreinfo">
                <section>
                <h2>General inquiries</h2>
                <p>
                    Ableton
                </p>
                <p>
                    Schönhauser Allee 6-7
                </p>
                <p>
                    10119 Berlin, Germany
                </p>
                <p>
                    Email: 
                    <a href="mailto:contact@ableton.com">contact@ableton.com</a>
                </p>
            </section>

            <section>
                <h2>US Team</h2>
                <p>
                    Ableton Inc.
                </p>
                <p>
                    36 W. Colorado Blvd. Suite 300
                </p>
                <p>
                    Pasadena, CA 91105, USA
                </p>
                <p>
                    To reach our customer service and technical support team, please visit our 
                    <router-link to="./needHelp" class="link">Help section.</router-link>
                </p>
            </section>

            <section class="inquiries">
                <h2>Special inquiries</h2>
                <div>
                    <p>
                        Events and Sponsoring
                    </p>
                    <a href="mailto:contact@support.ableton.com">contact@support.ableton.com</a>
                </div>
                <div>
                    <p>
                        Distributor/Dealer Inquiries
                    </p>
                    <a href="mailto:distribution@ableton.com">distribution@ableton.com</a>
                </div>
                <div>
                    <p>
                        US Team Inquiries
                    </p>
                    <a href="mailto:office.americas@ableton.com">office.americas@ableton.com</a>
                </div>
                <div>
                    <p>
                        Public Relations
                    </p>
                    <a href="mailto:press@ableton.com">press@ableton.com</a>
                </div>
            </section>
            </div>

            
        </div>

        <footerComponent/>
    </div>
</template>
<script>
    import headerComponent from '@/components/headerComponent.vue'
    import footerComponent from '@/components/footer.vue'

    export default {
        name:'contactUs',
        components: {
            headerComponent,
            footerComponent
        }
    }
</script>
<style scoped>
    .contactUs {
        display: grid;
        grid-template-columns: 1fr;
        place-items: center;
        font-weight: 400;
        max-width: 1500px;
        margin: auto;

    }
    .horizontalLine {
    border-top: 0.15em solid #F3F3F3;
    width: 100%;
}
    .main {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
        margin: 4em auto 7em 9em;
        text-align: left;
        line-height: 2; 

    }
    .main h1 {
        font-weight: 500;
        font-size: 3.5rem;
    }
    .main h2 {
        font-weight: 500;
        font-size: 1.7rem; 
    }
    .main h3 {
        font-weight: 500;
        font-size: 1.2rem; 
    }
    .cutoff{
       width: 38em;
       margin-bottom: 1em;
    }
    .space{
        margin-bottom: 1em; 
    }
    .space2 {
        margin-top: 1em;
    }
    .link {
        color:#0000ff;
    }
    .moreinfo {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3em;
    }
    .inquiries {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
    }
</style>












