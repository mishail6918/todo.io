const app = {
    data() {
        return {
            title: 'Список задач на Vue.js',
            placeholderText: 'Введите текст заметки',
            inputValue: '',
            notes: []
        }
    }, 
    methods: {
        addNewTask() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        enterPress(e) {
            if (e.keyCode === 13) {
                this.addNewTask()
            }
        },
        deleteTask(idx) {
            this.notes.splice(idx, 1)
        }
    }
}


Vue.createApp(app).mount('#app')