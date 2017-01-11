<template lang="html">
	<el-row class="panel">
		<el-col class="nav-menu-top">
			<el-menu theme="dark" default-active="1" class="nav-menu-top" mode="horizontal" @select="handleSelect">
				<el-row type="flex" class="title" justify="space-between">
					<el-row type="flex" class="row-head">
						<el-col :span="3">
							<el-menu-item index="0" class="title">后台管理系统</el-menu-item>
						</el-col>
					</el-row>
					<el-row type="flex" class="row-end">
						<el-menu-item index="1">控制台</el-menu-item>
						<el-menu-item index="2">操作指南</el-menu-item>
						<el-submenu index="3">
							<template slot="title">其他</template>
							<el-menu-item index="3-1">在线帮助</el-menu-item>
							<el-menu-item index="3-2">错误提交</el-menu-item>
							<el-menu-item index="3-3">关于我们</el-menu-item>
						</el-submenu>
						<el-menu-item index="4">登录/登出</el-menu-item>
					</el-row>
				</el-row>
			</el-menu>
		</el-col>
		<el-col :span="3" class="nav-menu-side">
			<el-menu mode="vertical" theme="dark" class="nav-menu-side" default-active="/Dashboard"
			@open="handleOpen" @close="handleClose" @select="handleSelect" router>
				<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
					<el-submenu :index="index+''" v-if="!item.leaf">
						<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
						<el-menu-item v-for="child in item.children" :index="child.path">{{child.name}}</el-menu-item>
					</el-submenu>
					<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
						<i :class="item.iconCls"></i>{{item.children[0].name}}
					</el-menu-item>
				</template>
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
		},
		handleSelect(key, keyPath) {
			console.log(key, keyPath)
		}
	}
}
</script>

<style lang="css">
</style>
