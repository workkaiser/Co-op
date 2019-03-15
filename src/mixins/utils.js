

export const Utils = {
	methods : {
		//Verifie si l'utilisateur est connecte
		memberConnected(){
			if(!this.$store.state.member){
				return false;
			}else{
				this.setTokenAxios(this.$store.state.token);
				return true;
			}
		},
		setTokenAxios(token){
			window.axios.defaults.params.token = token;
		},
		//Recupere le nom de l'utilisateur connecte
		monMembre() {
			return this.$store.state.member.fullname;
		}
		/*getMember() {
			window.axios.get('members/:id/signedin?token=:token',{
				email : this.email,
				fullname : this.fullname
			});
		}*/
	}
}