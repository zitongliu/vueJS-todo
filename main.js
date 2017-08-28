new Vue ({
  el: '#app',
  data: {
    todos: [],
    userInput: ''
  },
  methods: {
    addTodo: function() {
      event.preventDefault();
      //  this refers to this vue instance
      if (this.userInput.trim()=='') {
        return;
      }
      var newTodo = {
        id: _.uniqueId(),
        value: this.userInput
      };

      this.todos.push(newTodo);
      this.userInput = '';
    },
    removeTodo: function(todo) {
      var id = todo.id;
      for (var  i = 0; i < this.todos.length; i++ ) {
        if (this.todos[i].id==id) {
          this.todos.splice(i, 1);
          break;
        }
      }
    }
  }
});
