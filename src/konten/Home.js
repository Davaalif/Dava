// import App from '../App'
import Navbar from '../komponen/Navbar'
import Footer from '../komponen/Footer'
import Bunga1 from '../img/Bunga1.jpg'
import bunga2 from '../img/bunga2.jpg'
import bunga4 from '../img/bunga4.jpg'
import bunga3 from '../img/bunga3.jpg'
import { useState } from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'

// import { useState } from 'react'
// import { StarIcon } from '@heroicons/react/solid'
// import { RadioGroup } from '@headlessui/react'

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: Bunga1,
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: bunga2,
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: bunga4,
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: bunga3,
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <>
    <Navbar />

<header className="bg-white shadow">
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
  </div>
</header>

<main>
  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    {/* Replace with your content */}

    <div className="px-4 py-6 sm:px-0">
      {/* Test konten */}
      <div className="bg-white">
<div className="pt-6">
<nav aria-label="Breadcrumb">
  
</nav>

{/* Image gallery */}
<div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
  <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
    <img
      src={product.images[0].src}
      alt={product.images[0].alt}
      className="w-full h-full object-center object-cover"
    />
  </div>
  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
      <img
        src={product.images[1].src}
        alt={product.images[1].alt}
        className="w-full h-full object-center object-cover"
      />
    </div>
    <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
      <img
        src={product.images[2].src}
        alt={product.images[2].alt}
        className="w-full h-full object-center object-cover"
      />
    </div>
  </div>
  <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
    <img
      src={product.images[3].src}
      alt={product.images[3].alt}
      className="w-full h-full object-center object-cover"
    />
  </div>
</div>

{/* Product info */}

</div>
</div>
      
      <div/>
    </div>
    {/* /End replace */}
  </div>
</main>

<Footer />
    </>
  )
    
}