<template>
  <div class="items-grid">
    <div v-for="(item, index) in items" :key="index" class="card">
      <h4 class="card-header">{{item.name}}</h4>
      <div class="card-body">
        <p v-for="comment in item.comments" v-html="comment" class="card-text"></p>
      </div>
      <div class="card-footer">
        <a v-for="link in item.links" v-html="link" class="card-link"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'items',
  data() {
    return {
      msg: 'Items page',
      items: [
        {
          name: 'Project XR Slim Large White',
          comments: [
            'Never assume malice when it could be explained by incompetence.',
            'In case of emergency, call Donald Duck: 04012345678. If you want a cookie, drop your pants',
          ],
          links: [
            '<a href="https://jira.com">JIRA</a>',
            '<a href="https://bitbucket.org">Code repository</a>',
          ],
        },
        {
          name: 'Mountain Dew',
          comments: ['There\'s so much sugar I can\'t deal', 'It\'s gonna be YUGE.'],
          links: [
            '<a href="https://bitbucket.org">Code repository</a>',
          ],
        },
        {
          name: 'Project XR Slim Large White',
          comments: [
            'Never assume malice when it could be explained by incompetence.',
            'In case of emergency, call Donald Duck: 04012345678. If you want a cookie, drop your pants',
          ],
          links: [
            '<a href="https://jira.com">JIRA</a>',
            '<a href="https://bitbucket.org">Code repository</a>',
          ],
        },
        {
          name: 'Mountain Dew',
          comments: ['There\'s so much sugar I can\'t deal', 'It\'s gonna be YUGE.'],
          links: [
            '<a href="https://bitbucket.org">Code repository</a>',
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~bootstrap/scss/_card.scss';

.items-grid {
  display: flex;
  flex-flow: row wrap;
  margin-top: $grid-gutter-width;
  justify-content: center;
}
.card {
  padding: 0;
  flex: 0 1 100%;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: $grid-gutter-width;
  @include media-breakpoint-up(xs) {
    flex-basis: 100%;
  }
  @include media-breakpoint-up(sm) {
    flex-basis: 48%;
  }
  @include media-breakpoint-up(md) {
    flex-basis: 31%;
  }
  @include media-breakpoint-up(lg) {
    flex-basis: 23%;
  }
}

</style>
