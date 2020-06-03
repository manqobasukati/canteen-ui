<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Canteen management system
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/canteen/orders" label="View orders" />
        <q-route-tab to="/canteen/menu" label="Menus" />
      
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

 

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>