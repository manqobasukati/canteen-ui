 <template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs class="text-h6">
      <q-breadcrumbs-el label="Canteen" />

      <q-breadcrumbs-el label="menu" />
    </q-breadcrumbs>
    <div class="row">
      <div class="col-1 "></div>
       <div class="col-1 text-h5">No menu</div>
      <div class="col-1 "></div>
    </div>
  </div>
             
</template>

 <script lang="ts">
 import Vue from 'vue';
 export default Vue.extend({
   name: 'CanteenMenu',
   methods:{
       login(){
           this.$router.push('canteen')
       }
   }
 });
 </script>

 <style scoped>

 </style>