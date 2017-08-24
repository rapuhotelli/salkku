<template>
  <div id="app">
    <HeaderComponent/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header';

export default {
  name: 'app',
  data() {
    return {

    };
  },
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap-reboot.scss';
#app {
  margin-top: 0;

}
</style>

<style lang="scss" scoped>

</style>
