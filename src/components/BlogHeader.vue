<template>
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>Blog</router-link>
          <router-link to="/add" exact>Write Blog</router-link>
          <a href="https://sukiyakiwind.github.io/Sukiyaki-sGame/Sukiyaki'sGreedSnakev3.0.html"
          >Game</a>
          <router-link to="/showprogress" exact>Progress</router-link>
          <router-link to="/immortal">Dota2Immortal</router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
    export default {
        name: "BlogHeader",
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
    text-align: center;
    margin: 0;
  }
  li{
    margin: 0 10px;
    display: inline-block;
  }
  a{
    color: #fff;
    text-decoration: none;
    padding: 16px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }
  nav{
    width: 100%;
    position: fixed;
    background: crimson;
    padding: 30px 0;
    margin-bottom: 20px;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
  }
</style>
