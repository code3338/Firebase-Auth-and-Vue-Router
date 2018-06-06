<template>
  <div id="app">
   <p class="msg">{{msg}}</p><br>
   <div class="movieDiv"> <br>
     Title:<input v-model="movie.Title"><br><br>
     Year:<input v-model="movie.year"><br><br>
     Description:<input v-model="movie.description"><br><br>
     <button v-on:click="addMovie()">add</button>
   </div>
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
      msg:"Add New Movie",
      name:"testing name",
      userId:"testing id",
      movie: {
        Title:"",
        year:0 ,
        description:""
      }
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
          this.$bindAsArray("users",db.ref("users/" + this.userId + "/movies"))
        }
    })
  },
  methods: {
    addMovie() {
      console.log(this.movie);
      db.ref("/users/" + this.userId + "/movies/").push(this.movie);
      this.movie.Title="",
      this.movie.year=0,
      this.movie.description=""
    }
  }
 }
/*Firebase real-time*/
</script>
<style>
.msg {
  font-size:28px;
  font-weight:bold;
}

.movieDiv {
  border:solid 2px blue;
  width:350px;
  margin:auto;
  margin-bottom:15px;
}
</style>
