<template>
  <div class="card uk-flex uk-flex-center uk-margin-medium-top ">
    <div class="uk-card uk-card-small">
      <div class="uk-card-body uk-text-center">
        <div class="uk-card-header">
          <div class="uk-width-1-1">
            <img
              :src='imageSource'
              alt="Project Manager"
              width="128px"
              height="128px"
              :style="bgcolor"
            />
          </div>
          <h3 class="uk-text-center uk-width-1-1">{{header}}</h3>
          <hr class="uk-divider-icon" />
        </div>
        <p>
          {{content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    imageSource: String,
    header: String,
    content: String,
    bgcolor: String
  },
};
</script>

<style lang="less" scoped>
@import "@/assets/theme.less";

.uk-card {
  background: white;
  width: 80%;
  border-bottom: 1px solid rgba(243, 102, 91, 0.75);
}

.uk-card-header img {
  border-radius: 15px;
  min-height: 128px;
}

.uk-card-header h3 {
  font-size: 1.2em;
  font-family: 'Noto Sans', sans-serif;
  color: @text-color;
}

.uk-card-body p {
  font-size: 1em;
  font-family: 'Noto Sans', sans-serif;
  color: @text-color;
}

hr::before,
hr::after,
hr {
  border-color: @brand-color-sister;
}

// Behaviour for different screens

@media only screen and (min-width: 1920px) {
  .uk-card-header img {
    width: 256px;
    height: 256px;
  }
}

// Tablet size

@media only screen and (min-width: 640px) {
  .uk-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.16);
  }

  .uk-card-header img {
      box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 24px 0 rgba(0, 0, 0, 0.28);
  }

  .uk-card-header h3 {
    font-size: 1.5em;
  }
}

// Laptop screens -- HD / FHD

@media only screen and (min-width: 960px) {
  .uk-card-header h3 {
    font-size: 1.8em;
  }

  .uk-card-body p {
    font-size: 1.2em;
  }
}

// 4k screens

@media only screen and (min-width: 2560px) {
  .uk-card-header h3 {
    font-size: 2.3em;
  }

  .uk-card-body p {
    font-size: 1.5em;
  }
}

</style>
