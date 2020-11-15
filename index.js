var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      insert: "",
      change: "",
      todos : [
        { text: "Compra latte"},
        {
          text: "Compra pane"
        },
        {
          text: "Compra nutella"
        },
        {
          text: "Compra biscotti"
        }

      ]
    },
    
    methods: {
      greet: function (event) {
        alert('Hello ' + this.name + '!')
      },
      deleteTodo (elm) {
        this.todos.splice(elm, 1)
      },
      addTodo () {
        var elm = {
          text: this.insert
        }
        this.todos.push(elm),
        this.insert= "";
      },
    }
  })
