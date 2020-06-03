<template>
  <div class="row">
    <div class="col "></div>
    <div class="col sign_up__card">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Select login option</div>
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <div class="q-pa-lg">
            <q-btn
              color="primary"
              class="full-width q-mt-sm"
              label="Login as Canteen admin"
              @click="submit('canteen-login')"
            />
            <q-btn
              color="primary"
              class="full-width q-mt-sm"
              label="Login as user"
              @click="submit('user-login')"
            />
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col "></div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {};
  },
  methods: {
    submit(route) {
      this.$router.push(route);
    }
  }
};
</script>
