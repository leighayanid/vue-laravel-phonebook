<template>
  <div>
  	<nav class="panel column is-8 is-offset-2">
    <p class="panel-heading">
      VueJS Phonebook
      <button class="button is-primary" @click="openCreateModalForm">
        New contact
      </button>
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-medium" type="text" placeholder="Search here">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <a class="panel-block" v-for="contact,key in contactLists">
      <span class="column is-9">
        {{ contact.name }}
        <br>
        <span class="icon is-small is-left">
          <i class="fa fa-microphone"></i>
        </span><small> {{ contact.contact_number }}</small>
      </span>
      <span class="column panel-icon is-1">
        <i class="fa fa-trash has-text-danger"></i>
      </span>
      <span class="column panel-icon is-1">
        <i class="fa fa-edit has-text-info"></i>
      </span>
      <span class="column panel-icon" @click="openShowModal(key)">
        <i class="fa fa-eye is-1 has-text-primary"></i>
      </span>
    </a>
    </nav>
    <!-- pass modal data via props -->
    <CreateContact :openmodal='addActive' @closeRequest='closeModalForm'></CreateContact>
    <ShowContact :showmodal='showActive' @closeRequest='closeShowModal'></ShowContact>
  </div>
</template>

<script>

  let CreateContact = require('./Contacts/CreateContact.vue')
  let ShowContact = require('./Contacts/ShowContact.vue')

  export default{
    /*fetch data from the database once the vue has been mounted using axios*/
    created(){
      axios.post('/getContactListData')
        .then((response)=> this.contactLists = response.data)
        .catch((error)=> this.errors = error.response.data.errors)
    },
    data() {
      return{
        addActive: '',
        showActive: '',
        contactLists: {}
      }
    },
    components: {
      CreateContact,
      ShowContact
    },
    methods: {
      openCreateModalForm() {
        this.addActive = 'is-active'
      },
      openShowModal(key){
        this.$children[1].list = this.contactLists[key]
        this.showActive = 'is-active'
      },
      closeModalForm() {
        this.addActive = ''
      },
      closeShowModal(){
        this.showActive = ''
      }
    }
  }
</script>