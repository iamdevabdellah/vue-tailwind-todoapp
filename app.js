var app = new Vue({
    el: '#app',
    data: function(){
        return{
            todos: [],
            newTodo: '',
            id: 1,
        }
    },

    methods: {

        add() {
          const t = this;

          let todo = {
            id: t.id,
            text: t.newTodo,
            finished: false,
          }

          t.todos.unshift(todo);
          t.newTodo = '';
          t.id++;
        },

        updateStatus(todo) {
          todo.finished = !todo.finished;
        },

        remove(index) {
          const t = this;
          t.todos.splice(index, 1);
        }

    }
  })