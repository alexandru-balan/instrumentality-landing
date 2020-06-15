<template>
  <!-- Main component wrapper -->
  <div
    class="navigation-component"
    uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
  >
    <!-- Real navbar container -->
    <nav uk-navbar class="uk-navbar-container">
      <!-- This part will be placed on the left side -->
      <div class="uk-navbar-left">
        <div>
          <router-link to="/" class="uk-navbar-item uk-logo">
            <img
              src="@/assets/Logo/Instrumentality-Logo.svg"
              alt="The Instrumentality Project Logo"
            />
            <span class="uk-margin-left">Instrumentality</span>
          </router-link>
        </div>
      </div>

      <div class="uk-navbar-center">
        <ul class="uk-navbar-nav">
          <li>
            <router-link to="/updates">Team updates</router-link>
          </li>
          <li>
            <a href>Features</a>
          </li>
          <li>
            <a href>For developers</a>
          </li>
        </ul>
      </div>

      <!-- This part will be displayed on the right side -->
      <div class="uk-navbar-right">
        <div>
          <ul class="uk-navbar-nav">
            <li>
              <a href>Login</a>
            </li>
            <li>
              <a href>Signup</a>
            </li>
            <li id="burger-menu">
              <button
                class="uk-button uk-button-default uk-button-large"
                type="button"
                uk-toggle="target: #offcanvas-nav-primary"
              >
                <font-awesome-icon :icon="['fa', 'bars']" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- This part describes the off-canvas navbar that appears only on mobile devices -->
    <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true; flip: true;">
      <div class="uk-offcanvas-bar uk-flex uk-flex-comlumn uk-flex-center">
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
          <li>
            <a href>Team updates</a>
          </li>
          <li>
            <a href>Features</a>
          </li>
          <li>
            <a href>For developers</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href>Login</a>
          </li>
          <li>
            <a href>Signup</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="less" scoped>
@import "../assets/theme.less";

.uk-navbar-container {
  background-color: white;
}

.uk-offcanvas-bar {
  background-color: white;
}

.uk-navbar-nav li a,
.uk-offcanvas-bar .uk-nav li a {
  color: @text-color;
  font-size: 1em;
  font-family: "Noto Sans", sans-serif;
  text-decoration: none;
  position: relative;
}

.uk-navbar-nav li a::before,
.uk-offcanvas-bar .uk-nav li a::before {
  // This is adding a nice underline effect
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: @brand-color;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.uk-navbar-nav li a:hover::before,
.uk-offcanvas-bar .uk-nav li a:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.uk-navbar-nav li a:hover,
.uk-offcanvas-bar .uk-nav li a:hover {
  color: @brand-color;
}

.uk-logo {
  font-size: 1.25em;
}

.uk-logo img {
  height: 1.25em;
  width: auto;
}

.uk-logo span {
  color: @text-color;
}

.uk-logo span:hover {
  color: @brand-color;
}

.uk-offcanvas-bar .uk-nav li hr {
  border-color: @brand-color-sister;
  margin-top: 1.5em;
}

// As display size goes up...

// What happens with small and medium devices -- Phones & Tablets
@media only screen and (max-width: 960px) {
  .uk-navbar-right li,
  .uk-navbar-center {
    display: none;
  }

  .uk-offcanvas-bar .uk-nav li a {
    font-size: 1.3em;
    font-family: "Noto Sans", sans-serif;
  }

  #burger-menu {
    visibility: visible;
    display: block;
    font-size: 1.5em;
    text-decoration: none;
  }
}

// What happens with medium sized devices -- Tablets
@media only screen and (min-width: 640px) {
  .uk-logo {
    font-size: 1.5em;
  }
}

// What happens with large devices -- Laptops
@media only screen and (min-width: 960px) {
  .uk-logo {
    font-size: 1.75em;
  }

  .uk-navbar-nav li a {
    font-size: 1.1em;
  }

  #burger-menu {
    display: none;
  }

  .uk-offcanvas-bar,
  .uk-navbar-container {
    background-color: rgba(255, 255, 255, 0.75) !important;
    backdrop-filter: blur(5px);
  }
}

// What happens with extra-large devices -- 4k displays
@media only screen and (min-width: 2560px) {
  .uk-logo {
    font-size: 2em;
  }

  .uk-navbar-nav li a {
    font-size: 1.4em;
  }
}
</style>