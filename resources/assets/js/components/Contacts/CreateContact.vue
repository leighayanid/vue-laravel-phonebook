<template>
	<div class="modal" :class='openmodal'>
	  <div class="modal-background"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">Add new contact</p>
	      <button class="delete" aria-label="close" @click='closeModal'></button>
	    </header>
	    <section class="modal-card-body">
	      <!-- Content ... -->
	      <div class="field">
				  <label class="label">Name</label>
				  <div class="control">
				    <input class="input" type="text" placeholder="Input your name" v-model="list.name">
				  </div>
				</div>
				<div class="field">
				  <label class="label">Contact Number</label>
				  <div class="control">
				    <input class="input" type="text" placeholder="Input your contact number" v-model="list.contact_number">
				  </div>
				</div>
				<div class="field">
				  <label class="label">Email Address</label>
				  <div class="control">
				    <input class="input" type="text" placeholder="Input your email address" v-model="list.email">
				  </div>
				</div>

	    </section>
	    <footer class="modal-card-foot">
	      <button class="button is-success">Save changes</button>
	      <button class="button" @click='closeModal'>Cancel</button>
	    </footer>
	  </div>
	</div>
</template>

<script>
	export default{
		props: ['openmodal'],
		data(){
			return{
				list: {
					name: '',
					contact_number: '',
					email: ''
				}
			}
		},
		methods: {
			closeModal() {
				this.$emit('closeRequest')
			}
		}
	}
</script>