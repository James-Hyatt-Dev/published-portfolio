import Image from 'next/image'
import Logo from '../public/Main/jhdOrange.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Link from 'next/link';

function Header() {
  return (
    <div className="w-full pb-36">
        {/* Logo */}
        <div className="flex w-full py-2 fixed top-0 bg-black bg-opacity-90 items-center sm:justify-around">
            <div className="flex mx-auto sm:w-1/4">
                <Image width={125} src={Logo} alt='james hyatt personal logo containing a single jay and a single h' />
            </div>
            <div className="hidden sm:inline sm:w-3/4">
                <div className="flex justify-around">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/resume'>Resume</Link>
                    <Link href='/work'>Work</Link>
                </div>
                <div className="justify-end flex gap-2 pr-20 py-2">
                    <div className="bg-gradient-to-bl from-orange-300 via-orange-600 to-orange-600 rounded px-4">
                        <a download href='/Main/Resume-CV.pdf'>Download Resume</a>
                    </div>
                    <div className="bg-gradient-to-bl from-orange-300 via-orange-600 to-orange-600 rounded px-4">
                        Call
                    </div>
                </div>
            </div>
        </div>

        {/* navigation */}
        <div className="w-full fixed bottom-0 bg-black bg-opacity-90 flex justify-between z-50 sm:hidden">
            {/* phone icon */}
            <div className="bg-orange-600 bottom-2 left-6 rounded-tr-full w-10 h-20 flex items-center justify-center z-40">
                <div className="flex items-center justify-center" >
                    <PhoneIphoneIcon />
                </div>
            </div>

            {/* mobile navigation */}
            <div className='flex flex-col flex-1 relative '>
                <div className="absolute top-0 h-10 bg-transparent w-full flex items-center justify-around text-xs">
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
                <div className="flex items-center justify-center">
                    <EmailIcon />
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Header