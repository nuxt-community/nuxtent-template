<template>
<section class="content-container">
  <h1 class="post-title"> {{ post.title }} </h1>
  <div class="post-content" v-html="post.content" />
</section>
</template>


<script>
export default {
  asyncData: ({ app, route }) => ({
    post: app.$content('posts').get(route.path)
  })
}
</script>

<style>
.content-container
{
  padding: 2rem 1rem;
  width: 38rem;
  margin: 0 auto
}

.post-title
{
  font-size: 2.5rem;
  margin-bottom: 1rem
}

</style>
