const localStorageKeyName = 'recordList'
const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
   },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  }
}
export {model} 