<template>
  <v-container>
    <h2>Beauty clinic</h2>
    <v-container class="m">
      <v-form ref="form">
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="firstName"
              :rules="[v => !!v || 'First Name is required']"
              label="First Name"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastName"
              :rules="[v => !!v || 'List name is required']"
              label="List name"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="age"
              :rules="[v => !!v || 'Age is required']"
              label="Age"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="height"
              :rules="[v => !!v || 'Height is required']"
              label="Height"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-text-field
              v-model="weight"
              :rules="[v => !!v || 'Weight is required']"
              label="Weight"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              v-model="phone"
              :rules="[v => !!v || 'Phone is required']"
              label="Phone number"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="3"
          >
            <v-text-field
              ref="email"
              v-model="email"
              label="E-mail"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-select
              v-model="type"
              :rules="[v => !!v || 'Type is required']"
              :items="this.$store.state.types"
              label="Type"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="2"
          >
            <v-select
              v-model="sex"
              :rules="[v => !!v || 'Sex is required']"
              :items="this.$store.state.sex"
              label="Sex"
              required
            />
          </v-col>
          <v-col
            cols="12"
            md="12"
          >
            <v-textarea
              ref="other"
              v-model="other"
              label="Other"
              required
            />
          </v-col>
          <v-btn
            class="mr-4"
            @click="addData"
          >
            submit
          </v-btn>
          <v-btn
            class="mr-4"
            @click="reset"
          >
            Reset
          </v-btn>
        </v-row>
      </v-form>
    </v-container>
  </v-container>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data () {
    return {
      firstName: null,
      lastName: null,
      age: null,
      height: null,
      weight: null,
      phone: null,
      email: '',
      type: null,
      sex: null,
      other: ''
    }
  },
  methods: {
    clear () {
      this.$refs.form.reset()
      this.email = ''
      this.other = ''
    },
    addData () {
      const dataText = {
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        height: this.height,
        weight: this.weight,
        phone: this.phone,
        email: this.email,
        type: this.type,
        sex: this.sex,
        other: this.other,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
      if (this.firstName != null && this.lastName != null &&
      this.age != null && this.height != null &&
      this.weight != null && this.phone != null &&
      this.type != null && this.sex != null) {
        db.collection('dataTable').doc().set(dataText)
          .then(function () {
            // eslint-disable-next-line no-console
            console.log('Document successfully written! -> dataTable')
          })
          .catch(function (error) {
            // eslint-disable-next-line no-console
            console.error('Error writing document: ', error)
          })
        this.clear()
      } this.$refs.form.validate()
    },
    reset () {
      this.clear()
    }
  }
}
</script>
