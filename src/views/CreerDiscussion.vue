<template>
  
    
    <p>creerDiscussion</p>
  
</template>

<script>
	export default {
		name: 'creerDiscussion',
		data() {
			return {
				discussion : {
					topic : 'testTopic',
					label : 'testLabel'
				}
			}
		},
		mounted() {
			
		},
		methods : {
			//Permet de creer une discussion
			creerDiscussion() {
				window.axios.post('channels').then(response => {
					this.discussions = response.data
					});
			}
		}
	};
</script>