
function Details() {
    return (
        <div className="w-full flex flex-col gap-4">
            {/* title */}
            <div className="uppercase border-b border-gray-400 text-center">
                Details
            </div>

            <div className="flex items-center sm:flex-col">
                <div className="w-1/2 sm:w-full">
                    <p className="lg:text-base uppercase text-xs">Address</p>
                    <p className="lg:text-base font-extralight text-xs">Cape Coral, FL <br/>United States of America</p>
                </div>

                <div className="w-1/2 sm:w-full text-right sm:text-left sm:pt-2">
                    <p className="uppercase text-xs">Phone</p>
                    <a className="text-xs font-light text-blue-400" href="tel:12392034777">(239) 203-4777</a>
                </div>
            </div>

            <div className="text-center sm:text-left">
                <p className="uppercase text-xs">eMail Address</p>
                <a className="text-xs font-light text-blue-400 tracking-widest" href="mailto:james@jameshyatt.me">james@jameshyatt.me</a>
            </div>

        </div>
    )
}

export default Details;