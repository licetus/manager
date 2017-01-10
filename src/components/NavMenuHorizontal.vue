<template lang="html">
		<el-menu theme="dark" default-active="1" class="NavMenuHorizontal" mode="horizontal" @select="handleSelect">
			<el-row type="flex" class="title" justify="space-between">
				<el-row type="flex" class="row-head">
					<el-menu-item index="0" class="title">世融后台管理客户端v0.1</el-menu-item>
				</el-row>
				<el-row type="flex" class="row-end">
					<el-menu-item index="1">控制台</el-menu-item>
					<el-menu-item index="2">操作指南</el-menu-item>
					<el-submenu index="3">
						<template slot="title">其他</template>
						<el-menu-item index="3-1">在线帮助</el-menu-item>
						<el-menu-item index="3-2">错误提交</el-menu-item>
						<el-menu-item index="3-3">关于世融</el-menu-item>
					</el-submenu>
					<el-menu-item index="4">登录/登出</el-menu-item>
				</el-row>
			</el-row>
		</el-menu>
</template>

<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="css">
</style>
