import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
Vue.use(Vuex)


const localStorageKeyName = 'recordList';
const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
  },
  mutations: {
    
    fetchRecords(state,record) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
      
    },
    saveRecords(state) {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
    },
    createRecord(state,record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
     store.commit('saveRecords')
    },
  },
  actions: {
  },
  modules: {
  }
})
export default store