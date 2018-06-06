<template>
  <div id="app">
   <p class="msg">{{msg}}</p><br>
   <div class="movieDiv"><br>
     <p>Movie Id: {{users['.key']}}</p><br>
     <p>Title: <input v-model="users.Title"></p><br>
     <p>Year: <input v-model="users.year"></p><br>
     <p>Description: <input v-model="users.description"></p><br>
     <button v-on:click="save(users['.key'], users.Title, users.year, users.description)">update</button>
   </div><br>
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
      msg:"Update Movie",
      name:"testing name",
      userId:"testing id",
      title:"testing title",
      year:0,
      description:"",
      key:"testing key"
    }
  },
  firebase: {
    users: db.ref("users") /*firebase bindings comes from this firebase object here.*/
  },
  created() {
    /*We have to run the below in created as we have to wait for maybe firebase and/or firebaseui teacher believes loads, and then we run the below code. The code below brings data from firebase database over to DOM. On AuthStateChange is a built in event listener for firebase.*/
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.name = firebase.auth().currentUser.displayName,
          this.userId = firebase.auth().currentUser.uid,
          this.$bindAsObject("users",db.ref("users/" + this.userId + "/movies/" + this.$route.params.id))
        }
    })
  },
  methods: {
    save(key,title, year, description) {
      let user = firebase.auth().currentUser;
      let users = db.ref("/users/" + this.userId + "/movies/" + key)
      console.log(users);
      users.update({
        Title:title,
        year:year,
        description:description
      })
      console.log(name);
    }
  }
 }

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
