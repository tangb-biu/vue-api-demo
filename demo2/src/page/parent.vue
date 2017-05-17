<template>
	<div>
		<h2>Parent</h2>
		<transition :name="transitionName">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'parent',
		data() {
			return {
				transitionName: 'slide-left'
			}
		},
		watch: {
			// ['$route'](to, from) {
			// 	const toDepth = to.path.split('/').length
			// 	const fromDepth = from.path.split('/').length
			// 	this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
			// }
		}
	}
</script>

<style type="less" scoped>
	
</style>