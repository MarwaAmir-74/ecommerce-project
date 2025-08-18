export type TProduct ={
   id: number;
  title: string;
  price: number;
  cat_prefix?: string;
  img: string;
  quantity?: number;
  max: number;
  isLiked?:boolean
  isAuthenticated?:boolean
}
export type TResponse ={
    id:number
    title:string
    prefix:string 
    img:string

}[]
export type TLoading ='idle'|'pending'|'succeeded'|'failed'

export type TCartState={
  items:{[key:string]:number}
  productFullInfo:TProduct[]
  loading:TLoading
  error:string | null
}

export type TOrderItem={
  createdAt: string
    items:TProduct[]
    id:number
    userId:number
    subTotal:number
}