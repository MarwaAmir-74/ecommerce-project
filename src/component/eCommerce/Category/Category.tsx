import { Link } from "react-router-dom"

type Props ={
  title:string
  img:string
  prefix:string
}

function Category({title,img,prefix}:Props) {
   return (
    <div className="flex flex-col items-center space-y-2">
      <Link to={`/categories/products/${prefix}`} >
        <img src={img} alt={title} className="w-32 h-32 object-cover rounded-full border border-gray-300"/>
        <h4 className="text-center font-medium capitalize">{title}</h4>
      </Link>
    </div>
  )
}

export default Category