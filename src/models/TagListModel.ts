const localStorageKeyName = 'tagList'
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {  //声明变量的类型
  data: Tag[];
  fetch: () => Tag[];
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
    const names = this.data.map(item => item.name); //把data里面的name都取出来存到names
    if(names.indexOf(name)>=0){return 'duplicated'}
    this.data.push({ id: name, name: name })
    this.save()
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    
  }
}
export default tagListModel