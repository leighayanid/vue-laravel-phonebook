<template>
	<div class="modal" :class='updatemodal'>
	  <div class="modal-background"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">Update contact</p>
	      <button class="delete" aria-label="close" @click='closeModal'></button>
	    </header>
	    <section class="modal-card-body">
	      <!-- Content ... -->
	      <div class="field">
				  <label class="label">Name</label>
				  <div class="control">
				    <input class="input" :class="{'is-danger':errors.name}" type="text" placeholder="Input your name" v-model="list.name">
				  </div>
				  <small v-if="errors.name" class="has-text-danger"> {{ errors.name[0] }}</small>
				</div>
				<div class="field">
				  <label class="label">Contact Number</label>
				  <div class="control">
				    <input class="input" :class="{'is-danger':errors.contact_number}" type="text" placeholder="Input your contact number" v-model="list.contact_number">
				  </div>
				  <small v-if="errors.contact_number" class="has-text-danger"> {{ errors.contact_number[0] }}</small>
				</div>
				<div class="field">
				  <label class="label">Email Address</label>
				  <div class="control">
				    <input class="input" :class="{'is-danger':errors.email}" type="email" placeholder="Input your email address" v-model="list.email">
				  </div>
				  <small v-if="errors.email" class="has-text-danger"> {{ errors.email[0] }}</small>
				</div>
	    </section>
	    <footer class="modal-card-foot">
	      <button class="button is-success" @click='onUpdateContact'>Update</button>
	      <button class="button" @click='closeModal'>Cancel</button>
	    </footer>
	  </div>
	</div>
</template>

<script>
	export default{
		props: ['updatemodal'],
		data(){
			return{
				list: {},
				errors:{}
			}
		},
		methods: {
			closeModal() {
				this.$emit('closeRequest')
			},
			onUpdateContact(){
				axios.patch(`/contact/${this.list.id}`, this.$data.list)
					.then((response)=> this.closeModal())
					.catch((error)=> this.errors = error.response.data.errors)
			}
		}
	}
</script>