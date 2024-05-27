import { Advantages } from './components/Advantages';
import { Service } from './components/ServiceContainer';
import { Values } from './components/Values';
import {
	ADVANTAGES,
	ADVANTAGES_TWO,
	CHARACTERISTICS,
	SERVICES,
	VALUES,
	VALUES_TWO,
} from './const/services';

export const Services = () => {
	return (
		<section>
			<div className='pt-16 flex justify-center flex-col items-center text-left m-auto px-4 md:pl-0 '>
				<h3 className='text-black dark:text-white text-xl md:text-2xl font-semibold'>
					🚀 ¡Impulsa tu negocio con una Landing Page profesional!
				</h3>
				<p className=' text-black dark:text-white text-balance'>
					✨ Invirtiendo <span className='font-medium'>solo USD$150</span>, te
					entregamos una{' '}
					<span className='font-medium'>Landing Page espectacular</span> que
					incluye:
				</p>
				<ul className='text-left py-8 flex flex-col gap-3 text-black dark:text-white md:w-[45%]'>
					<li>
						<span className='font-bold'>🏠 Página de Inicio:</span> La primera
						impresión cuenta, y haremos que sea inolvidable.
					</li>
					<li>
						<span className='font-bold'>📞 Página de Contacto:</span> Facilita
						que tus clientes te encuentren y se comuniquen contigo.
					</li>
					<li>
						<span className='font-bold'>
							👥 Sección &apos;¿Quiénes somos?&apos;:
						</span>{' '}
						Cuenta tu historia y conecta con tu audiencia.
					</li>
					<li>
						<span className='font-bold'>📸 Galería de Imágenes:</span> Muestra
						tus productos o servicios de la mejor manera.
					</li>
					<li>
						<span className='font-bold'>🔗 Enlaces a tus redes sociales:</span>{' '}
						Integra todas tus plataformas y aumenta tu visibilidad.
					</li>
				</ul>
				<p className='text-black dark:text-white text-balance font-semibold text-[18px]'>
					🚀 ¡Pero eso no es todo!
				</p>
				<p className='text-black dark:text-white md:w-[70%] text-center'>
					También ofrecemos una gama completa de servicios web personalizados. ¡
					<a href='#contact' className='text-blue-950 dark:text-blue-500'>
						Contáctanos
					</a>{' '}
					hoy mismo y obtén un presupuesto a medida para tus necesidades!
				</p>
				<p className='text-black dark:text-white text-center font-semibold text-[18px]'>
					🌐 Tu éxito en línea empieza aquí. ¡No pierdas la oportunidad de
					destacar!
				</p>
			</div>

			<Service services={SERVICES} />
			<Values values={VALUES} />
			<Values values={VALUES_TWO} />
			<Advantages
				order='md:order-last'
				advanteges={ADVANTAGES}
				isFirst={true}
			/>
			<Advantages advanteges={ADVANTAGES_TWO} />
			<Service services={CHARACTERISTICS} />
		</section>
	);
};
