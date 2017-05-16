webpackJsonp([1],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__lib_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_vue_router__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_vue_router__);



__WEBPACK_IMPORTED_MODULE_0__lib_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1__lib_vue_router___default.a);

const Home = {
	template: `
	<div class="home">
		<h2>Home</h2>
		<p>hello</p>
	</div>`
};

const Parent = {
	data() {
		return {
			transitionName: 'slide-left'
		};
	},
	watch: {
		['$route'](to, from) {
			const toDepth = to.path.split('/').length;
			const fromDepth = from.path.split('/').length;
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
		}
	},
	template: `
	<div>
		<h2>Parent</h2>
		<transition :name="transitionName">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
	`
};

const Default = { template: '<div class="default">default</div>' };
const Foo = { template: '<div class="foo">foo</div>' };
const Bar = { template: '<div class="bar">bar</div>' };

const router = new __WEBPACK_IMPORTED_MODULE_1__lib_vue_router___default.a({
	mode: 'history',
	base: __dirname,
	routes: [{ path: '/', component: Home }, { path: '/parent', component: Parent,
		children: [{ path: '', component: Default }, { path: 'foo', component: Foo }, { path: 'bar', component: Bar }]
	}]
});

new __WEBPACK_IMPORTED_MODULE_0__lib_vue___default.a({
	router,
	template: `
    <div id="app">
      <h1>Transitions</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/parent">/parent</router-link></li>
        <li><router-link to="/parent/foo">/parent/foo</router-link></li>
        <li><router-link to="/parent/bar">/parent/bar</router-link></li>
      </ul>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  `
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ })

},[4]);