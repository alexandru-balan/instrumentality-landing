<template>
    <div id="paths">
        
        <!-- This next section describes the prices for using Instrumentality -->
        <h3 class="uk-text-center uk-margin-small-left uk-margin-small-right">Different paths in life might lead to the same place</h3>
        <section class="uk-section uk-section-small uk-flex uk-flex-middle">
            <PathCard v-bind:pathName="card1.pathName" v-bind:features="card1.features" v-bind:price="card1.price" />
            <PathCard v-bind:pathName="card2.pathName" v-bind:features="card2.features" v-bind:price="card2.price" />
            <PathCard v-bind:pathName="card3.pathName" v-bind:features="card3.features" v-bind:price="card3.price" />
        </section>

    </div>    
</template>

<script>
import PathCard from './PathCard.vue';

export default {
    name: 'Paths',
    components: {
        PathCard
    },
    data: function() {
        return {
            card1: {
                pathName: 'The hobbyist',
                features: [
                    {name: 'All the productivity features'},
                    {name: 'Integrations with Github and Gitlab'},
                    {name: 'Access to the newest updates'}
                ],
                price: 'Free'
            },
            
            card2: {
                pathName: 'The professional',
                features: [
                    {name: "All hobbyist's perks"},
                    {name: 'Assign skills and experience to teammates'},
                    {name: 'The app learns and adjusts the stats to automatically asign tasks'}
                ],
                price: '$15/team/month (maximum of people in a team: 20)'
            },

            card3: {
                pathName: "The tinkerer",
                features: [
                    {name: 'Configure your own Instrumentality subscripion with whatever you need! (Upcoming)'}
                ],
                price: 'Varies depending on chosen features'
            }
        }
    }
}
</script>

<style lang="less" scoped>
    @import "@/assets/theme.less";

    .uk-section {
        flex-direction: column;
        justify-content: space-around;        
    }

    h3 {
        margin-top: 1em;
        color: #FFF3FF;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.5em;
    }

    // On laptop screens
    @media only screen and (min-width: 960px) {
        .uk-section {
            flex-direction: row;
        }

        h3 {
            font-size: 1.75em;
        }
    }

    // On 4k screens
    @media only screen and (min-width: 2560px) {
        h3 {
            font-size: 2em;
        }
    }
</style>