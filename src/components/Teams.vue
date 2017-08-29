<template>
  <div class="teams-grid card">
    <!-- First row -->
    <!--<div class="card-header box labels-title">Team</div>-->

    <!--<div class="card-header box actions-title">Actions</div>-->

    <div class="box column-title-teams">Team</div>
    <!--
    <div class="box row-title-team1">team1</div>
    <div class="box row-title-team2">team2</div>-->

    <div class="box week1-title">Week {{weeks[0]}}</div>
    <div class="box week2-title">Week {{weeks[1]}}</div>
    <!--
    <div class="box column-title-actions">
      Actions
    </div>
    -->

    <template v-for="(day, i) in days">
      <div class="day box">{{ getDateString(day) }}</div>
    </template>

    <!-- Loop per team -->
    <template v-for="(team, tei) in teams">

      <div class="row-title-team box" v-bind:style="{'grid-row': (3+tei)} + ' / ' + (4+tei)">
        {{team.name}}
      </div>

      <div class="box week1-column"  v-bind:style="{
          'grid-row':  (3+tei)+' / '+(4+tei),
          'grid-column': '2 / 7'
          }"></div>

      <div class="box week2-column"  v-bind:style="{
          'grid-row': (3+tei)+' / '+(4+tei),
          'grid-column': '7 / 12'
        }"></div>

  <!--
      <template v-for="(day, i) in days">
        <div class="day box"></div>
      </template>
  -->
      <!-- Loop per issue -->
      <template v-for="(issue, index) in team.issues">
        <div class="issue-container" v-bind:style="{
          'grid-row': (3+tei)+' / '+(4+tei),
          'grid-column': getIssueTimeRange(issue.start, issue.end)
          //'grid-column': '7 / 12'
          }">
          <div>Start: {{issue.start}} </div>
          <div>End: {{issue.end}} </div>
          <Badge
            v-for="(task, tai) in issue.tasks"
            v-bind:item="task"
            v-bind:index="tai"
            v-bind:key="task.team"
          ></Badge>
        </div>
      </template>

      <!--<div class="action-box box" v-bind:style="{'grid-row': (3+tei)} + ' / ' + (4+tei)">x</div>-->
    </template>
    <!-- End loop per team -->
  </div>
</template>

<script>
import Badge from '@/components/Badge';
import utils from '@/lib/utils';
import moment from 'moment';

const teams = [
  {
    name: 'Bulldozers',
    issues: [
      {
        name: 'Yksille payment something-or-other',
        start: '2017-08-31',
        end: '2017-09-04',
        tasks: [
          { person: 'vermaru', type: 'primary', text: 'Im working on this thing' },
          { person: 'vermaru', type: 'primary', text: 'Also this' },
          { person: 'extmade01', type: 'primary', text: 'Yeah!Im an external lol' },
        ],
      },
    ],
  },
  {
    name: 'Unicorns',
    issues: [
      {
        name: 'Why are we even employed god please help us',
        start: '2017-08-29',
        end: '2017-09-8',
        tasks: [
          { person: 'lahetju', type: 'primary', text: 'I hate everyone and everyone hates me' },
          { person: 'lahetju', type: 'primary', text: 'god fucking damn it' },
        ],
      },
    ],
  },
];

const days = utils.getCurrentTenDays();
const weeks = utils.getCurrentWeekNumbers();

export default {
  name: 'teams',
  data() {
    return {
      teams,
      days,
      weeks,
    };
  },
  methods: {
    getDateString: date => moment(date).format('ddd'),
    getIssueTimeRange: utils.getIssueTimeRange,
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
  // grid-template-columns: 15% 35% 35% 15%;
  /*
  // 4 columns
  grid-template-columns: [teams-column] 15% [week1-column] 35% [week2-column] 35% [actions-column] 15% [columns-end]
  // 3 rows
  grid-template-rows: [title-row] auto [team1-row] auto [team2-row] auto [rows-end];
  */
  grid-auto-columns: 9.090909%;
}
.column-title-teams {
  grid-row: 1/3;
  grid-column: 1/2;
}
.column-title-actions {
  grid-row: 1/3;
  grid-column: 12/13;
}

.row-title-team {
  grid-column: 1/2;
}

.box {
  border-left: 1px solid $gray-300;
  border-bottom: 1px solid $gray-300;
  padding: $grid-gutter-width/2;
}

.day.box {
  //max-width: 9%;

}

.titles-grid {
  grid-column: 2/4;
  display: grid;
  grid-template-columns: repeat(10, auto);
}

.week1-title {
  grid-row: 1/2;
  grid-column: 2/7;
}
.week2-title {
  grid-row: 1/2;
  grid-column: 7/12;
}
.week1-column {
  grid-column: 2/7;
}
.week2-column {
  grid-column: 7/12;
}


/*
.labels-title {
  grid-column: teams-column / columns-end;
  grid-row: title-row;
}
*/
.issue-container {
  background-color: gray;
  opacity: 0.8;
  // grid-column: col 2 / span 2;
  // grid-row: row 2;
}

</style>


