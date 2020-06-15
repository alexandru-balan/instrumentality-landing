<template>
    <div id="typed-header" class="uk-section uk-section-small">
        <h1 id="typewriter"></h1>
        <h2 id="subtitle" class="uk-animation-slide-bottom-medium">Your project management software with <span>superpowers!</span></h2>
    </div>
</template>

<script>
import Typewriter from "typewriter-effect/dist/core";

export default {
    name: 'TypedHeader',

    mounted() {
        var typewriter = new Typewriter ('#typewriter', {
            loop: false,
            delay: 75,
        });

        if (window.screen.width < 740) {
            typewriter.typeString("Instrumentality").start();
        }
        else {
            typewriter.typeString('To-do')
            .deleteAll()
            .typeString('Projects')
            .deleteAll()
            .typeString('Hobbies')
            .deleteAll()
            .typeString('Instrumentality')
            .start();
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/theme.less";

h1#typewriter {
    font-family: 'Cantarell', sans-serif;
    font-size: 2em;
    color: @text-color-dark;
}

#subtitle {
    font-family: 'Cantarell', sans-serif;
    color: @text-color-dark;
    font-size: 1.5em;
}

#subtitle span {
    color: @brand-color-dark;
    font-weight: bold;
}

// As screen size goes up...

// What happens with Tablets
@media only screen and (min-width: 640px) {
    h1#typewriter {
        font-size: 2.2em;
    }
}

// What happens with laptops
@media only screen and (min-width: 960px) {
    h1#typewriter {
        font-size: 3.2em;
    }

    #subtitle {
        font-size: 2em;
    }
}

// 4k displays
@media only screen and (min-width: 2560px) {
    h1#typewriter {
        font-size: 3.6em;
    }

    #subtitle {
        font-size: 2.4em;
    }
}

</style>