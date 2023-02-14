import tradicionales from '@assets/tradicionales.jpg'
import semipermanente from '@assets/semipermanente.jpg'
import acrilicas from '@assets/acrilicas.jpg'
import producto4 from '@assets/producto4.jpg'

const services = [
	{
		id: 1,
		name: 'Tradicionales',
		href: '#',
		imageSrc: tradicionales,
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$12.000',
		color: 'Black',
	},
	{
		id: 2,
		name: 'Semipermantentes',
		href: '#',
		imageSrc:semipermanente,
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$30.000',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Acrílicas',
		href: '#',
		imageSrc:acrilicas,
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$25.000',
		color: 'Black',
	},
/* 	{
		id: 4,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	}, */
]

export default function Servicios() {
	return (
		<section className='mb-16' id='servicios'>
			<div className='mx-auto max-w-2xl px-4 npm run  sm:px-6 lg:max-w-7xl lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
					Nuestros servicios
				</h2>

				<div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
					{services.map(service => (
						<article key={service.id}>
							<div className='flex flex-nowrap w-76 max-h-56 overflow-hidden bg-white rounded-lg shadow-lg'>
								<div className='w-1/3 object-cover'> <img src={service.imageSrc} alt="" className='h-full'/></div>
								<div className='w-2/3 p-4'>
									<h3 className='text-2xl font-bold text-gray-900'>
										{service.name}
									</h3>
									<p className='mt-2 text-sm text-gray-600 flex gap-1'>
										<span className='px-3 py-1 text-base rounded-full text-white bg-indigo-500'>
											Manos
										</span>
										<span className='px-3 py-1 text-base rounded-full text-white bg-indigo-500'>
											Pies
										</span>
									</p>
									<div className='flex justify-between mt-3 item-center'>
										<h1 className='text-xl font-bold text-gray-700'>
											{service.price}
										</h1>
										<button className='px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded'>
											Agendar
										</button>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
