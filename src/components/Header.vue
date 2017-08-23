<template>
    <header class="header container">
      <h1>swag</h1>
      <nav class="nav nav-fill">
        <router-link to="items" class="nav-item nav-link active" @click="prevPage()" >Items</router-link>
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
      prevPage: () => {
        alert('swag');
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  background-color: $red;
  color: white;
  padding: 0;
}
a.nav-link {
  color: white;
  border: 1px solid white;
  &:first-child, &:last-of-type {
    border-right: 0;
    border-left: 0;
  }
}

#swag {
  height: 100%;
}
</style>
