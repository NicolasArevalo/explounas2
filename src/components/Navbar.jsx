import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const root = 'http://localhost:3000/'
const navigation = [
	{ name: 'Inicio', href: `${root}` },
	{ name: 'Servicios', href: `${root}#servicios` },
	{ name: 'Productos', href: `${root}#productos` },
	{ name: 'Nosotras', href: `${root}#nosotras` },
	{ name: 'Términos y condiciones', href: `${root}terminos` },
]

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const explounasClasses = 'font-bold text-2xl lg:text-4xl'

	return (
		<div className='relative px-6 py-4 lg:px-8 z-40'> {/* fixed inset-x-0 top-0 bg-white/70 */}
			<nav className='flex items-center justify-between' aria-label='Global'>
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<span className={explounasClasses} style={{fontFamily: 'xmas'}}>Explouñas</span>
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Abrir menú</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-8'>
					{navigation.map(item => (
						<a
							key={item.name}
							href={item.href}
							className='text-sm font-semibold leading-6 text-gray-900 py-1 px-2 rounded transition duration-200 hover:bg-purple-100'
						>
							{item.name}
						</a>
					))}
				</div>
			</nav>
			<Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<Dialog.Panel
					focus='true'
					className='fixed top-0 right-0 z-50 shadow-lg overflow-y-auto bg-white px-6 py-6 lg:hidden rounded-lg'
				>
					<div className='flex items-center justify-between '>
						<div></div>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Cerrar menú</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										className='-mx-3 text-right block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</div>
	)
}
