<template lang="html">
  <div class="">
    <header class="bg-header" id="home">
      <div class="header">
        <menuFixed />

        <div class="size margin">
          <div class="header--block container align-center">

            <div class="header--block--intro container wrap">
              <div class="header--block--text">
                <h1 class="intro-text">
                  <span>Dev</span>
                  <span>Paraná</span>
                  <span>Conf 2019</span>
                </h1>
                <div class="intro-message margin-top-40">
                  <div>
                    De <span>pessoas</span>
                  </div>
                  <div>
                    Para <span>pessoas</span>
                  </div>
                </div>

              </div>

              <div class="header--block--date container column">
                <div class="box-data container column margin-bottom-40">
                  <span class="span-uppercase">Localização</span>
                  <span class="font-span">Unicesumar - Maringá PR</span>
                </div>

                <div class="box-data container column margin-bottom-40">
                  <span class="span-uppercase">DATA</span>
                  <span class="font-span">03 de agosto</span>
                </div>

                <div class="box-data container column">
                  <router-link to="#tickets" class="btn btn-lg btn-primary btn-fit">
                    Comprar tickets
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <countdown :time="time" :interval="100">
            <template slot-scope="props">
              <div class="header--block--days container wrap">
                <div class="box-data box-1 container column align-center">
                  <span class="font-strong">{{ props.days }}</span>
                  <span class="span-uppercase">DIAS</span>
                </div>
                <div class="box-data box-2 container column align-center">
                  <span class="font-strong">{{ props.hours }}</span>
                  <span class="span-uppercase">HRS</span>
                </div>
                <div class="box-data box-3 container column align-center">
                  <span class="font-strong">{{ props.minutes }}</span>
                  <span class="span-uppercase">MINS</span>
                </div>
                <div class="box-data box-4 container column align-center">
                  <span class="font-strong">{{ props.seconds }}</span>
                  <span class="span-uppercase">SEGS</span>
                </div>
              </div>
            </template>
          </countdown>
        </div>

      </div>
    </header>
  </div>
</template>

<script>
import menuFixed from "@/components/menu";

export default {
  data: function() {
    let now = new Date();
    let eventDate = new Date(2019, 7, 3, 8);

    return {
      time: eventDate - now
    };
  },
  components: {
    menuFixed
  }
};
</script>

<style lang="scss" scoped>
.bg-header {
  background: url("~/assets/images/header.svg"), url("~/assets/images/header-bg.svg");
  background-position: 90% 100%, top center;
  background-size: 600px, contain;
  background-repeat: no-repeat;
  transition: 0.3s;
  @media (max-width: 768px) {
    background-position: 40vw 50%, top left;
    background-size: 100vw, 800px;
  }
}

.header {
  min-height: 100vh;
  margin-bottom: 80px;
}

.header--block {
  min-height: calc(100vh - 60px - 200px);
  padding: 40px 0;
}

.header--block--days {
  height: 200px;

  .box-data {
    width: 25%;
    font-size: 64px;
    background: $color-2;
  }

  .box {
    &-1 {
      background: $color-1;
      background: url("~/assets/images/box-1.svg"), $color-1;
      background-position: center center;
      background-size: cover;
      color: $color-4;
      .span-uppercase {
        color: $color-white;
      }
    }
    &-2 {
      background: $color-3;
      background: url("~/assets/images/box-2.svg"), $color-3;
      background-position: center center;
      background-size: cover;
      color: $color-1;
      .span-uppercase {
        color: $color-white;
      }
    }
    &-3 {
      background: $color-1;
      background: url("~/assets/images/box-3.svg"), $color-1;
      background-position: center center;
      background-size: cover;
      color: $color-white;
      .span-uppercase {
        color: $color-white;
      }
    }
    &-4 {
      background: $color-3;
      background: url("~/assets/images/box-4.svg"), $color-3;
      background-position: center center;
      background-size: cover;
      color: $color-white;
      .span-uppercase {
        color: $color-white;
      }
    }
  }
  @media (max-width: 768px) {
    height: 100px;
    .span-uppercase {
      font-size: 12px;
    }
    .box-data {
      font-size: 24px;
    }
  }
}

.header--block--intro {
  display: flex;
  align-items: flex-end;
  margin: -40px;

  > div {
    padding: 40px;
  }
}

.intro-text {
  span {
    display: block;
  }
}

.header--block--date {
  .span-uppercase {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: $color-1;
  }
  .font-span {
    line-height: 1.5;
    font-size: 24px;
  }
}

.header--block--text,
.header--block--date {
  width: 50%;
}

.intro-message {
  font-size: 40px;
  color: $color-1;
  line-height: 1.5;

  span {
    background: $color-1;
    color: $color-white;
  }
}

@media (max-width: 768px) {
  .header--block--text,
  .header--block--date {
    width: 100%;
  }
}
</style>
