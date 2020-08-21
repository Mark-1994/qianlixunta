<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '约吧页面'
    }
  },
  created() {
    this.$emit('header', true);
    this.$emit('footer', true);
  }
}
</script>

<style scoped>

</style>