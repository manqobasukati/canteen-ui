
<template>
  <q-layout view="hHh Lpr fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="drawer = !drawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          User
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

   <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item @click="changeLink(menuItem.link)" clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
   </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Orders',
    link:'orders',
    separator: true
  },
  {
    icon: 'send',
    label: 'Make order',
    link:'create-order',
    separator: false
  },
 
]

export default {
  data () {
    return {
      drawer: false,
      menuList
    }
  },
  methods:{
      changeLink(link){

          let route = '/user/'+link;
          console.log(route)
          this.$router.push(route)
      }
  }
}
</script>