<template lang="html">
  <nav>
    <div class="menu--relative">
      <div class="menu">
        <div class="menu--content size margin container align-center">

          <div class="menu--content--logo flex-grow-1">
            <router-link to="#home">
              <img src="~/assets/images/logo.svg" width="100%" alt="Logo DevParaná 2019">
            </router-link>
          </div>

          <div class="menu--content--hamburger" @click="showMenu = !showMenu">
            <i class="fa fa-bars"></i>
          </div>

          <div class="menu--content--links" :class="{'menu-responsive' : showMenu}">
            <div class="menu-close" @click="showMenu = !showMenu">
              <i class="fa fa-times"></i>
            </div>
            <nav>
              <ul class="container wrap">
                <li>
                  <router-link to="#home">Página inicial</router-link>
                </li>
                <li>
                  <router-link to="#about">Sobre</router-link>
                </li>
                <li>
                  <router-link to="#speakers">Palestrantes</router-link>
                </li>
                <li>
                  <router-link to="#tickets">Ingressos e mais</router-link>
                </li>
                <li>
                  <router-link to="#location">Localização</router-link>
                </li>
                <li>
                  <router-link to="#contact">Contato</router-link>
                </li>
                <li>
                <a target="_blank" href="http://bit.ly/c4pdevpr2019">Call 4 Papers</a>

                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false
    };
  },
  mounted() {
    var scroll = new SmoothScroll('a[href*="#"]');

    let vm = this;
    var links = this.$el.querySelectorAll(".menu--content--links nav ul li a");

    window.addEventListener("scroll", function() {
      var scrollpos = window.scrollY;
      var menuClass = document.querySelector(".menu");

      scrollpos = window.scrollY;
      if (scrollpos > 600) {
        menuClass.classList.add("menu-fixed");
      } else {
        menuClass.classList.remove("menu-fixed");
      }
    });

    function closeMenu() {
      vm.showMenu = false;
      links.forEach(function(link) {
        link.classList.remove("active");
      });
    }

    links.forEach(function(link) {
      link.addEventListener("click", function() {
        closeMenu();
        link.classList.add("active");
      });
    });

    // var elm = document.querySelector('.menu--content--links')
    // var ms = new MenuSpy(elm, {
    //   threshold: -700,
    //   hashTimeout: 2000
    // })
  }
};
</script>

<style lang="scss" scoped>
$size-menu: 60px;

.menu--relative {
  position: relative;
  height: $size-menu;
  padding-top: 40px;
}

.menu {
  width: 100%;
  @keyframes showMenu {
    from {
      opacity: 0;
    }
    to {
    }
  }
  .menu--content {
    height: $size-menu;
    // padding-top: 40px;
    .menu--content--logo {
      img {
        width: 90px;
        max-width: 100%;
      }
    }

    .menu--content--hamburger {
      display: none;
      @media (max-width: 980px) {
        display: flex;
      }
    }
  }
  &.menu-fixed {
    position: fixed;
    top: 0;
    left: 0;
    animation: showMenu 0.5s backwards;
    z-index: 11;
    background: $color-4;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);

    .menu--content {
      min-height: 80px;
      padding-top: 0;
      @media (max-width: 980px) {
        background: transparent;
      }
      .menu--content--logo {
        img {
          display: block;
          width: 50px;
        }
      }
    }
  }
}

.menu--content--links {
  ul {
    list-style: none;
    li {
      margin: 10px;
      a {
        color: #fff;
        text-transform: uppercase;
        font-weight: 800;
        font-size: 14px;
        &.active,
        &:hover {
          border-bottom: 5px solid $color-1;
          padding-bottom: 10px;
        }
      }
    }
  }
  @media (max-width: 980px) {
    display: none;
  }
  .menu-close {
    display: none;
  }
  &.menu-responsive {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: 12;
    background: rgba($color-4, 0.9);
    ul li {
      margin-bottom: 30px;
      a {
        font-size: 2rem;
      }
    }
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .menu-close {
      display: flex;
      position: fixed;
      top: 20px;
      right: 20px;
    }
    animation: showMenu 0.3s backwards;
  }
}
</style>
