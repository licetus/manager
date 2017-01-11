<template>
	<div id="app">
		<router-view><router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data () {
			return {
			}
		},
		components: {
		},
		created: function () {
			this.$router.replace('/dashboard')
		}
	}
</script>

<style>
</style>
