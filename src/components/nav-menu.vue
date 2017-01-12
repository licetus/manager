<template lang="html">
	<el-row class="panel">
		<el-col class="panel-top">
			<el-menu theme="dark" default-active="1" class="nav-menu-top" mode="horizontal" @select="handleSelect">
				<el-row type="flex" class="row-end" justify="end">
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
			</el-menu>
		</el-col>
		<el-row class="title">
			<p class="text">后台管理系统</p>
		</el-row>
		<el-col class="panel-body">
			<el-col class="panel-side">
				<el-menu mode="vertical" theme="dark" class="nav-menu-side" default-active="/dashboard"
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
			<el-col class="panel-center">
				<el-col class="breadcrumb">
					<el-breadcrumb>
						<el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
						<el-breadcrumb-item v-if="currentPathNameParent!=''">{{currentPathNameParent}}</el-breadcrumb-item>
						<el-breadcrumb-item v-if="currentPathName!=''">{{currentPathName}}</el-breadcrumb-item>
					</el-breadcrumb>
				</el-col>
				<el-card class="page">
					<router-view></router-view>
				</el-card>
			</el-col>
		</el-col>
	</el-row>
</template>

<script>
export default {
	data () {
		return {
			currentPathName: 'Dashboard',
			currentPathNameParent: '',
		}
	},
	watch: {
		'$route' (to, from) {
			this.currentPathName = to.name
			this.currentPathNameParent = to.matched[0].name
		}
	},
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

<style scoped>

	.panel {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		width: 100%;
	}
	.panel-top {
		position: absolute;
		top: 0px;
		right: 0px;
		left: 0px;
		height: 60px;
		background-color: #363d42;
	}
	.title {
		position: absolute;
		top: 0px;
		left: 0px;
		height: 60px;
		width: 200px;
		font-size: 18px;
		color: #c0ccda;
		background-color: #292f32;
	}
	.text {
		margin-left: 37px;
		vertical-align: middle;
	}
	.panel-body {
	background-color: #e9edf1;
	position:absolute;
	top: 60px;
	bottom: 0px;
	overflow-y: scroll;
	}
	.panel-side {
		position: absolute;
		top: 0px;
		bottom: 0px;
		left: 0px;
		width: 200px;
		background-color: #41485d;
	}
	.panel-center {
		padding: 21px 20px 20px 230px;
	}
	.breadcrumb {
		margin-bottom: 22px;
	}
	.page {
		background-color: #fff;
		box-sizing: border-box;
	}



</style>
