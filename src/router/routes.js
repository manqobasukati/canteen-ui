const routes = [
  
  {
    path: "/",
    redirect:"/select",
    component: () => import("components/Home.vue"),
    children: [
      {
       
          path: "/select",
          component: () => import("components/Select.vue")
       
      },
      {
        path: "/user-login",
        component: () => import("components/User/UserLogin.vue")
      },
      {
        path: "/canteen-login",
        component: () => import("components/Canteen/CanteenLogin.vue")
      }
    ]
  },
 
  {
    path: "/canteen",
    component: () => import("components/Canteen/CanteenHome.vue"),
    children: [
      {
        path: "orders",
        component: () => import("components/Canteen/CanteenOrders.vue")
      },
      {
        path: "menu",
        component: () => import("components/Canteen/CanteenMenu.vue")
      }
    ]
  },
  
  {
    path: "/user",
    component: () => import("components/User/UserHome.vue"),
    children: [
      {
        path: "orders",
        component: () => import("components/User/UserOrders.vue")
      },
      {
        path: "create-order",
        component: () => import("components/User/UserCreateOrder.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
