<template>
  <span :class="type">{{text}}</span>
</template>

<script>
export default {
  name: 'badge',
  props: ['item', 'task'],
  data() {
    return {
      type: this.item.type,
      text: this.item.text,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~bootstrap/scss/_badge.scss';

</style>
