//id生成器。lib是给自己建的一个文件夹
let id:number = parseInt(window.localStorage.getItem('_idMax')|| '0') || 0//防止每次刷新id都从0开始
function CreateId() {
  id++
  return id
}
export default CreateId