<template lang="html">
  <div>
    <socialFixed/>
    <headerTop/>
    <call4papers />
    <speakers />
    <buytickets />
    <schedule />
    <tickets />
    <location />
    <contact />
    <div class="bg-footer">
      <sponsors />
      <footerBottom/>
    </div>
  </div>
</template>

<script>
import socialFixed from "@/components/social-fixed";
import headerTop from "@/components/header";
import schedule from "@/components/schedule";
import buytickets from "@/components/buytickets";
import call4papers from "@/components/call4papers";
import speakers from "@/components/speakers";
import tickets from "@/components/tickets";
import location from "@/components/location";
import contact from "@/components/contact";
import sponsors from "@/components/sponsors";
import footerBottom from "@/components/footer";

export default {
  components: {
    socialFixed,
    headerTop,
    call4papers,
  //  schedule,
   // buytickets,
    speakers,
    tickets,
    location,
    contact,
    sponsors,
    footerBottom
  }
};
</script>

<style lang="scss">
.sponsors-support--bg {
  background: $color-white;
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
