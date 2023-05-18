<template>
  <main>
    <header>
      微应用-父应用
    </header>
    <section>
      <aside>侧边栏(父)</aside>
      <main>
        <div v-if="$route.path == '/'">主应用容器</div>
        <router-view></router-view>
      </main>
    </section>
    <footer>底部(父)</footer>
  </main>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
main {
  height: 100%;
}
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  border-bottom: 1px solid #dfdfdf;
  box-sizing: border-box;
}
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  border-top: 1px solid #dfdfdf;
  box-sizing: border-box;
}
section {
  height: 80%;
  display: flex;
}
aside {
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: tb;
  flex-basis: 15%;
  border-right: 1px solid #dfdfdf;
}
section > main {
  flex: 1;
}
</style>