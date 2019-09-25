<template>
	<div class="home">
		<div class="left"></div>
		<div class="right">
			<right1></right1>
		</div>
	</div>
</template>

<script>
	// // @ is an alias to /src
	import Right1 from '@/components/children/Right1.vue'

	export default {
		name: 'home',
		components: {
			Right1
		}
	}
</script>

<style lang="scss" scoped>

</style>
