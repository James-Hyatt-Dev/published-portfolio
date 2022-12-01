import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/Main/jhdOrange.png'

function Header() {
  return (
    <div className="w-full bg-black bg-opacity-80 flex justify-center border">
        <div className="border">
            <Image width={100} src={Logo} alt='james hyatt personal j h logo' />
        </div>
        {/* navigation */}

        <div className="w-full border flex justify-between fixed bottom-0">
            {/* call icon */}
            <div className="bg-orange-600 rounded-tr-full w-20 h-10">
    
            </div>
        </div>
    </div>
    )
}

export default Header