<template>
  <div id="show-blog">
    <h1>My Blog</h1>
    <input type="text" v-model="search" placeholder="search title">
    <div v-for="blog in filteredBlog" class="single-blog">
      <router-link v-bind:to="'/blog/'+ blog.id">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
    export default {
      name: "show-blog",
      data(){
        return{
          blogs:[],
          search:""
        }
      },
      created() {
        axios.get('https://my-blog-12f49.firebaseio.com/posts.json')
          .then(function (data) {
            // console.log(data);
            return data.data;
          })
          .then((data)=>{
            let blogsArray = [];
            for(let key in data){
              console.log(key);
              data[key].id = key;
              blogsArray.push(data[key]);
            }
            this.blogs = blogsArray
            // this.blogs = blogsArray.splice(0,10);
          })
      },
      computed:{
        filteredBlog:function () {
          return this.blogs.filter((blog) => {
              return blog.title.match(this.search);
            })
        }
      }
    }
</script>

<style scoped>
  #show-blog{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #eeeeee;
  }
  h1,input[type="text"]{
    margin: 10px 20px 10px;
  }
  a{
    text-decoration: none;
    padding: 16px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

</style>
