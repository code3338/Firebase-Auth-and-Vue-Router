"use strict"
import VueRouter from "vue-router";
import Login from "./components/Login.vue"
import LoggedIn from "./components/LoggedIn.vue"
import AddMovie from "./components/AddMovie.vue";
import MovieList from "./components/MovieList.vue";
import UpdateMovie from "./components/UpdateMovie.vue";
import UpdateSingleMovie from "./components/UpdateSingleMovie.vue";

const router = new VueRouter ({
  mode:"history", /*Allows us to hit back arrow*/
  routes: [
    {path:"/", component:Login},
    {path:"/loggedin",component: MovieList},
    {path:"/movielist",component:MovieList},
    {path:"/addmovie",component:AddMovie},
    {path:"/updatesinglemovie/:id",component:UpdateSingleMovie},
    {path:"/updatemovie/",component:UpdateMovie}
  ]
})
/*Routes is an array of objects.*/
/*Don't have to import components in script file in App.vue if using router.*/

/*Note: .git init adds git file.*/
export default router;
