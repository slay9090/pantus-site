<template>
  <header>
    <VueNavTop />
    <VueNav />
    <VueNavBottom />
    <nav-mobile />
    <nav-mobile-avto />
    <nav-mobile-about />
  </header>
</template>

<script>
import VueNavTop from "@/components/header/header-nav/navtop";
import VueNavBottom from "@/components/header/header-nav/nav-bottom";
import VueNav from "@/components/header/header-nav/index";
import NavMobile from "@/components/header/header-nav/mobule/nav-mobile-index";
import NavMobileAvto from "@/components/header/header-nav/mobule/nav-mobile-avto";
import NavMobileAbout from "@/components/header/header-nav/mobule/nav-mobile-about";
export default {
  name: "TheHeader",
  components: {
    NavMobileAbout,
    NavMobileAvto,
    NavMobile,
    VueNavTop,
    VueNav,
    VueNavBottom,
  },
};
</script>
