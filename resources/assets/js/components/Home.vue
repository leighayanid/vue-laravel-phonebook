<template>
  <transition name="slide" mode="slide-in">
  <div>
  	<nav class="panel column is-8 is-offset-2">
    <p class="panel-heading">
      VueJS Phonebook
      <button class="button is-primary" @click="openCreateModalForm">
        New contact
      </button>
      <span class="is-pulled-right " v-if="loading">
        <i class="fa fa-refresh fa-spin"></i>
      </span>
    </p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input is-medium" type="text" placeholder="Search here" v-model="searchQuery">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <a class="panel-block" v-for="contact,key in tempContactList">
      <span class="column is-9">
        {{ contact.name }}
        <br>
        <span class="icon is-small is-left">
          <i class="fa fa-microphone"></i>
        </span><small> {{ contact.contact_number }}</small>
      </span>
      <span class="column panel-icon is-1">
        <i class="fa fa-trash has-text-danger" @click="deleteContact(key,contact.id)"></i>
      </span>
      <span class="column panel-icon is-1">
        <i class="fa fa-edit has-text-info" @click="openUpdateModal(key)"></i>
      </span>
      <span class="column panel-icon" @click="openShowModal(key)">
        <i class="fa fa-eye is-1 has-text-primary"></i>
      </span>
    </a>
    </nav>

    <!-- pass modal data via props -->
    <CreateContact :openmodal='addActive' @closeRequest='close'></CreateContact>
    <ShowContact :showmodal='showActive' @closeRequest='close'></ShowContact>
    <UpdateContact :updatemodal='updateActive' @closeRequest='close'></UpdateContact>

  </div>
</transition>
</template>

<script>

  let CreateContact = require('./Contacts/CreateContact.vue')
  let ShowContact = require('./Contacts/ShowContact.vue')
  let UpdateContact = require('./Contacts/UpdateContact.vue')

  export default{
    /*fetch data from the database once the vue has been mounted using axios*/
    created(){
      this.loading = !this.loading
      axios.post('/getContactListData')
        .then((response)=> {
          this.contactLists = this.tempContactList = response.data
          this.loading = !this.loading
        }
        )
        .catch((error)=> this.errors = error.response.data.errors)
    },
    data() {
      return{
        contactLists: {},
        addActive: '',
        showActive: '',
        updateActive:'',
        loading: false,
        searchQuery: '',
        tempContactList: ''
      }
    },
    components: {
      CreateContact,
      ShowContact,
      UpdateContact
    },
    watch:{
      searchQuery(){
        if (this.searchQuery.length > 0) {
          this.tempContactList = this.contactLists.filter((index) => {
            return Object.keys(index).some((key)=>{
              let string = String(index[key])
              return string.toLowerCase().indexOf(this.searchQuery.toLowerCase())>-1;
            })
          })
        }else{
          this.tempContactList = this.contactLists
        }
      }
    },
    methods: {
      openCreateModalForm() {
        this.addActive = 'is-active'
      },
      openShowModal(key){
        this.$children[1].list = this.tempContactList[key]
        this.showActive = 'is-active'
      },
      openUpdateModal(key){
        this.$children[2].list = this.tempContactList[key]
        this.updateActive = 'is-active'
      },
      deleteContact(key,id){
        // console.log(`${key} ${id}`)
        if (confirm("Are you sure you want to delete this contact?")) {
          this.loading = !this.loading
          axios.delete(`/contact/${id}`)
            .then((response)=> {
              this.contactLists.splice(key,1);
              this.loading = !this.loading;   
              }
            )
            .catch((error)=> this.errors = error.response.data.errors)
        }
      },
      close() {
        this.addActive = this.showActive = this.updateActive = '' 
      }
    }
  }
</script>

<style>
   .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>