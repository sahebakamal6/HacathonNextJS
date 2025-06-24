'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Footer from "@/components/ui/footer"
import Navbar from "@/components/ui/navbar"

function Service() {
  return (
    <div>
      <Navbar/>
      <div className="w-full h-full flex flex-col justify-around items-center gap-4">
      <Card>
        <CardHeader className="text-2xl font-bold">Services</CardHeader>
        <CardContent>
            <p><span className="font-bold">1:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas tempora, alias ab suscipit vel laudantium voluptatem laboriosam! Ad, veritatis et ipsa non autem facere tempore ipsum iure voluptates debitis vel velit consectetur neque repellat magni, vitae similique nulla repudiandae minus. Iusto reprehenderit vero sapiente soluta sunt eum ipsum sed.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <p><span className="font-bold">2:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas tempora, alias ab suscipit vel laudantium voluptatem laboriosam! Ad, veritatis et ipsa non autem facere tempore ipsum iure voluptates debitis vel velit consectetur neque repellat magni, vitae similique nulla repudiandae minus. Iusto reprehenderit vero sapiente soluta sunt eum ipsum sed.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <p><span className="font-bold">3:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas tempora, alias ab suscipit vel laudantium voluptatem laboriosam! Ad, veritatis et ipsa non autem facere tempore ipsum iure voluptates debitis vel velit consectetur neque repellat magni, vitae similique nulla repudiandae minus. Iusto reprehenderit vero sapiente soluta sunt eum ipsum sed.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <p><span className="font-bold">4:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas tempora, alias ab suscipit vel laudantium voluptatem laboriosam! Ad, veritatis et ipsa non autem facere tempore ipsum iure voluptates debitis vel velit consectetur neque repellat magni, vitae similique nulla repudiandae minus. Iusto reprehenderit vero sapiente soluta sunt eum ipsum sed.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <p><span className="font-bold">5:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas tempora, alias ab suscipit vel laudantium voluptatem laboriosam! Ad, veritatis et ipsa non autem facere tempore ipsum iure voluptates debitis vel velit consectetur neque repellat magni, vitae similique nulla repudiandae minus. Iusto reprehenderit vero sapiente soluta sunt eum ipsum sed.</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <p><span className="font-bold">6:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptas tempora, alias ab suscipit vel laudantium voluptatem laboriosam! Ad, veritatis et ipsa non autem facere tempore ipsum iure voluptates debitis vel velit consectetur neque repellat magni, vitae similique nulla repudiandae minus. Iusto reprehenderit vero sapiente soluta sunt eum ipsum sed.</p>
        </CardContent>
      </Card>
      </div>
      <Footer/>
    </div>
  )
}

export default Service
