<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs class="text-h6">
      <q-breadcrumbs-el label="User" />

      <q-breadcrumbs-el label="Create order" />
    </q-breadcrumbs>
    <div class="row">
      <div class="col "></div>
      <div class="col sign_up__card">
        <q-card>
          <q-card-section>
            <div class="text-h6 text-center">Order</div>
          </q-card-section>
          <q-separator inset />
          <q-card-section>
            <div class="q-pa-lg">
              <q-select
                filled
                v-model="multiple"
                multiple
                :options="options"
                label="Select items"
              />
              <q-btn
                color="primary"
                class="full-width q-mt-sm"
                label="submit order"
                @click="submitOrder"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col "></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCreateOrder",
  data() {
    return {
      multiple: null,
      options: ["ligusha", "emasi", "tea"]
    };
  },
  methods:{
      submitOrder(){

      }
  }
};
</script>
