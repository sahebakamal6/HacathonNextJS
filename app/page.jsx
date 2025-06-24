'use client'

import Navbar from "@/components/ui/navbar";
import { Card, CardContent,CardHeader, CardFooter  } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/ui/footer";

export default function Home() {
  const [products, setProduct] = useState([])

  useEffect(()=> {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => setProduct(data.products))
  }, [])

  if(products.length === 0) return 'Loading...'

  return (
    <div className="m-0 p-0 w-full h-full">
      <Navbar/>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map(item => 
        <Link key={item.id} href={`product/${item.id}`}>
          <Card className="cursor-pointer p-4 hover:shadow-lg">
            <CardHeader className="font-bold text-lg">
              {item.title}
            </CardHeader>
            <CardContent><p>{item.description}</p></CardContent>
          </Card>
        </Link>
      )}
    </div>
    <Footer/>
    </div>
  )
}