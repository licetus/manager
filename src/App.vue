<template>
	<div id="app">
		<NavMenuHorizontal></NavMenuHorizontal>
		<NavMenuVertical></NavMenuVertical>
	</div>
</template>

<script>
import NavMenuHorizontal from './components/NavMenuHorizontal.vue'
import NavMenuVertical from './components/NavMenuVertical.vue'
export default {
	name: 'app',
	data () {
		return {
		}
	},
	components: {
		NavMenuHorizontal,
		NavMenuVertical
	}
}
</script>

<style>
</style>
