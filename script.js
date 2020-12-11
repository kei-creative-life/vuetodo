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
		isActive: true,

	}),

	computed: {
		remaining: function () {
			return this.todos.filter(function (val) {
				return val.done
			}).length
		},
		// isExistTodoList: function (index) {
		// 	const todoListText = this.todos.map(todo => todo.text)
		// 	const todosListOftenText = this.todosOften[index].text
		// 	if (todoListText.includes(todosListOftenText)) {
		// 		return true
		// 	} else {
		// 		return false
		// 	}
		// }
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
			const todoText = this.todos.map(todo => todo.text)
			const todosOftenText = this.todosOften[index].text
			if (!todoText.includes(todosOftenText)) {
				this.todos.push(this.todosOften[index])
			} else {
				alert('既に追加済です。')
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