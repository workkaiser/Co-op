<template>
  <div classe="Connexion">
    <div>
	    <h1>Se connecter</h1>
	    <div>
	    	<b>Email</b><br>
	    	<input v-model="email" type="email"  v-on:keyup.enter="seConnecter" required>
	    	<br><b>Mot de passe</b><br>
	    	<input v-model="password" type="password" v-on:keyup.enter="seConnecter" required>
	    </div>
	    <div>
	    	<br>
	    	<router-link to="/Discussions"><button @click="seConnecter">Connexion</button></router-link>
	    </div>
  	</div>
  </div>
</template>

<script>
	export default {
		name: 'Connexion',
		data() {
			return {
				email: '',
				password: '',
			}
		},
		mounted() {
			  if(this.memberConnected()) {
			  	this.$router.push('/Discussions');
			  }
		},
		methods : {
			//Permet a l'utilisateur de se connecter puis le redirige vers Discussions
			seConnecter() {
				window.axios.post('members/signin',{
					email : this.email,
					password : this.password
				}).then(response => {
					this.$store.commit('setMember', {
						fullname : response.data.fullname,
						email : response.data.email,
						id : response.data.id,
					});
					this.$store.commit('setToken', response.data.token);
					this.setTokenAxios(response.data.token);
					this.$router.push('/Discussions');
				}).catch(error => {
					alert(error.response.data.error);
				});
			}
		}
	};
</script>