import cata from '@assets/cata.jpg'
import lala from '@assets/Lala.jpg'
import marce from '@assets/Marce.jpg'
const persons = [
/* 	{
		id: 1,
		name: 'Lala',
		position: 'Manicurista',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1680040350/explounas/Lala_ar6nyd.webp',
		imageAlt: "Laura manicurista",
		price: '$12.000',
		color: 'Black',
	}, */
	{
		id: 3,
		name: 'Cata',
		position: 'Fundadora / manicurista',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1737848419/explounas/Cata_pggs9f.jpg',
		imageAlt: "Imagen de Cata la dueña",
		order: 'order-[-1]',
	},
	{
		id: 2,
		name: 'Angela',
		position: 'Manicurista',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1737848419/explounas/Angela_yhvarj.jpg',
		imageAlt: "Imagen de Angela la manicurista",
	},
	{
		id: 4,
		name: 'Valen',
		position: 'Manicurista',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1737848420/explounas/Valen_u6yfhs.jpg',
		imageAlt: "Imagen de Valen la manicurista",
	},
	{
		id: 5,
		name: 'Lina',
		position: 'Manicurista',
		imageSrc: 'https://res.cloudinary.com/dkssc919j/image/upload/v1737848419/explounas/Lina_zn2omf.jpg',
		imageAlt: "Imagen de Lina la manicurista",
	},
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
									class='mx-auto object-cover rounded-full h-40 w-40 lg:h-64  lg:w-64'
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
