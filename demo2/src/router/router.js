import App from '../App'

export default {
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/', 
			component: App
		},
		{
			path: '/parent', 
			component: r => require.ensure([], () => r(require('../page/parent.vue')), 'parent'),
			children: [
				{
					path: '',
					component: r => require.ensure([], () => r(require('../page/default.vue')), 'parent/foo')
				},
				{
					path: '/foo',
					component: r => require.ensure([], () => r(require('../page/parent/foo.vue')), 'parent/foo')
				},
				{
					path: '/bar',
					component: r => require.ensure([], () => r(require('../page/parent/bar.vue')), 'parent/bar')
				}
			]
		}
	]
}