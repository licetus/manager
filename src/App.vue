<template>
	<div id="app">
		<router-view></router-view>
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

	body {
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	.el-submenu [class^=m-icon] {
		vertical-align: baseline;
		margin-right: 10px;
		width: 20px;
	}

	.el-menu-item [class^=m-icon] {
		vertical-align: baseline;
		margin-right: 10px;
		width: 20px;
	}
</style>
