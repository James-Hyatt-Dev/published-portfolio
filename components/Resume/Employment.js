import React from 'react'

function Employment() {
  return (
    <div className="w-full flex flex-col gap-4">
        {/* title */}
        <div className="uppercase border-b border-gray-400 text-center">
            Employment History
        </div>

        <div className="flex items-center tracking-widest">
            <div className='flex-1'>
                <h2 className='text-xs lg:text-base lg:tracking-wide  font-bold'>Font-End Developer</h2>
                <p className='text-xs  lg:text-base lg:tracking-wide font-extralight'>JT Clip Trust</p>
                <p className='text-xs  lg:text-base lg:tracking-wide font-extralight italic'>Oct 2021 - Present</p>
            </div>
            <p className='text-xs lg:text-base lg:tracking-wide'>Cape Coral, FL</p>
        </div>

        <div className="flex items-center tracking-widest">
            <div className='flex-1'>
                <h2 className='text-xs lg:text-base lg:tracking-wide  font-bold'>Font-End Developer</h2>
                <p className='text-xs  lg:text-base lg:tracking-wide font-extralight'>Score 3 ID</p>
                <p className='text-xs  lg:text-base lg:tracking-wide font-extralight italic'>Oct 2021 - Present</p>
            </div>
            <p className='text-xs lg:text-base lg:tracking-wide'>Cape Coral, FL</p>
        </div>

        <div className="flex items-center tracking-widest">
            <div className='flex-1'>
                <h2 className='text-xs  lg:text-base lg:tracking-wide  font-bold'>Font-End Developer</h2>
                <p className='text-xs   lg:text-base lg:tracking-wide font-extralight'>PetCoin</p>
                <p className='text-xs   lg:text-base lg:tracking-wide font-extralight italic'>Nov 2022 - Nov 2022</p>
            </div>
            <p className='text-xs lg:text-base lg:tracking-wide'>Fort Myers, FL</p>
        </div>
    </div>
  )
}

export default Employment