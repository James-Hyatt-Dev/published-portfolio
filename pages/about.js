function About() {
  return (
    <div className='md:w-3/4 md:flex md:flex-col md:mx-auto xl:w-1/2 pb-20'>
        <h1 className='text-center text-6xl font-extrabold opacity-20 sticky top-20 sm:text-7xl md:text-8xl lg:text-9xl'>About</h1>
        <div className="text-center text-gray-400 flex flex-col gap-4 text-xs py-10 sm:text-xl sm:font-extralight lg:gap-6">
            <p className='tracking-wide leading-relaxed lg:text-2xl lg:text-left'>James is passionate of the user's experience, design, and automations. Highly proficient in CSS, Styled Components and Tailwindcss, James has an acute eye for how the user will experience an application.</p>
            <p className='tracking-wide leading-relaxed lg:text-2xl lg:text-left'>Strong comprehension of usability and how the user may interact, James ensures that any element/component is placed properly in a responsive environment.</p>
            <p className='tracking-wide leading-relaxed lg:text-2xl lg:text-left'>In addition to the UX/UI of an application, James is accomplished in React, Nextjs, HTML and Javascript. </p>
            <p className='tracking-wide leading-relaxed lg:text-2xl lg:text-left'>A swift study, James is able to understand new languages and SOP extremely quick, allowing him to integrate into any team of developers without friction.</p>
            <p className='font-bold text-gray-300 text-center'>James has been exposed to the following:</p>
            <div className="flex gap-6 flex-wrap justify-center">
                <p>Ruby</p>
                <p>RoR</p>
                <p>Sintra</p>
                <p>Firebase</p>
                <p>TypeScript</p>
                <p>SQL</p>
                <p>MVC</p>
                <p>OOP</p>
                <p>Server Side Rendering</p>
                <p>API</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Next.js</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>UX/UI Design</p>
                <p>Wordpress</p>
                <p>Shopify</p>
            </div>
        </div>
    </div>
  )
}

export default About