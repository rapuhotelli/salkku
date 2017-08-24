<template>
  <div class="teams-grid card">
    <!-- First row -->
    <div class="card-header box labels-title">Team</div>
    <div class="card-header box week1-title">Week X</div>
    <div class="card-header box week2-title">Week x+1</div>
    <div class="card-header box actions-title">Actions</div>
    <!-- Second row -->
    <template v-for="(team, tei) in teams">
      <div class="box">{{team.name}}</div>
      <div class="box">
        <Badge
          v-for="(task, tai) in team.tasks"
          v-bind:item="task"
          v-bind:index="tai"
          v-bind:key="task.team"
        ></Badge>
      </div>
      <div class="box"></div>
      <div class="box">x</div>
    </template>
    <!--
    <div class="box labels-team2">Whee</div>
    <div class="box week1-team2"></div>
    <div class="box week2-team2"></div>
    <div class="box actions-team2">x</div>
    -->
  </div>
</template>

<script>
import Badge from '@/components/Badge';

const teams = [
  {
    name: 'Bulldozers',
    tasks: [
      { person: 'vermaru', type: 'primary', text: 'Im working on this thing' },
      { person: 'vermaru', type: 'primary', text: 'Also this' },
      { person: 'extmade01', type: 'primary', text: 'Yeah!Im an external lol' },
    ],
  },
  {
    name: 'Unicorns',
    tasks: [
      { person: 'lahetju', type: 'primary', text: 'I hate everyone and everyone hates me' },
      { person: 'lahetju', type: 'primary', text: 'god fucking damn it' },
    ],
  },
];

export default {
  name: 'teams',
  data() {
    return {
      teams,
    };
  },
  components: {
    Badge,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>;
@import '~bootstrap/scss/_card.scss';

.teams-grid {
  //padding: $grid-gutter-width;
  display: grid;

  grid-template-columns: 15% 35% 35% 15%;
  /*
  // 4 columns
  grid-template-columns: [teams-column] 15% [week1-column] 35% [week2-column] 35% [actions-column] 15% [columns-end]
  // 3 rows
  grid-template-rows: [title-row] auto [team1-row] auto [team2-row] auto [rows-end];
  */
}
.box {
  /*
  background-color: black;
  color: white;
  */
  border-left: 1px solid $gray-300;
  border-bottom: 1px solid $gray-300;
  padding: $grid-gutter-width/2;
}
/*
.labels-title {
  grid-column: teams-column / columns-end;
  grid-row: title-row;
}
*/

</style>
