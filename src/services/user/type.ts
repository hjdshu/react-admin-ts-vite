export interface GetParams {
  created_at?:string,
  email?:string,
  gender?:string,
}

interface Userlist {
  name: string,
  sex: string,
}

export interface ReturnParams {
  data: {
    list: Array<Userlist>,
    next_cursor?:string | number,
    total?:string | number,
},
errcode?:string | number,
errmsg?:string,
}