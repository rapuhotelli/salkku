<template>
    <header class="header">
      <h1>swag</h1>
      <nav class="nav nav-fill">
        <router-link to="items" class="nav-item nav-link">Items</router-link>
        <router-link to="teams" class="nav-item nav-link">Teams</router-link>
        <router-link to="stats" class="nav-item nav-link">Stats</router-link>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'items',
  data() {
    return {
      mouseover: (e) => {
        console.log(e.target);
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~bootstrap/scss/_nav.scss';
.header {
  background-color: $blue;
  color: white;
  padding: 0;
  box-shadow: 0 0 10px 0 black;
}
a.nav-link {
  color: white;
  // border: 1px solid white;
  &:first-child, &:last-of-type {
    border-right: 0;
    border-left: 0;
  }
  background-color: $cyan;
}

.router-link-active {
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.4);
  z-index: 1;
}

#swag {
  height: 100%;
}
</style>
