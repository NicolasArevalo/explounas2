import tradicionales from '@assets/tradicionales.jpg'
import semipermanente from '@assets/semipermanente.jpg'
import acrilicas from '@assets/acrilicas.jpg'
import banoAcrilico from '@assets/banoAcrilico.jpg'
import retiroBanoAcrilico from '@assets/retiroBanoAcrilico.jpg'
import retiroSemi from '@assets/retiroSemi.jpg'
import presion from '@assets/presion.jpg'
import pedicureTradicionalSpa from '@assets/pedicureTradicionalSpa.jpg'
import pedicureSemi from '@assets/pedicureSemi.jpg'
import retiroAcrilicas from '@assets/retiroAcrilicas.jpg'
import rusa from '@assets/rusa.jpg'
import retoqueAcrilicas from '@assets/sinfondo1.jpeg'

import links from '@assets/links'
import { useState } from 'react'
const services = [
	{
		id: 1,
		name: 'Tradicionales',
		href: '#',
		imageSrc: tradicionales,
		time: '1h',
		tags: ['Manos', 'Pies'],
		price: '$16.000',
		color: 'Black',
	},
	{
		id: 2,
		name: 'Semipermantentes',
		href: '#',
		time: '2h',
		imageSrc: semipermanente,
		tags: ['Manos', 'Pies'],
		price: '$45.000',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Acrílicas',
		href: '#',
		imageSrc: acrilicas,
		time: '4h',
		tags: ['Manos'],
		price: '$100.000',
		color: 'Black',
	},
	{
		id: 4,
		name: 'Manicura Rusa',
		href: '#',
		time: '1h',
		imageSrc: rusa,
		tags: ['Manos', 'Pies'],
		price: '$16.000',
		color: 'Black',
	},
	{
		id: 5,
		name: 'Semipermanente con baño en acrílico',
		href: '#',
		time: '2h',
		imageSrc: banoAcrilico,
		tags: ['Manos', 'Pies'],
		price: '$55.000',
		color: 'Black',
	},
	{
		id: 6,
		name: 'Retoque de Acrílicas',
		href: '#',
		time: '3h',
		imageSrc: retoqueAcrilicas,
		tags: ['Manos'],
		price: '$70.000',
		color: 'Black',
	},
	{
		id: 7,
		name: 'Press on',
		href: '#',
		time: '2.5h',
		imageSrc: presion,
		tags: ['Manos'],
		price: '$75.000',
		color: 'Black',
	},
	{
		id: 8,
		name: 'Retiro de semipermanentes',
		href: '#',
		imageSrc: retiroSemi,
		tags: ['Manos', 'Pies'],
		price: '$10.000',
		color: 'Black',
	},
	{
		id: 9,
		name: 'Retiro de semipermanentes con baño en acrílico',
		href: '#',
		imageSrc: retiroBanoAcrilico,
		tags: ['Manos', 'Pies'],
		price: '$15.000',
		color: 'Black',
	},
	{
		id: 10,
		name: 'Retiro de acrílicas',
		href: '#',
		time: '1.5h',
		imageSrc: retiroAcrilicas,
		tags: ['Manos'],
		price: '$20.000',
		color: 'Black',
	},
	{
		id: 11,
		name: 'Pedispa + tradicional',
		href: '#',
		time: '1.5h',
		imageSrc: pedicureTradicionalSpa,
		tags: ['Pies'],
		price: '$25.000',
		color: 'Black',
	},
	{
		id: 12,
		name: 'Pedispa + semipermanente',
		href: '#',
		time: '2h',
		imageSrc: pedicureSemi,
		tags: ['Pies'],
		price: '$55	.000',
		color: 'Black',
	},
]

export default function Servicios() {
	const [servicesToShow, setServicesToShow] = useState(services.slice(0, 6))

	const handleVerMas = () => {
		servicesToShow.length > 6
			? setServicesToShow(services.slice(0, 6))
			: setServicesToShow(services)
	}
	return (
		<section className='mb-16 animate__animated animate__fadeIn' id='servicios'>
			<div className='flex flex-col mx-auto max-w-2xl  px-4 lg:max-w-7xl '>
				<h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>
					Nuestros servicios
				</h2>
				<div
					id='servicios'
					className='mt-6 flex flex-wrap justify-center gap-y-6 gap-x-6 '
				>
					{servicesToShow.map(service => (
						<a
							href='#'
							key={service.id}
							className='w-full h-[165px] mx-auto lg:mx-0 flex max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg min-w-[280px] md:min-w-[360px]'
						>
							<a href='#'>
								<img
									className='rounded-tl rounded-bl h-full w-[120px] object-cover'
									src={service.imageSrc}
									alt='product image'
								/>
							</a>
							<div className='pl-5 pr-1 pt-2.5 pb-3 flex flex-col justify-between w-2/3'>
								<a href='#'>
									<h5 className='text-xl font-semibold tracking-tight text-gray-900'>
										{service.name}
									</h5>
									<span className='bg-purple-100 text-purple-500 text-xs font-semibold inline-block my-1.5 pl-2 pr-2 py-1 mr-2 rounded'>
										⌚{service.time ?? '1h'}
									</span>
									{service.tags.map((tag, i) => (
										<span
											key={i}
											className='bg-purple-100 text-purple-500 text-xs font-semibold inline-block my-1.5 pl-2 pr-2 py-1 mr-2 rounded'
										>
											{tag}
										</span>
									))}
								</a>

								<div className='flex justify-end'>
									<span className='text-xl text-gray-700'>{service.price}</span>
								</div>
							</div>
						</a>
					))}
				</div>
				<button
					className='self-center mx-auto w-full md:w-1/2 lg:w-1/4 my-8 text-xl border border-purple-700 p-3 rounded-md'
					onClick={handleVerMas}
				>
					Ver {servicesToShow.length > 6 ? 'menos' : 'más'}
				</button>
			</div>
		</section>
	)
}
