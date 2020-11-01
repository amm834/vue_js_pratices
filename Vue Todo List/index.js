new Vue({
  el:'#app',
  data:{
    newItem:'',
    lists:[
      {
        name:'Sample',
        status:true
      }
      ]
  },
  methods:{
    addItem(){
      let item = {
        name:this.newItem,
        status:false
      }
      this.lists = [...this.lists,item];
     this.newItem = '';
    },
    deleteItem(index){
      this.lists.splice(index,1)
    }
  },
  computed:{
    todo(){
      let todos = this.lists.filter(function(todo){
      return todo.status == false;
      })
      return todos.length;
    }
  }
})