//全局类型，xxx.d.ts。这个可以直接使用，不需要再引入
//声明一个记录，用ts必须先声明类型
type RecordItem={
  tags:string[],
  notes:string,
  type:string,
  amount:number,
  createdAt?:Date

}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {  //声明变量的类型
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated'; //联合类型；
  update:(id:string,name:string) =>'success' | 'duplicated' | 'not found';
  remove: (id: string) => boolean;
  save:() =>void ;//(不返回东西);
}

interface Window{
  tagList:Tag[]
}