'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Navbar from '@/components/ui/navbar'
import { use, useEffect, useState } from 'react'

export default function ProductDetail({ params }) {
  const { id } = use(params)

  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))

  }, [id])

  if (!product) return 'Loading...'

  return (
    <>
    <Navbar/>
    <Card className="p-4 mt-5 max-w-sm mx-auto border rounded-lg shadow">
      
      <CardHeader className="text-lg font-semibold mb-2">{product.title}</CardHeader>
        <CardContent className="space-y-2">
          {product.images.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt={product.title} className="w-full rounded"/>
          ))}
        </CardContent>      
        <CardFooter className="text-xl">$ {product.price}</CardFooter>
    </Card>
    </>
  )
}
