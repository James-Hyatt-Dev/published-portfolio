import Image from 'next/image'
import James from '../public/Main/james_photo.png'

function HomePage() {
  return (
    <div className='pb-20'>
        <h1 className='text-center text-6xl font-extrabold opacity-20 sticky top-20 sm:text-7xl md:text-8xl lg:text-9xl'>Hi!</h1>

        <div className="flex gap-4 justify-center text-xl sm:text-4xl items-center text-gray-400 sm:pt-20 xl:text-6xl pt-8">
            <h3>Designer.</h3>
            <h3>Programmer.</h3>
            <h3>Person.</h3>
            
            
        </div>

        <div className="flex justify-center">
            <h3 className='text-4xl font-bold text-gray-400 sm:text-7xl sm:pb-10 lg:text-9xl'>James Hyatt</h3>
        </div>

        <div className=' flex flex-col justify-center md:flex-row-reverse md:items-center'>
            <div className="w-[200px] flex justify-center mx-auto sm:w-[250px] sm:pb-10 lg:w-[400px]">
                <Image src={James} alt='' priority/>
            </div>
            <div className="flex justify-center flex-col text-gray-400 text-xs sm:text-xl text-center tracking-wider leading-relaxed gap-2 sm:max-w-2xl lg:max-w-5xl sm:mx-auto md:text-left md:gap-4 lg:text-3xl lg:font-extralight">
                <p>Multidisciplinary designer/developer who designs, develops, messes up and occasionally breaks things.</p>
                <p>Product Design Director on the team behind <a className='text-orange-600 font-semibold lg:font-normal' href="https://score3id.com" target='none'>S3ID.com</a></p>
                <p>Less moody in real life. ✌️</p>
            </div>
        </div>
    </div>
  )
}

export default HomePage