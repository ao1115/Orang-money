import tagListModel from '@/models/TagListModel'
import recordListModel from '@/models/recordListModel'

//创建window.store，全局变量全部挂到上面，减少window依赖

const store={
  //record store
    recordList: recordListModel.fetch(),
    saveRecord: (record: RecordItem) => {
      return recordListModel.create(record)
    },
  
  
  //tag store
    tagList: tagListModel.fetch(), //在window上声明
    createTag: (name: string) => {
      const message = tagListModel.create(name)
      if (message === 'duplicated') {
        window.alert('标签名重复')
      } else if (message === 'success') {
        window.alert('创建成功')
      }
    },
    removeTag: (id: string) => {
      if (tagListModel.remove(id)) {
        return true
      } else {
        return false
      }
    },
    updateTag: (id: string, name: string) => {
      return tagListModel.update(id, name)
    },
    findTag: (id: string) =>{
      return store.tagList.filter(tag => tag.id === id)[0];
    },
  };
  
  export default store
  
  