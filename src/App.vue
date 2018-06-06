<template>
  <div id="app">
    <img src="./assets/movie.jpg" class="movieImg">
    <h1>{{msg1}}</h1>
    <h2>{{msg2}}</h2>
    <div>
      <img src="./assets/logo.png" class="subImg">
      <img src="./assets/firebaseLogo.png" class="subImg">
    </div>
    <router-link to="/movielist" class="link">List of movies</router-link>
    <router-link to="/addmovie" class="link">Add new movie</router-link>
    <router-link to="/updatemovie" class="link">Update movies</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
 /*Directions
 1. We need to install in command line:
 npm install --save firebase
 2. npm install --save firebase firebaseui
 3. copy and past config object in a file within a utils folder that we create in src folder.
 4. in Login Page (this iw here we run our authui )
 5. In index.html file add <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.0.0/firebaseui.css" /> to style the google button. Instead of using the above cdn, can also use
 import "firebaseui/dist/firebaseui.css" at top of script in Login.vue script to import the css file. This helps us to format the google button to look right.
 6. To get the google button, in Login.vue input mounted method. Add this div to the top: <div id="firebaseui-auth-container"></div>
 7. Import modules needed at top of scripts.
 8.Go to loggedin.vue and import import firebase from "firebase"
 */
export default {
  name: 'app',
  data () {
    return {
      msg1: 'Movies App',
      msg2: '{FirebaseUI Auth + Vue router)'
    }
  }
}
</script>

<style>
.subImg {
  width:100px;
  margin:auto;
  margin-bottom:50px;
}

.link {
  font-size:20px;
  margin-left:10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style> -->
