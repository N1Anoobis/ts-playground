import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import TeamsList from "../components/teams/TeamsList.vue";
import TeamMembers from "../components/teams/TeamMembers.vue";
import UsersList from "../components/users/UsersList.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/users",
    // name: "UsersList",
    component: UsersList,
  },
  {
    path: "/teams",
    // name: "TeamsList",
    component: TeamsList,
  },
  {
    path: "/teams/:id",
    // name: "TeamsList",
    component: TeamMembers,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
