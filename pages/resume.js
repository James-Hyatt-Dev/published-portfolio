
import Name from '../components/Resume/Name'
import Details from '../components/Resume/Details'
import Profile from '../components/Resume/Profile';
import Employment from '../components/Resume/Employment';
import Education from '../components/Resume/Education';
import References from '../components/Resume/References';
import Skills from '../components/Resume/Skills';

function Resume() {
    return (
        <div className='sm:py-20 pb-16'>
            <div className=" flex flex-col gap-8 md:px-10 lg:max-w-6xl lg:mx-auto lg:border p-8 lg:border-gray-700">
                <Name />
                <div className="flex flex-col gap-8 sm:flex-row">
                    <div className="flex flex-col-reverse gap-8 sm:flex-col sm:bg-white sm:bg-opacity-20 sm:p-2 md:p-6 lg:p-10 lg:w-1/3">
                        <Details />
                        {/* <Skills /> */}
                    </div>
                    <div className="flex flex-col gap-8 lg:w-2/3">
                        <Profile />
                        <Employment />
                        <Education />
                        <References />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;