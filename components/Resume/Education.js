import React from 'react'

function Education() {
  return (
    <div className="w-full flex flex-col gap-4">
        {/* title */}
        <div className="uppercase border-b border-gray-400 text-center">
            Education
        </div>

        <div className="flex items-center tracking-widest">
            <div className='flex-1'>
                <h2 className='text-xs font-bold lg:text-base'>FlatIron Schools</h2>
                <p className='text-xs lg:text-base font-extralight'>Software Engineering</p>
                <p className='text-xs lg:text-base font-extralight italic'>Jan 2021 - Jun 2021</p>
            </div>
            <p className='text-xs'>New York, NY</p>
        </div>
        <div className="pt-2">
            <p className='text-xs font-extralight tracking-wider lg:text-base'>Full-Time Software Engineering online boot-camp focusing on both Front-end and
                Back-end development. Key areas of study include:
            </p>
            <div className="pt-2 flex">
                <div className='w-1/2 text-sm lg:text-base'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </div>
                <div className='w-1/2 text-sm lg:text-base'>
                    <li>Sinatra</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Education