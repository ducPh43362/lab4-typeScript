import { useEffect, useState } from 'react'
import './ProductList.scss'
import instance from '~/apis'
import { Tproduct } from '~/interfaces/product'
import { NavLink } from 'react-router-dom'

const ProductList = () => {
  const [productList, setProducts] = useState<Tproduct[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get<Tproduct[]>(`/products`)
      console.log(data)
      setProducts(data)
    })()
  }, [])
  return (
    <>
      <main>
        <h2>Danh sách sản phẩm</h2>
        <div className='List-product'>
          {productList.map((product, index) => (
            <div key={index} className='product-item'>
              <div className='wrap-img'>
                <NavLink className={`img`} to={``}><img src={product.images[0]} alt={product.title} /></NavLink>
              </div>
              <NavLink className={`title`} to={``}><h4 className='title'>{product.title}</h4></NavLink>
              <h3 className='price'>${product.price}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default ProductList
