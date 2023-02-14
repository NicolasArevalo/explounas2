import cata from '@assets/cata.jpg'
const persons = [
	{
		id: 1,
		name: 'Lala',
		position: 'Manicurista',
		imageSrc: cata,
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$12.000',
		color: 'Black',
	},
    {
		id: 3,
		name: 'Cata',
		position: 'Fundadora / manicurista',
		imageSrc: cata,
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$12.000',
		color: 'Black',
	},
    {
		id: 2,
		name: 'Marce',
		position: 'Manicurista',
		imageSrc: cata,
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$12.000',
		color: 'Black',
	}
]
export default function Nosotras() {
	return (
		<section id='nosotras'>
			<p class='text-3xl font-bold text-center text-gray-800'>Nuestro equipo</p>

			<div class='flex my-10 items-center flex-row justify-evenly'>
				{persons.map(person => (
					<div class='p-4'>
						<div class='mb-4 text-center opacity-90'>
							<a href='#' class='relative block'>
								<img
									alt={person.name}
									src={person.imageSrc}
									class='mx-auto object-cover rounded-full h-20 w-20 md:h-40 md:w-40 '
								/>
							</a>
						</div>
						<div class='text-center'>
							<p class='text-2xl text-gray-800'>{person.name}</p>
							<p class='text-sm md:text-xl font-light text-gray-500'>{person.position}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
