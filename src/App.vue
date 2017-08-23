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
      scurrentPage: 'Items',
    };
  },
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap.scss';
#app {
  margin-top: 0;

}
</style>

<style lang="scss" scoped>

</style>
