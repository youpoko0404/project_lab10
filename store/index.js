export const state = () => ({
  search: '',
  dataTable: [],
  types: [
    'Item1',
    'Item2',
    'Item3',
    'Item4'
  ],
  sex: [
    'Male',
    'Female',
    'Bisexual',
    'Transgender',
    'No gender'
  ],
  headers: [
    {
      text: 'First Name',
      align: 'start',
      sortable: true,
      value: 'firstName'
    },
    { text: 'List Name', value: 'lastName' },
    { text: 'Age', value: 'age' },
    { text: 'Height', value: 'height' },
    { text: 'Weight', value: 'weight' },
    { text: 'Phone', value: 'phone' },
    { text: 'E-mail', value: 'email' },
    { text: 'Type', value: 'type' },
    { text: 'Sex', value: 'sex' },
    { text: 'Other', value: 'other' }
  ]
})
