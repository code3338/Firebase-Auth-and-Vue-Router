<template>
  <div id="app">
    
  </div>

</template>

<script>
/*Note authentication database is our users database.
Can update structure of data in database by usin userid in authentication section. Can have multiple users. Change users in firebase to be*/
import axios from "axios";
import firebase from "firebase"
import "firebaseui/dist/firebaseui.css" /*import css file can be found in the firebaseui module. All we need to do is impor tthe stylesheet here.*/
import db from"../utils/firebaseConfig.js";
export default {
  name:"loggedin",
  data () {
    return {
      msg:"Welcome to your profile",
      name:"testing name",
      email:"testing email",
      userId:"testing id"
    }
  },
  firebase: {
    // users: db.ref("users") /*Going to pull in everything under users.
    /*Now can only pull in data specific to the id. In this case emporer's new groove, and Krook's new goorve*/
    // users: db.ref("users/rUROnBE6VPMGKms0PJDoLjduHLd2")
    users: db.ref("users")
  },
  created() {
    /*in Class exercise: curent user, name and email address, and ovewrite what we have above. Set name and email in data object of. user id and email
    Note: run static server if not using vue. If using vue run npm run dev in command prompt*/
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          /*The above satement is saying if a user.*/
          /*We use an arrow function instead of function() b/c when we refer to this.name, this is looking at this function instead of the data, but if we use the arrow function we can fix this. */
          this.name = firebase.auth().currentUser.displayName,
          this.email = firebase.auth().currentUser.email,
          this.userId = firebase.auth().currentUser.uid

          /*BindsArray*/
          // this.users = db.ref("users/" + this.uid)
          /*$bindAsArry comes from vueFire, does not use jQuery, comes from vueFire*/
          /*CRUD: The four main operations need to do to a database in order to have a full web database. CRUD with firebase.
          CRUD(Create (insert from mysql),read (select from mysql), update(patch from mysql), delete)))*/
          this.$bindAsArray("users",db.ref("users/" + this.userId))
        }
    })
  },
  methods: {
    save() {
      let user = firebase.auth().currentUser;
      user.updateProfile({
        displayName:this.name
      })
      console.log(name);
    }
  }
 }
 /*In authentication section of firebase, we cannot chagne the structure of it. Authentication section is its own database. Database section in console, we can change it. It is its own database as well.*/
</script>
