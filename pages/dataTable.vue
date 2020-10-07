<template>
  <v-row>
    <v-col class="center">
      <datatable />
    </v-col>
  </v-row>
</template>

<script>
import datatable from '~/components/dataTable.vue'
export default {
  components: {
    datatable
  }
}
</script>
