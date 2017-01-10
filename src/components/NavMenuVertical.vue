<template lang="html">
	<el-row class="tac">
		<el-col :span="3">
		<el-menu mode="vertical" default-active="1" class="NavMenuVertical" @open="handleOpen" @close="handleClose">
			<el-menu-item index="1">Dashboard</el-menu-item>
			<el-submenu index="2">
				<template slot="title">应用管理</template>
				<el-menu-item index="2-1">Banner</el-menu-item>
				<el-menu-item index="2-2">产品推送</el-menu-item>
				<el-menu-item index="2-3">消息推送</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">用户管理</template>
				<el-menu-item index="3-1">统计</el-menu-item>
				<el-menu-item index="3-2">查询</el-menu-item>
				<el-menu-item index="3-3">筛选</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">产品管理</template>
				<el-menu-item index="4-1">统计</el-menu-item>
				<el-menu-item index="4-2">查询</el-menu-item>
				<el-menu-item index="4-3">筛选</el-menu-item>
			</el-submenu>
			<el-menu-item index="5">设置</el-menu-item>
		</el-menu>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}
</script>

<style lang="css">
</style>
