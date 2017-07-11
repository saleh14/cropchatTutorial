<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="picture.url" />
      </div>
      <div class="info">
        <span>{{ picture.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ picture.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      'picture': { key: '', url: '', info: '', created_at: '', comment: '' }
    }
  },
  mounted() {
    var filtered = this.$root.cat.filter((item) => {
      return item['.key'] === this.$route.params.id
    })
    this.picture = filtered.length > 0 ? filtered[0] : this.picture
  }
}
</script>
<style scoped>
.picture>img {
  color: #fff;
  width: 100%;
}

.info {
  text-align: right;
  padding: 5px;
  color: #555;
  font-size: 10px;
}

.comment {
  padding: 10px;
  color: #555;
}

.actions {
  text-align: center;
}
</style>
