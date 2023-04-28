<template>
  <!-- 跳转子应用 -->
  <div class="test">
    <router-link to="/hello">点击打开父应用页面</router-link>
    <router-link to="/sub_app/">点击打开子应用页面</router-link>
  </div>
</template>

<script>

export default {
  name: 'Demo',
}
</script>

<style scoped>
.test {
  text-align: center;
}
a + a {
  margin-left: 30px;
}
</style>