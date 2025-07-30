import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';

const AdminNav = () => {
  return (
    <nav className="flex justify-between items-center p-5 shadow-md shadow-black/10">
      <div className="text-2xl font-bold">
        <Link href="/admin">ShopNow Admin Dashboard</Link>
      </div>
   <div className='flex gap-2'>
    <Input type="text" placeholder="Search" />
    <Button variant="outline" className="justify-start gap-4">
  
      Logout
    </Button>
   </div>
    </nav>
  );
}

export default AdminNav