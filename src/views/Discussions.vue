<template>

  <div class="">
  
    <div v-for="Discussion in Discussions">
    {{ discussions.label }}
    
    </div>
    
    
  </div>
  
</template>

<script>
	export default {
		name: 'Discussions',
		data() {
			return {
				discussions : [],
				members : []
			}
		},
		mounted() {

		},
		methods : {
			//Creer une nouvelle discussion
			creerDiscussion() {
				window.axios.post('channels').then(response => {
					this.discussions = response.data
				})
			},
			//Permet d'obtenir le mail et le nom de l'utilisateur
			getMember() {
				window.axios.get('members',{
					members : this.email,
					fullname : this.fullname
				}).then(response => {
					console.log(email);
				});

				console.log();
			}
		}
	};
</script>