<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
           
          </q-avatar>
          Canteen management system
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
       
      
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

 

  </q-layout>
</template>

<script>
export default {
  name:"home",
  data () {
    return {
    }
  }
}
</script>