const todos = require('../data/todos.json')
/**
 * Get All Todos
 */
todosCtrl= (ctx) => {
  try{
    ctx.body = { todos }
  }catch(e){
    ctx.body = { "error": e }
  }
}
/**
 * Save Todo
 */
postTodosCtrl = (ctx) => {
  try{
    todos.push(
      {
        id: ctx.request.body.todo.id,
        completed: false,
        value: ctx.request.body.todo.value
      }
    );
    ctx.ok({ message:"Save Successfully" });
  }catch(e){
    ctx.body = { "error": e }
  }
}
/**
 * Delete Todo
 */
deleteTodosCtrl = (ctx) => {
  try{
    let todo_id = ctx.request.body.todoID;
    todos.splice( todos.indexOf(todo_id), 1 );
    ctx.body = { todos }
    console.log(todos);
  }catch(e){
    ctx.body = { "error": e }
  }
}
/**
 * Update status completed
 */
putTodosCtrl = (ctx) => {
  try{
      let objIndex = todos.findIndex((obj => obj.id == ctx.request.body.todoID));
      todos[objIndex].completed = true;
      ctx.body = { todos }
  }catch(e){
    ctx.body = { "error": e }
  }
}

module.exports = {
  todosCtrl,
  postTodosCtrl,
  deleteTodosCtrl,
  putTodosCtrl
}
