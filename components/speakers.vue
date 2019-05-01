<template>
  <div class="speakers">
    <div class="size-padding margin content" id="speakers">
      <div class="relative">
        <div class="box-title">
          <h2>Palestrantes Confirmados</h2>
        </div>

        <div class="speakers-container container wrap">
          <div
            class="speakers--item"
            v-for="speaker in speakers"
            :key="speaker.id"
            :class="{ active : speakerSelected === speaker.id }"
          >
            <div
              class="speakers--item--content"
              @click="speakerSelected = speaker.id"
              v-on:mouseover="speakerSelected = speaker.id"
            >
              <div class="speakers--item--content--image">
                <img
                  :src="require('@/assets/images/speakers/' + speaker.image + '.jpg')"
                  width="100%"
                >
              </div>
              <div class="speakers--item--content--info">
                <span class="content--info-title">{{speaker.name}}</span>
                <span>{{speaker.role}}</span>
                <span>{{speaker.description}}</span>
                <ul class="list-style-none content--info-social container align-items-center">
                  <li v-if="speaker.linkedin">
                    <a v-bind:href="speaker.linkedin" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li v-if="speaker.github">
                    <a v-bind:href="speaker.github" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li v-if="speaker.facebook">
                    <a v-bind:href="speaker.facebook" target="_blank">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li v-if="speaker.instagram">
                    <a v-bind:href="speaker.instagram" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li v-if="speaker.twitter">
                    <a v-bind:href="speaker.twitter" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      speakerSelected: 0
    };
  },
  computed: {
    ...mapState(["speakers"])
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/components/speakers.scss";
</style>
