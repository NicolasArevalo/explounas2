import { useState } from 'react'
import './commonstyles.css'

import producto1 from '@assets/products/producto1.jpg'
import producto2 from '@assets/products/producto2.jpg'
import producto3 from '@assets/products/producto3.jpg'
import producto4 from '@assets/products/producto4.jpg'
import producto5 from '@assets/products/producto5.jpg'
import producto6 from '@assets/products/producto6.jpg'
import producto7 from '@assets/products/producto7.jpg'
import producto8 from '@assets/products/producto8.jpg'
import producto9 from '@assets/products/producto9.jpg'
import producto10 from '@assets/products/producto10.jpg'
import producto11 from '@assets/products/producto11.jpg'
import producto12 from '@assets/products/producto12.jpg'
import producto13 from '@assets/products/producto13.jpg'

const products = [
	{
		id: 5,
		name: 'Exfoliante',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20un%20tarrito%20de%20exfoliante. 🥰',
		imageSrc: producto5,
		price: '$12.000',
		tag: 'Estética',
	},

	{
		id: 6,
		name: 'Aceite de macadamia',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20un%20aceite%20de%20macadamia. 😋',
		imageSrc: producto6,
		price: '$5.000',
		tag: 'Salud',
	},
	{
		id: 1,
		name: 'Colágeno',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20un%20tarrito%20de%20colágeno. 🙂',
		imageSrc: producto1,
		price: '$25.000',
		tag: 'Salud',
	},
	{
		id: 2,
		name: 'Lesmikot (antihongos)',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20un%20antihongos. 🤕',
		imageSrc: producto2,
		price: '$20.000',
		tag: 'Salud',
	},
	{
		id: 3,
		name: 'Lima',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20lima. 🤠',
		imageSrc: producto3,
		price: '$2.000',
		tag: 'Estética',
	},
	{
		id: 4,
		name: 'Lima lavable',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20lima%20lavable. 🤠',
		imageSrc: producto4,
		price: '$2.000',
		tag: 'Estética',
	},

	{
		id: 7,
		name: 'Base fortalecedora',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20base%20fortalecedora. 💅🏻',
		imageSrc: producto7,
		price: '$7.000',
		tag: 'Salud',
	},

	{
		id: 8,
		name: 'Base nutritiva',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20base%20nutritiva. 💅🏻',
		imageSrc: producto8,
		price: '$7.000',
		tag: 'Salud',
	},
	{
		id: 9,
		name: 'Base uñas fuertes',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20%20una%20base%20uñas%20fuertes. 💅🏻',
		imageSrc: producto9,
		price: '$7.500',
		tag: 'Salud',
	},
	{
		id: 10,
		name: 'Base antiescamación',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20base%20antiescamación. 💅🏻',
		imageSrc: producto10,
		price: '$7.000',
		tag: 'Salud',
	},
	{
		id: 11,
		name: 'Piedra pómez',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20piedra%20pómez. 🪨',
		imageSrc: producto11,
		price: '$2.000',
		tag: 'Estética',
	},
	{
		id: 12,
		name: 'Base regeneradora',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20base%20regeneradora. 🧃',
		imageSrc: producto12,
		price: '$14.000',
		tag: 'Salud',
	},
	{
		id: 13,
		name: 'Base recuperadora',
		href: 'https://wa.me/573178062298?text=¡Hola%20Explounas!%20Quiero%20comprar%20una%20base%20recuperadora. 🧃',
		imageSrc: producto13,
		price: '$14.000',
		tag: 'Salud',
	},
]

export default function Productos() {
	const [productsToShow, setProductsToShow] = useState(products.slice(0, 5))

	const handleVerMas = () => {
		productsToShow.length > 5
			? setProductsToShow(products.slice(0, 5))
			: setProductsToShow(products)
	}
	return (
		<section id='productos' className='mb-16'>
			<div className='flex flex-col mx-auto max-w-2xl  px-4 lg:max-w-7xl '>
				<h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
					Nuestros productos
				</h2>

				<div className='mt-6 grid grid-cols-2 gap-y-6 gap-x-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 '>
					{productsToShow.map(product => {
						return (
							<div key={product.id} className='group relative'>
								<div className='min-h-80 aspect-w-1  w-full overflow-hidden rounded-md group-hover:opacity-75 transition-opacity duration-200 lg:aspect-none lg:h-85'>
									<img
										src={product.imageSrc}
										alt={product.name}
										className='h-full w-full object-cover object-center lg:h-full lg:w-full'
									/>
								</div>
								<div className='mt-4 flex justify-between'>
									<div>
										<h3 className='text-sm text-gray-700'>
											<a href={product.href}>
												<span aria-hidden='true' className='absolute inset-0' />
												{product.name}
											</a>
										</h3>
										<p className='mt-1 text-sm text-gray-500'>{product.tag}</p>
									</div>
									<p className='text-sm font-medium text-gray-900'>
										{product.price}
									</p>
								</div>
							</div>
						)
					})}
				</div>

				<button
					className='btn-vermas self-center mx-auto w-full md:w-1/2 lg:w-1/4 my-8 text-xl border transition-filter duration-200 border-purple-700 bg-white p-3 rounded-md '
					onClick={handleVerMas}
				>
					Ver {productsToShow.length > 5 ? 'menos' : 'más'}
				</button>
			</div>
		</section>
	)
}
