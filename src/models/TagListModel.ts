const localStorageKeyName = 'tagList'
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {  //声明变量的类型
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; //联合类型；
  update:(id:string,name:string) =>'success' | 'duplicated' | 'not found';
  save:() =>void ;//(不返回东西);
}
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data
  },
  create(name) {
    const names = this.data.map(item => item.name); //把data里面的name都取出来存到names
    if (names.indexOf(name) >= 0) { return 'duplicated' }
    this.data.push({ id: name, name: name })
    this.save()
    return 'success';
  },
  update(id: string, name: string) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name)
      if (names.indexOf(name) >= 0) {
        return 'duplicated'
      } else {
        const tag = this.data.filter(item => item.id === id)[0] //找出所有id
        tag.name = name
        this.save()
        return 'success'
      }
    } else { return 'not found' }
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}
export default tagListModel;