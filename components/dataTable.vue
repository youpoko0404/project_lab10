<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title>
          Data
          <v-spacer />
          <v-text-field
            v-model="searchInput"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headersTable"
          :items="dataTable"
          :search="searchInput"
        />
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      dataTable: [],
      searchInput: '',
      headersTable: []
    }
  },
  mounted () {
    this.searchInput = this.$store.state.search
    this.dataTable = this.$store.state.dataTable
    this.headersTable = this.$store.state.headers
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      db.collection('dataTable').orderBy('timestamp').onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => {
          data.push(doc.data())
        })
        this.dataTable = data
      })
    }
  }
}
</script>
