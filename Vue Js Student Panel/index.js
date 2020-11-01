new Vue({
  el: '#app',
  data: {
    addStudent: {
      name: '',
      adress: ''
    },
    students: []
  },
  methods: {
    addNewStudent: function() {
      let name = this.addStudent.name.trim();
      let adress = this.addStudent.adress.trim();
      if (name && adress) {
       this.students.push({
          name: name, adress: adress
        })
      this.addStudent = {name:'',adress:''} 
      }
    },
    deleteStudent:function(index){
      this.students.splice(index,1);
    }
  }

})