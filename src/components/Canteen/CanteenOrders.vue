<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs class="text-h6">
      <q-breadcrumbs-el label="Canteen" />

      <q-breadcrumbs-el label="all orders" />
    </q-breadcrumbs>
    <div class="row">
      <div class="col-1 "></div>
      <div class="col sign_up__card">
        <q-table
          title="Orders"
          :data="data"
          :columns="columns"
          row-key="number"
        />
      </div>
      <div class="col-1 "></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",
  mounted(){
      this.showNotif();
  },
  methods: {
    showNotif() {
      this.$q.notify({
        message: "You have a new order ",
        color: "green"
      });
    }
  },
  data() {
    return {
      columns: [
        {
          name: "number",
          label: "Order number",
          required: false,
          align: "left",
          field: row => row.number,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "items",
          label: "Items ordered",
          required: false,
          align: "left",
          field: row => row.items,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "status",
          label: "Order status",
          required: false,
          align: "left",
          field: row => row.status,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "username",
          label: "User name",
          required: false,
          align: "left",
          field: row => row.username,
          format: val => `${val}`,
          sortable: true
        }
      ],
      data: [
        {
          number: "1",
          items: "Ligusha, emasi",
          status: "not ready",
          username: "Machawe"
        },
        {
          number: "2",
          items: "Ligusha, emasi",
          status: "ready",
          username: "Chauke"
        }
      ]
    };
  }
};
</script>
