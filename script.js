const app = Vue.createApp({
	data: () => ({
		todos: [
			{ done: false, text: 'パンを買う' },
			{ done: false, text: 'コーヒーを買う' },
			{ done: false, text: '掃除をする' },
			{ done: false, text: '洗濯をする' },
			{ done: false, text: '靴を磨く' },
		],
		addText: '',
		addOftenTodo: '',
		todosOften: [],
	}),

	computed: {
		remaining: function () {
			return this.todos.filter(function (val) {
				return val.done
			}).length
		}
	},

	methods: {
		addTodo: function () {
			if (this.addText) {
				this.todos.push({ done: false, text: this.addText })
				this.addText = ''
			}
		},
		cleanTodo: function () {
			this.todos = this.todos.filter(function (val) {
				return val.done == false
			})
		},
		addTodoFromOften: function (index) {
			if (this.todos.indexOf('this.todosOften[index]') >= 0) {
				alert('既に追加済です')
			} else {
				this.todos.push(this.todosOften[index])
			}

		},
		addToOften: function () {
			if (this.addOftenTodo) {
				this.todosOften.push({ done: false, text: this.addOftenTodo })
				this.addOftenTodo = ''
			}
		},
		removeFromOften: function (index) {
			this.todosOften.splice(index, 1)
		}
	}
})

app.mount('#app')