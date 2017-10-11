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
        <input class="input is-small" type="text" placeholder="search">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fa fa-book"></i>
      </span>
      bulma
    </a>
    </nav>
    <!-- pass modal data via props -->
    <CreateContact :openmodal='addActive' @closeRequest='close'></CreateContact>
  </div>
</template>

<script>
  let CreateContact = require('./Contacts/CreateContact.vue')
  export default{
    data() {
      return{
        addActive: ''
      }
    },
    components: {
      CreateContact
    },
    methods: {
      openCreateModalForm() {
        this.addActive = 'is-active'
      },
      close() {
        this.addActive = ''
      }
    }
  }
</script>