import tagListModel from '@/models/TagListModel'
const tagStore = {

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
      return tagStore.tagList.filter(tag => tag.id === id)[0];
    },
  };
  
  export default tagStore