'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);

    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Navbar/>
    <form className='text-center' onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd' }}>
      <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>

      <input className='rounded-sm border-2'
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />

      <input
    className='rounded-sm border-2'     type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      />

      <textarea className='rounded-sm border-2'
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        rows="4"
        style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
      ></textarea>

      <Button type="submit" className="px-8 cursor-pointer">Send</Button>
    </form>
    <Footer/>
    </>
  );
}
