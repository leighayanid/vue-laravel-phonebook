<template>
	<div class="modal" :class='showmodal'>
	  <div class="modal-background"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">Contact Details</p>
	      <button class="delete" aria-label="close" @click="onClose"></button>
	    </header>
	    <section class="modal-card-body">
	     <p> {{ list.name }}</p><br>
	     <p> {{ list.contact_number }}</p><br>
	     <p> {{ list.email }}</p><br>
	    </section>
	    <footer class="modal-card-foot">
	      <button class="button is-success" @click="onClose">Okay</button>
	    </footer>
	  </div>
	</div>
</template>

<script>
	export default{
		props: ['showmodal'],
		data(){
			return{
				list: ''
			}
		},
		methods: {
			onClose(){
				this.$emit('closeRequest')
			}
		}
	}
</script>