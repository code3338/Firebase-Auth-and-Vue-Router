<template>
 <div id="app">
    <p><b>Name:</b> {{name}}</p>
    <p><b>Email:</b> {{email}}</p>
    <p><b>Id:</b> {{userId}}</p><br>
    <a href="/" v-on:click="signOut">Sign Out</a><br><br>
    <p class="msg">{{name}}'s {{msg}}</p><br>
    <div v-for="movie in users" class="movieDiv">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Movie Id:{{movie['.key']}}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p><b>Title:</b>{{movie.Title}}</p>
            <p><b>Year:</b> {{movie.year}}</p>
            <p><b>Description:</b> {{movie.description}}</p>
          </div>
        </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <a v-on:click="deleteBtn(movie['.key'])" class="button is-danger is-outlined card-footer-item" >delete</a>
        </div>
        <a class="card-footer-item">
          <router-link :to="{path:'/updatesinglemovie/' + movie['.key']}" class="button is-primary is-focused card-footer-item">update
          </router-link>
        </a>
      </footer>
     </div>
   </div>
</div>

   <!-- ..................................-->

   <!-- <p><b>Name:</b> {{name}}</p>
   <p><b>Email:</b> {{email}}</p>
   <p><b>Id:</b> {{userId}}</p><br>
   <a href="/" v-on:click="signOut">Sign Out</a><br>
   <p class="msg">{{msg}}</p><br>
   <div v-for="movie in users" class="movieDiv">
     <p><b>Movie Id:</b> {{movie['.key']}}</p>
     <p><b>Title:</b> {{movie.Title}}</p>
     <p><b>Year:</b> {{movie.year}}</p>
     <p><b>Description:</b> {{movie.description}}</p>
     <button v-on:click="deleteBtn(movie['.key'])">delete</button>
     <button>
       <router-link :to="{path:'/updatesinglemovie/' + movie['.key']}" class="linkBtn">update
       </router-link>
    </button>
   </div><br> -->
  </div>
</template>

<script>
import axios from "axios";
import firebase from "firebase"
import "firebaseui/dist/firebaseui.css"
import db from"../utils/firebaseConfig.js";
export default {
  name:"loggedin",
  data () {
    return {
      msg:"Movie List",
      name:"testing name",
      userId:"testing id",
      email:"testing email",
      title:"testing title",
      year:0,
      description:""
    }
  },
  firebase: {
    users: db.ref("users")
  },
  created() {
    /*We have to run the below in created as we have to wait for maybe firebase and/or firebaseui teacher believes loads, and then we run the below code. The code below brings data from firebase database over to DOM. On AuthStateChange is a built in event listener for firebase.*/
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.name = firebase.auth().currentUser.displayName,
          this.userId = firebase.auth().currentUser.uid,
          this.email = firebase.auth().currentUser.email,
          this.$bindAsArray("users",db.ref("users/" + this.userId + "/movies"))
        }
    })
  },
  methods: {
    deleteBtn(key) {
      let users = db.ref("/users/" + this.userId + "/movies/" + key)
      users.remove();
    },
    signOut() {
      firebase.auth().signOut().then(function() {
       console.log('Signed Out');
       }, function(error) {
       console.error('Sign Out Error', error);
       });
    }
  }
 }

</script>
<style scoped>

.linkBtn {
  text-decoration:none;
  color:black;
  font-size:16px;
  margin-left:5px;
}
.movieDiv {
  width:350px;
  margin:auto;
  margin-bottom:15px;
}

.msg {
  font-size:28px;
  font-weight:bold;
}
</style>
