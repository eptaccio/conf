<template>
  <div class="support size margin">
    <div class="support--block justify-content-center container column" id="sponsors">
      <div class>
        <h2 class="support--title flex-grow-1">Patrocinadores</h2>
        <h3 class="support--type flex-grow-1">Diamond</h3>
        <ul class="support--list list-style-none">
          <li class="support--item" v-for="sponsor in getSponsorByType('diamond')" :key="sponsor.id">
            <a v-bind:href="sponsor.address">
              <img class="support--image diamond" v-bind:src="require(`@/assets/images/sponsors/${sponsor.image}.png`)"
                v-bind:alt="sponsor.name">
            </a>
          </li>
        </ul>
        <h3 class="support--type flex-grow-1" v-if="getSponsorByType('silver').lenght">Silver</h3>
        <ul class="support--list list-style-none">
          <li class="support--item" v-for="sponsor in getSponsorByType('silver')" :key="sponsor.id">
            <a v-bind:href="sponsor.address">
              <img class="support--image silver" v-bind:src="require(`@/assets/images/sponsors/${sponsor.image}.png`)"
                v-bind:alt="sponsor.name">
            </a>
          </li>
        </ul>
        <div class="container align-center margin-top-50">
          <a href="/conf/pdf/mediakit.pdf" target="_blank" class="btn btn-primary btn-outline margin">Seja um
            patrocinador</a>
        </div>
      </div>
    </div>

    <div class="support--block justify-content-center container column" id="support">
      <div class>
        <h2 class="support--title flex-grow-1" v-if="support.lenght">Apoio</h2>

        <ul class="support--list list-style-none">
          <li class="support--item" v-for="supporter in support" :key="supporter.id">
            <a v-bind:href="supporter.address">
              <img class="support--image" :src="require('@/assets/images/support/' + supporter.image + '.png')" alt>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["sponsors", "support"])
  },
  methods: {
    getSponsorByType(type) {
      return this.$store.state.sponsors.filter(s => {
        return s.type === type;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/sponsor.scss";
</style>
