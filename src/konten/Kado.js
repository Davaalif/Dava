// import App from '../App'
import Navbar from '../komponen/Navbar'
import Footer from '../komponen/Footer'
import kado1 from '../img/kado1.jpg'
import kado2 from '../img/kado2.jpg'
import kado3 from '../img/kado3.jpg'
import kado4 from '../img/kado4.jpg'


const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: kado1,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Taddymawar1',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: kado2,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Taddymawar2',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: kado3,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Love',
    },
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: kado4,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Chocolate',
    },
    // More products...
  ]


export default function Example() {
    return (

<>
<Navbar />




      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      </>
    )

}
