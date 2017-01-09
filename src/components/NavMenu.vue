<template lang="html">
	<el-row class="tac">
		<el-col :span="3">
		<el-menu mode="vertical" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
			<el-submenu index="1">
				<template slot="title"><i class="el-icon-edit"></i>用户账户管理</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title"><i class="el-icon-menu"></i>投资项目管理</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="2-1">选项1</el-menu-item>
					<el-menu-item index="2-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="2-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3"><i class="el-icon-setting"></i>管理端设置</el-menu-item>
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
