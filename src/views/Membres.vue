<template>

</template>

<script>
	export default {
		name: 'Membres',
		data() {
			return {
				
			}
		},
		mounted() {
			
		},
		methods : {
			//Permet de supprimer un utilisateur
			effacerMembre() {
				window.axios.delete('members/'+id).then(response => {
					this.chargerMembres()
				});
			}
		}
	};
</script>