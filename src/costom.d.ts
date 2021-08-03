//全局类型，xxx.d.ts。这个可以直接使用，不需要再引入
//声明一个记录，用ts必须先声明类型
type RecordItem={
  tags:string[],
  notes:string,
  type:string,
  amount:number,
  createdAt?:Date

}