import Image from 'next/image'
import PetCoin from '../public/PetCoin/PetCoin.png'
import PetCoinA from '../public/PetCoin/PetCoinA.png'
import PetCoin1 from '../public/PetCoin/PetCoin1.png'
import PetCoinB from '../public/PetCoin/PetCoinB.png'
import PetCoin2 from '../public/PetCoin/PetCoin2.png'
import PetCoinE from '../public/PetCoin/PetCoinE.png'
import PetCoin6 from '../public/PetCoin/PetCoin6.png'
import PetCoinD from '../public/PetCoin/PetCoinD.png'

import NewPet from '../public/NewPetCoin/NewPet.png'
import NewPetA from '../public/NewPetCoin/NewPetA.png'
import NewPet1 from '../public/NewPetCoin/NewPet1.png'
import NewPetB from '../public/NewPetCoin/NewPetB.png'
import NewPet2 from '../public/NewPetCoin/NewPet2.png'
import NewPetD from '../public/NewPetCoin/NewPetD.png'
import NewPet5 from '../public/NewPetCoin/NewPet5.png'
import NewPetH from '../public/NewPetCoin/NewPetH.png'
import Head from "next/head"


function work() {
  return (
    <div className='pb-24 z-40'>
      <Head>
        <title>James Hyatt | Front End Developer</title>
      </Head>
      {/* title */}
      <div className='md:w-3/4 md:flex md:flex-col md:mx-auto xl:w-1/2 sticky top-20 z-30'>
          <h1 className='text-center text-6xl font-extrabold opacity-20 sticky top-20 sm:text-7xl md:text-8xl lg:text-9xl'>Work</h1>
      </div>

      {/* sample petcoin */}
      <div className="flex flex-col gap-20">
        <div className="w-full flex flex-col gap-4 pt-8 md:grid md:grid-cols-2 xl:gap-20 xl:pr-12 xl:max-w-7xl xl:mx-auto xl:pt-32 ">
          {/* set one */}
          <div className=" relative">
            <p className='text-center'>PetCoin Original</p>
            <Image className='px-2' width={667} src={PetCoin} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36' src={PetCoinA} alt='' />
          </div>  

          <div className=" relative">
            <p className='text-center'>PetCoin Refreshed</p>
            <Image className='px-2' width={667} src={NewPet} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36'  src={NewPetA} alt='' />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-2 xl:gap-20 xl:pr-12 xl:max-w-7xl xl:mx-auto xl:pt-32">
          {/* set two */}
          <div className=" relative">
            <p className='text-center'>PetCoin Original</p>
            <Image className='px-2' width={667} src={PetCoin1} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36'  src={PetCoinB} alt='' />
          </div>  

          <div className=" relative">
            <p className='text-center'>PetCoin Refreshed</p>
            <Image className='px-2' width={667} src={NewPet1} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36'  src={NewPetB} alt='' />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-2 xl:gap-20 xl:pr-12 xl:max-w-7xl xl:mx-auto xl:pt-32">
          {/* set three */}
          <div className=" relative">
            <p className='text-center'>PetCoin Original</p>
            <Image className='px-2' width={667} src={PetCoin2} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36'  src={PetCoinE} alt='' />
          </div>  

          <div className=" relative">
            <p className='text-center'>PetCoin Refreshed</p>
            <Image className='px-2' width={667} src={NewPet2} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36'  src={NewPetD} alt='' />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-2 xl:gap-20 xl:pr-12 xl:max-w-7xl xl:mx-auto xl:pt-32">
          {/* set four */}
          <div className=" relative">
            <p className='text-center'>PetCoin Original</p>
            <Image className='px-2' width={667} src={PetCoin6} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36'  src={PetCoinD} alt='' />
          </div>  

          <div className=" relative">
            <p className='text-center'>PetCoin Refreshed</p>
            <Image className='px-2' width={667} src={NewPet5} alt='' />
            <Image className='absolute top-12 right-4 rounded-md border-4 border-orange-600 w-20 sm:w-32 sm:top-20 sm:right-8 md:w-20 md:top-12 md:right-4 lg:w-28 lg:right-4 xl:-right-10 xl:-top-10 xl:w-36'  src={NewPetH} alt='' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default work