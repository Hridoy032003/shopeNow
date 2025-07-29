import { Checkbox } from './ui/checkbox'
import { Label } from './ui/label'
import React from 'react'
import { Button } from './ui/button'

const Filters = () => {
  return (
    <div className="flex gap-2 flex-col bg-gray-100 p-5 rounded-md">
     <div className='flex justify-between items-center'>
      <h1 className="text-xl">Filter Products</h1>
      <Button>Clear All</Button>  
     </div>
      <div>
        <div className="flex flex-col">
          <div className="flex flex-col  py-5">
            <h2 className="text-lg ">Types</h2>
            <div className="flex flex-col gap-5 py-5">
              <div className="flex items-center space-x-2">
                <Checkbox id="pent" />
                <Label htmlFor="pent" className="text-sm">
                  Pents and Shorts
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="shirt" />
                <Label htmlFor="shirt">Shirts</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="Tshirt" />
                <Label>Tshirt</Label>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col">
          <div className="flex flex-col  pb-5">
            <h2 className="text-lg ">Discounts</h2>
            <div className="flex flex-col gap-5 py-5">
              <div className="flex items-center space-x-2">
                <Checkbox id="10" />
                <Label htmlFor="10" className="text-sm">
                  10% off
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="20" />
                <Label htmlFor="20">20% off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="30" />
                <Label htmlFor="30">30% off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="40" />
                <Label htmlFor="40">40% off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="50" />
                <Label htmlFor="50">50% off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="60" />
                <Label htmlFor="60">60% off ++</Label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col  pb-5">
            <h2 className="text-lg ">Price</h2>
            <div className="flex flex-col gap-5 py-5">
              <div className="flex items-center space-x-2">
                <Checkbox id="100-200" />
                <Label htmlFor="100-200" className="text-sm">
                  $100 - $200
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="200-300" />
                <Label htmlFor="200-300" className="text-sm">
                  $200 - $300
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="300-400" />
                <Label htmlFor="300-400" className="text-sm">
                  $300 - $400
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="400-500" />
                <Label htmlFor="400-500" className="text-sm">
                  $400 - $500
                </Label>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters