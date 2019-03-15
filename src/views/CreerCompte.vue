<template>
     <div classe="Connexion">
    <div>
	    <h1>Créer compte</h1>
	    <div>
	    	<b>Nom</b><br>
	    	<input v-model="fullname" required>
	    	<br><b>Email</b><br>
	    	<input v-model="email" type="email" required>
	    	<br><b>Mot de passe</b><br>
	    	<input v-model="password" type="password" required>
	    	<br><b>Confirmer mot de passe</b><br>
	    	<input v-model="passwordVerif" type="password" required>
	    </div>
	    <div>
	    	<br>
	    	<router-link to="/Connexion"><button @click="creationCompte">Créer compte</button></router-link>
	    </div>
  	</div>
  </div>
</template>

<script>
	export default {
		name: 'CreerCompte',
		data() {
			return {
				fullname: '',
				email: '',
				password: '',
				passwordVerif: '',
			}
		},
		methods : {
			creationCompte() {
				if(this.password == this.passwordVerif) {
					window.axios.post('members',{
						fullname : this.fullname,
						email : this.email,
						password : this. password
					}).then(response => {
						alert('Votre compte a été créé. Vous pouvez vous connecter');
					}).catch(error => {
						alert(error.response.data.error.join("\n"));
					});
				} else {
					alert("Les deux mots de passe ne correspondent pas");
				}
			}
		}
	};
</script>