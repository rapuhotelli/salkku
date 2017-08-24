<template>
  <div class="teams-grid">
    <!-- First row -->
    <div class="box labels-title">Team</div>
    <div class="box week1-title">Week X</div>
    <div class="box week2-title">Week x+1</div>
    <div class="box actions-title">Actions</div>
    <!-- Second row -->
    <div class="box labels-team1">Woo</div>
    <div class="box week1-team1"></div>
    <div class="box week2-team1"></div>
    <div class="box actions-team1">x</div>
    <!-- Third row -->
    <div class="box labels-team2">Whee</div>
    <div class="box week1-team2"></div>
    <div class="box week2-team2"></div>
    <div class="box actions-team2">x</div>
    <!-- Fourth row -->
  </div>
</template>

<script>
export default {
  name: 'teams',
  data() {
    return {
      msg: 'Teams page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.teams-grid {
  padding: $grid-gutter-width;
  display: grid;
  grid-gap: 1px;
  //grid-template-columns: 100px 100px 100px
  // 4 columns
  grid-template-columns: [teams-column] 15% [week1-column] 35% [week2-column] 35% [actions-column] 15% [columns-end]
  /*
  // 3 rows
  grid-template-rows: [title-row] auto [team1-row] auto [team2-row] auto [rows-end];
  */
}
.box {
  background-color: black;
  color: white;
  padding: $grid-gutter-width/2;
}
/*
.labels-title {
  grid-column: teams-column / columns-end;
  grid-row: title-row;
}
*/

</style>
