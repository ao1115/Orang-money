
import recordListModel from '@/models/recordListModel'
const recordStore = {
  //record store
  recordList: recordListModel.fetch(),
  saveRecord: (record: RecordItem) => {
    return recordListModel.create(record)
  },
}
export default recordStore