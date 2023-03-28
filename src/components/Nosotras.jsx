import cata from '@assets/cata.jpg'
import lala from '@assets/Lala.jpg'
import marce from '@assets/Marce.jpg'
const persons = [
	{
		id: 1,
		name: 'Lala',
		position: 'Manicurista',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040350/explounas/Lala_ar6nyd.webp',
		imageAlt: "Laura manicurista",
		price: '$12.000',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Cata',
		position: 'Fundadora / manicurista',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040349/explounas/cata_vkqz3m.webp',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$12.000',
		color: 'Black',
		order: 'order-[-1]',
	},
/* 	{
		id: 2,
		name: 'Marce',
		position: 'Manicurista',
		imageSrc: marce,
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$12.000',
		color: 'Black',
	}, */
]
export default function Nosotras() {
	return (
		<section id='nosotras' className='relative'>
			<p class='text-3xl font-bold text-center text-gray-800'>Nuestro equipo</p>

			<div class='flex flex-col md:flex-row my-3 md:my-10 items-center justify-evenly'>
				{persons.map(person => (
					<div class={person?.order + ' md:order-unset p-4'}>
						<div class='mb-4 text-center opacity-90'>
							<div class='relative block'>
								<img
									alt={person.name}
									src={person.imageSrc}
									class='mx-auto object-cover rounded-full h-36 w-36 md:h-40 md:w-40 lg:h-64  lg:w-64'
								/>
							</div>
						</div>
						<div class='text-center'>
							<p class='text-2xl text-gray-800'>{person.name}</p>
							<p class='text-sm md:text-xl md:font-light text-gray-500'>
								{person.position}
							</p>
						</div>
					</div>
				))}
			</div>

		</section>
	)
}
