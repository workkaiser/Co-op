<template>
<div id="app" v-if="applicationEstActive">
	<div id="navbar" v-if="memberConnected">
	    <div id="nav">
	      <router-link to="/">Home</router-link> |
	      <router-link to="/about">About</router-link>
	    </div>
  	Votre nom est : {{ monMembre() }}
    <router-view/>
    </div>
</div>
  
</template>


<script>
  export default {
    name: 'App',
    data() {
      return {
        applicationEstActive : false
      }
    },
    mounted() {
      console.log(this);
      if(!this.memberConnected()){
        this.$router.push('/');
      }
      window.axios.get('ping').then((response) => {
        this.applicationEstActive = true;
        console.log(response.data);
      }).catch((error) => {
        this.applicationEstActive = false;
        alert("L'application n'est pas disponible");
      })
    },
    methods : {
      
    }
  };
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
