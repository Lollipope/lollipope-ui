<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <l-comp />
    <l-card
      imgSrc="001.jpg"
      summary="本路线精选程序员必修的计算机基础核心知识，有序打基础职场走更远。"
    >
      <template v-slot#footer>
        <div class="footer">
          <div class="level">中级 * 544报名</div>
          <div class="price">¥ 343.20</div>
        </div>
      </template>
    </l-card>
    <br />
    <br />
    <l-card
      width="360"
      imgHeight="90"
      imgSrc="002.png"
      summary="Google工程师亲授，从学习语言语法特性到函数式编程、并发编程等等。理论与实战结合，帮助快速掌握Go语言。"
    />
    <br />
    <br />
    <l-card width="360" imgHeight="90" imgSrc="002.png">
      Google工程师亲授，从学习语言语法特性到函数式编程、并发编程等等。理论与实战结合，帮助快速掌握Go语言。
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4 步骤 * 6门客</div>
          <div class="price">23233232收藏</div>
        </div>
      </template>
    </l-card>

    <div style="margin-bottom: 20px;">
      <l-button>默认按钮</l-button>
      <l-button type="primary" disabled>主要按钮</l-button>
      <l-button type="success">成功按钮</l-button>
      <l-button type="info">信息按钮</l-button>
      <l-button type="warning">警告按钮</l-button>
      <l-button type="danger">危险按钮</l-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}

.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
