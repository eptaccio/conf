<template lang="html">
  <div class="social-fixed container">
    <div class="">
      <a href="http://slack.devparana.org/" target="_blank"><i class="fab fa-slack"></i></a>
      <a href="http://www.facebook.com/sharer.php?u=https://www.devparana.org/conf/" target="_blank"><i class="fab fa-facebook-square"></i></a>
      <a href="https://twitter.com/share?url=https://www.devparana.org/conf/;text=DevParaná Conference 2019. #devpr18k" target="_blank"><i class="fab fa-twitter-square"></i></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.social-fixed {
  text-align: center;
  position: fixed;
  bottom: 50%;
  right: -36px;
  transform: translateY(-50%) rotate(90deg);
  z-index: 10;
  a {
    color: $color-white;
    transition: 0.3s;
    margin: 0 16px;
    i {
      font-size: 24px;
    }
    &:hover {
      color: $color-1;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
}
</style>
