
//创建window.store，全局变量全部挂到上面，减少window依赖

import recordStore from "@/store/recordStore";
import tagStore from "@/store/tagStore";

const store={
  ...recordStore,
  ...tagStore
  };
  
  export default store
  
  