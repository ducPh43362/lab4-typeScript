import { useEffect, useState } from 'react'
import instance from '~/apis';
import { Tproduct } from '~/interfaces/product'

const ProductList = () => {
  const [productList, setProducts] = useState<Tproduct[]>([]);
  useEffect(() => {
    (async () => {
      const {data} = await instance.get<Tproduct[]>(`/products`)
      console.log(data)
      setProducts(data)
    })()
  })
  return (
    <>
    <table>
      <tbody>
      {productList.map((product,index) => (
          <tr key={index}>
          <td>{product.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default ProductList