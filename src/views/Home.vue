<template>
	<div class="home">
		
		<Nav></Nav>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Nav from '../components/Nav.vue'

	export default {
		name: 'home',
		components: {
			Nav
		}
	}
</script>

<style lang="scss" scoped>
	body {
		background: url(../imgs/yz.png);
		background-color: #0000FE;
	}
</style>
