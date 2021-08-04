const localStorageKeyName = 'tagList'
type TagListModel = {  //声明变量的类型
  data: string[];
  fetch: () => string[];
  create: (name: string) => 'success' |'duplicated'; //联合类型；
  save:() =>void //(不返回东西)
}
const tagListModel: TagListModel = {
  data:[],
  fetch() {
    this.data= JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') ;
    return this.data
  },
  create(name) {
    if(this.data.indexOf(name)>=0){return 'duplicated'}
    this.data.push(name)
    this.save()
    return name
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    
  }
}
export default tagListModel