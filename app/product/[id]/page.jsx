'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Footer from '@/components/ui/footer'
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
    <Card className="p-6 mt-20 max-w-lg mx-auto border rounded-lg shadow">
      
      <CardHeader className="text-2xl font-bold mb-2">{product.title}</CardHeader>
      <CardContent className="mb-4">{product.description}</CardContent>
      <CardFooter className="text-xl">$ {product.price}</CardFooter>
    </Card>
    <Footer/>
    </>
  )
}
