import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../components/Inicio";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import Blog from "../components/Blog";
import Comentarios from "../components/Comentarios";
import NotFound from "../components/NotFound";
import Cliente from "../components/Cliente";
import ContactoNuevo from "../components/ContactoNuevo";
import Demo from "../components/Demo";
const LazyLoading = () => import("../components/LazyLoading");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
    children: [
      {
        path: "",
        components: {
          lazyloading: LazyLoading,
        },
      },
    ],
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: Servicios,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path: "/Contacto",
    name: "Contacto",
    component: ContactoNuevo,
    redirect: (to) => {
      return { name: "contacto-nuevo" };
    },
    alias: ["/contacto-2019", "/contacto-2020"],
  },
  {
    path: "/Blog/:entrada",
    name: "Blog",
    component: Blog,
    children: [
      {
        path: "comentarios",
        component: Comentarios,
        name: "comentarios",
      },
    ],
  },
  {
    path: "/cliente/:cliente",
    component: Cliente,
    props: (route) => ({
      cliente: `${route.params.cliente} s.a.`,
    }),
  },
  {
    path: "/demo",
    component: Demo,
    children: [
      {
        path: "",
        component: Servicios,
      },
    ],
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
