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

const baseCloudinary = 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040347/explounas/'
const baseCloudinaryNueva = 'https://res.cloudinary.com/dkssc919j/image/upload/v1726586532/explounas/'

const wappBaseLink = 'https://wa.me/573178062298?text=¡Hola%20Explouñas!%20'
const services = [
	{
		id: 1,
		name: 'Tradicionales',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20uñas%20tradicionales.`,
		imageSrc: `${baseCloudinary}Servicios/manicureTradi.jpg`,
		time: '1h',
		tags: ['Manos', 'Pies'],
		price: '$20.000',
		color: 'Black',
	},
	{
		id: 2,
		name: 'Semipermantentes',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20uñas%20semipermanentes.`,
		time: '2h',
		imageSrc: `${baseCloudinaryNueva}Servicios/semipermanente.jpg`,
		tags: ['Manos', 'Pies'],
		price: '$50.000',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Acrílicas',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20uñas%20acrílicas.`,
		imageSrc: `${baseCloudinary}acrilicas_pld9ah.webp`,
		time: '4h',
		tags: ['Manos'],
		price: '$112.000',
		color: 'Black',
	},
	{
		id: 4,
		name: 'Manicura Rusa',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20manicura%20rusa.`,
		time: '1h',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040348/explounas/rusa_skg5ew.webp',
		tags: ['Manos', 'Pies'],
		price: '$18.000',
		color: 'Black',
	},
	{
		id: 5,
		name: 'Semipermanente con baño en acrílico',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20uñas%20semipermanentes%20con%20baño%20en%20acrílico.`,
		time: '2h',
		imageSrc: `${baseCloudinaryNueva}Servicios/semiBanoAcrilico.jpg`,
		tags: ['Manos', 'Pies'],
		price: '$60.000',
		color: 'Black',
	},
	{
		id: 6,
		name: 'Soft gel',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20retoque%20de%20uñas%20acrílicas.`,
		time: '3h',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040345/explounas/sinfondo1_t7etfb.webp',
		tags: ['Manos'],
		price: '$85.000',
		color: 'Black',
	},
	{
		id: 7,
		name: 'Semipermanente hombre',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20uñas%20Press%20on.`,
		time: '2.5h',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040344/explounas/presion_zu4tch.webp',
		tags: ['Manos'],
		price: '$35.000',
		color: 'Black',
	},
	{
		id: 8,
		name: 'Retiro de semipermanentes',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20retiro%20de%20uñas%20semipermanentes.`,
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040352/explounas/retiroSemi_ms1qow.webp',
		tags: ['Manos', 'Pies'],
		price: '$10.000',
		color: 'Black',
	},
	{
		id: 9,
		name: 'Tradicional niñ@s',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20retiro%20de%20uñas%20semipermanentes%20con%20baño%20en%20acrílico.`,
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040347/explounas/retiroBanoAcrilico_bscuma.webp',
		tags: ['Manos', 'Pies'],
		price: '$14.000',
		color: 'Black',
	},
	{
		id: 10,
		name: 'Retiro de uñas artificiales',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20retiro%20de%20acrílicas.`,
		time: '1.5h',
		imageSrc: `${baseCloudinary}retiroAcrilicas_kqy89b.webp`,
		tags: ['Manos'],
		price: '$20.000',
		color: 'Black',
	},
	{
		id: 11,
		name: 'Pedispa + tradicional',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20Pedispa%20+%20tradicional.`,
		time: '1.5h',
		imageSrc: `${baseCloudinaryNueva}Servicios/pedicureTRadi.jpg`,
		tags: ['Pies'],
		price: '$30.000',
		color: 'Black',
	},
	{
		id: 12,
		name: 'Pedispa + semipermanente',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20Pedispa%20+%20semipermanentes.`,
		time: '2h',
		imageSrc: `${baseCloudinaryNueva}Servicios/pedicureSemi.jpg`,
		tags: ['Pies'],
		price: '$60.000',
		color: 'Black',
	},
	{
		id: 13,
		name: 'Pedicure semipermanente',
		href: `${wappBaseLink}Quiero%20agendar%20un%20servicio%20de%20pedicure%20semipermanente.`,
		time: '2.5h',
		imageSrc: 'httphttps://res.cloudinary.com/dkssc919j/image/upload/v1737384087/explounas/Servicios/pediSemi.jpg',
		tags: ['Pies'],
		price: '$60.000',
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
							href={service.href}
							key={service.id}
							className='w-full h-[165px] mx-auto lg:mx-0 flex max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition duration-200 hover:shadow-xl min-w-[280px] md:min-w-[360px]'
						>
							<div>
								<img
									className='rounded-tl rounded-bl h-full w-[120px] object-cover'
									src={service.imageSrc}
									alt='product image'
								/>
							</div>
							<div className='pl-5 pr-1 pt-2.5 pb-3 flex flex-col justify-between w-2/3'>
								<div>
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
								</div>

								<div className='flex justify-end'>
									<span className='text-xl text-gray-700'>{service.price}</span>
								</div>
							</div>
						</a>
					))}
				</div>
				<button
					className='self-center mx-auto w-full md:w-1/2 lg:w-1/4 my-8 text-xl border transition-filter duration-200 border-purple-700 bg-white p-3 rounded-md'
					onClick={handleVerMas}
				>
					Ver {servicesToShow.length > 6 ? 'menos' : 'más'}
				</button>
			</div>
		</section>
	)
}
