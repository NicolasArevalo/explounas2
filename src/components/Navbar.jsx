import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
	{ name: 'Inicio', href: '/' },
	{ name: 'Servicios', href: '#servicios' },
	{ name: 'Productos', href: '#productos' },
	{ name: 'Términos y condiciones', href: '/terminos' },
	{ name: 'Más información', href: '#contacto' },
]

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const explounasClasses = 'font-bold text-2xl'

  console.log(mobileMenuOpen)
	return (
		<div className='px-6 pt-6 lg:px-8 z-20'>
			<nav className='flex items-center justify-between' aria-label='Global'>
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<span className={explounasClasses}>Explouñas</span>
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
				<div className='hidden lg:flex lg:gap-x-12'>
					{navigation.map(item => (
						<a
							key={item.name}
							href={item.href}
							className='text-sm font-semibold leading-6 text-gray-900'
						>
							{item.name}
						</a>
					))}
				</div>
			</nav>
			<Dialog as='div' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<Dialog.Panel
					focus='true'
					className='fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden'
				>
					<div className='flex items-center justify-between'>
						<a href='#' className='-m-1.5 p-1.5'>
							<span className={explounasClasses}>Explouñas</span>
						</a>
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
										className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10'
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
