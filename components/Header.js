import Image from 'next/image'
import Logo from '../public/Main/jhdOrange.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Link from 'next/link';

function Header() {
  return (
    <div className="w-full pb-36 z-50  justify-center">
        {/* Logo */}
        <div className="flex w-full  py-2 fixed top-0 bg-black bg-opacity-90 items-center z-40 ">
            <div className=" w-3/4 flex mx-auto sm:items-center ">
                <div className="flex flex-1 justify-center lg:justify-start">
                    <Image width={125} src={Logo} alt='james hyatt personal logo containing a single jay and a single h' />
                </div>
                <div className="hidden sm:flex sm:items-center gap-20 sm:gap-4  sm:flex-end sm:flex-col xl:flex-row">
                    <div className="flex justify-center gap-8 sm:gap-8">
                        <Link href='/'>Home</Link>
                        <Link href='/about'>About</Link>
                        <Link href='/work'>Work</Link>
                        <Link href='/resume'>Resume</Link>
                    </div>
                    <div className="flex gap-2 pr-20 py-2  sm:pr-0 sm:w-full sm:justify-end">
                        <div className="bg-gradient-to-bl from-orange-300 via-orange-600 to-orange-600 rounded px-4 md:px-10 md:py-2">
                            <a download href='/Main/Resume-CV.pdf'>Download Resume</a>
                        </div>
                        <div className="bg-gradient-to-bl from-orange-300 via-orange-600 to-orange-600 rounded px-4 md:px-10 md:py-2">
                            <a href=" tel:12392034777">Call</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* navigation */}
        <div className="w-full fixed bottom-0 bg-black bg-opacity-90 flex justify-between z-50 sm:hidden">
            {/* phone icon */}
            <div className="bg-orange-600 bottom-2 left-6 rounded-tr-full w-10 h-20 flex items-center justify-center z-40">
                <a href="tel:12392034777"><div className="flex items-center justify-center" ><PhoneIphoneIcon className='text-white'  /></div></a>
            </div>

            {/* mobile navigation */}
            <div className='flex flex-col flex-1 relative'>
                <div className="absolute h-8 mt-2 bg-transparent w-full flex items-center justify-around text-xs text-orange-600">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/resume'>Resume</Link>
                    <Link href='/work'>Work</Link>
                </div>
                <div className="absolute bottom-0 h-10 bg-orange-600 w-full flex items-center justify-center">
                    <a download href='/Main/Resume-CV.pdf'>Download Resume</a>
                </div>
                </div>

            {/* email icon */}
            <div className="bg-orange-600 bottom-2 right-6 rounded-tl-full w-10 h-20 flex items-center justify-center z-40">
                <a href="mailto:james@jameshyatt.me"><div className="flex items-center justify-center"><EmailIcon className='text-white' /></div></a>
            </div>
           
        </div>
    </div>
  )
}

export default Header







// call and email buttons mobile nav