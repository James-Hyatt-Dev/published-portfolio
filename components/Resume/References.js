import React from 'react'

function References() {
  return (
    <div className="w-full flex flex-col gap-4">
        {/* title */}
        <div className="uppercase border-b border-gray-400 text-center">
            References
        </div>

        <div className="flex items-center">
            <div className="flex-1">
                <div className="font-semi-bold text-xs lg:text-base">
                    <p>Cesar Lou</p>
                    <p className='italic font-extralight'>founder, CRM Boost</p>
                </div>
            </div>
            <div className="font-extralight flex-col flex text-right">
                <a className='text-xs lg:text-base' href="mailto:cesarlou@crmboost.com">cesarlou@crmboost.com</a>
                <a className='text-xs lg:text-base text-blue-400 font-light' href="tel:19546085746">(954) 608-5746</a>
            </div>
        </div>

        <div className="flex items-center">
            <div className="flex-1">
                <div className="font-semi-bold text-xs lg:text-base">
                    <p>Benjamin Rodriguez</p>
                    <p className='italic font-extralight'>co-founder, Vision 360 CRM</p>
                </div>
            </div>
            <div className="font-extralight flex-col flex text-right">
                <a className='text-xs lg:text-base' href="mailto:ben@vision360crm.com">ben@vision360crm.com</a>
                <a href="tel:19546813636"><p className='text-xs lg:text-base text-blue-400 font-light' >(954) 681-3636</p></a>
            </div>
        </div>

    </div>
  )
}

export default References