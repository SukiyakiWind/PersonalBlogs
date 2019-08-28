<template>
    <div id="single-blog">
      <h1>{{ blog.title  }}</h1>

      <article> Body: <br> {{ blog.content }}</article>
      <p> Author : {{blog.author}}</p>
      <ul> Categories :
        <li v-for="category in blog.categories">{{category}}
        </li>
      </ul>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "single-blog",
      data(){
          return{
            id:this.$route.params.id,
            blog:{},
          }
      },
      created(){
          // this.$http.get('/posts.json/' + this.id)
          axios.get('https://my-blog-12f49.firebaseio.com/posts/' + this.id + ".json")
            .then((data) => {
              // console.log(this.id);
              console.log(data.data);
              this.blog = data.data;
            })
      }
    }
</script>

<style scoped>
  *{
    margin-top: 20px;
  }
  li{
    margin-left: 20px;
    list-style: none;
    display: inline;
  }
  #single-blog{
    max-width: 800px;
    margin: 0 auto;
    background: #eeeeee;
    padding: 20px;
  }
</style>
