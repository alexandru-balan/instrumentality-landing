<template>
    <div id="footer" class="uk-section uk-section-small">
        <h3 class="uk-text-center">This project is made possible by</h3>

        <!-- This section credits all technologies used in making this application -->
        <div id="flex-container" class="uk-flex uk-flex-auto uk-flex-column">

            <!-- UI and front-end technologies -->
            <div class="uk-flex uk-flex-column">
                <h4 class="uk-text-center">User interface &amp; Front-end</h4>
                <hr class="uk-divider-icon">
                <div class="icon-credits uk-flex uk-flex-row uk-flex-center">
                    <font-awesome-icon :icon="['fab', 'vuejs']" size="2x" />
                    <font-awesome-icon :icon="['fab', 'uikit']" size="2x" />
                    <font-awesome-icon :icon="['fab', 'less']" size="2x" />
                </div>
                <ul class="uk-text-center uk-list">
                    <li>Frontend framework provided by <a href="https://vuejs.org/">Vue.js</a></li>
                    <li>UI goodness provided by <a href="https://getuikit.com/">UIkit</a></li>
                    <li>CSS pre-processor is <a href="http://lesscss.org/">Less</a></li>
                    <li>Amazing illustrations made by <a href="https://undraw.co/illustrations">Undraw</a></li>
                    <li>Color palette and gradient from <a href="https://mycolor.space/">ColorSpace</a></li>
                </ul>
            </div>

            <!-- Back-end technologies and database -->
            <div class="uk-flex uk-flex-column">
                <h4 class="uk-text-center">Database solution &amp; Back-end</h4>
                <hr class="uk-divider-icon">
                <div class="icon-credits uk-flex uk-flex-row uk-flex-center">
                    <font-awesome-icon :icon="['fab', 'laravel']" size="2x" />
                    <font-awesome-icon :icon="['fab', 'docker']" size="2x" />
                    <font-awesome-icon :icon="['fas', 'database']" size="2x" />
                </div>
                <ul class="uk-text-center uk-list">
                    <li>Back-end framework provided by <a href="https://laravel.com/">Laravel</a></li>
                    <li>We store your data with the help of <a href="https://www.postgresql.org/">PostgreSQL</a></li>
                    <li>Every component is neatly packed into containers by <a href="https://www.docker.com/">Docker</a></li>
                </ul>
            </div>

        </div>
    </div>    
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="less" scoped>
@import "@/assets/theme.less";

#footer {
    background: white;
}

#flex-container {
    justify-content: space-around;
    width: 80%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}

.icon-credits {
    justify-content: space-around;
}

hr::before,
hr::after,
hr {
    border-color: @brand-color-sister;
}

h3, h4, ul {
    font-family: 'Noto Sans', sans-serif;
}

h3 {
    font-size: 1.5em;
}

h4 {
    font-size: 1.3em;
}

ul {
    font-size: 1em;
}

// From Laptop screens up
@media only screen and (min-width: 960px) {
    #flex-container {
        flex-direction: row;
        align-items: initial;
        width: 100%;
    }

    h3 {
        font-size: 1.7em;
    }

    h4 {
        font-size: 1.4em;
    }

    ul {
        font-size: 1.1em;
    }
}

// For 4k displays
@media only screen and (min-width: 2560px) {
    h3 {
        font-size: 2.1em;
    }

    h4 {
        font-size: 1.8em;
    }

    ul {
        font-size: 1.5em;
    }

    .icon-credits {
        font-size: 1.5em;
    }
}
</style>