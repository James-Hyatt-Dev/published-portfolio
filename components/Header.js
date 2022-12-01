import Image from 'next/image'
import Logo from '../public/Main/jhdOrange.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Link from 'next/link';

function Header() {
  return (
    <div className="w-full pb-36">
        {/* Logo */}
        <div className="flex border w-full py-2 fixed top-0 bg-black bg-opacity-90">
            <div className="flex mx-auto">
                <Image width={125} src={Logo} alt='james hyatt personal logo containing a single jay and a single h' />
            </div>
        </div>

        {/* navigation */}
        <div className="w-full fixed bottom-0 bg-black bg-opacity-80 flex justify-between z-50">
            {/* phone icon */}
            <div className="bg-orange-600 bottom-2 left-6 rounded-tr-full w-10 h-20 flex items-center justify-center z-40">
                <PhoneIphoneIcon />
            </div>

            {/* mobile navigation */}
            <div className='flex flex-col flex-1 relative'>
                <div className="absolute top-0 h-10 bg-transparent w-full flex items-center justify-center justify-around">
                    <Link href='/about'>About</Link>
                    <Link href='/resume'>Resume</Link>
                    <Link href='/work'>Work</Link>
                    </div>
                    <div className="absolute bottom-0 h-10 bg-orange-600 w-full flex items-center justify-center">
                        gg
                    </div>


                </div>

            {/* email icon */}
            <div className="bg-orange-600 bottom-2 right-6 rounded-tl-full w-10 h-20 flex items-center justify-center z-40">
                <EmailIcon />
            </div>
           
        </div>
    </div>
  )
}

export default Header