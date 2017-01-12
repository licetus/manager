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
	@import "../node_modules/font-awesome/css/font-awesome.min.css";

	.el-submenu [class^=fa] {
		vertical-align: baseline;
		margin-right: 20px;
		width: 20px;
	}

	.el-menu-item [class^=fa] {
		vertical-align: baseline;
		margin-right: 20px;
		width: 20px;
	}
</style>
