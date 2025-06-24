'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Footer from '@/components/ui/footer'
import Navbar from '@/components/ui/navbar'


function About() {

  return (
    <div>
        <Navbar/>
        <Card className="m-auto mt-10 w-[80%] text-center">
            <CardHeader className="text-2xl font-bold">About Us</CardHeader>
            <CardContent>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim explicabo asperiores corporis deleniti quas aliquid pariatur earum libero aperiam minima fuga eveniet exercitationem sequi obcaecati et, sit alias veritatis commodi, ipsam temporibus fugiat velit! Sapiente voluptatum minima at minus voluptates? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam neque culpa ex. Id ducimus consectetur sapiente dignissimos temporibus, mollitia eaque. Rem magni unde perferendis recusandae quae dicta inventore, nobis iusto obcaecati quis pariatur, enim, iure possimus delectus repellendus nam eius. Sed laudantium quos et possimus enim omnis? Omnis, voluptatibus harum.</p>
            </CardContent>
        </Card>
        <Footer/>
    </div>
  )
}

export default About
