function Team() {
    return (
        <section className="py-10 bg-fixed bg-center bg-cover" style={{backgroundImage: "url('/assets/internet-computer-price-prediction.png')"}}>
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20 bg-opacity-90">
                    <div className="w-full lg:w-1/2">
                        <h2
                            className="font-manrope text-5xl text-purple-400 font-bold leading-[4rem] mb-7 text-center lg:text-left">
                            Our leading, strong & creative team</h2>
                        <p className="text-2xl text-slate-100 mb-16 text-center lg:text-left">These people work on making our
                            product best.</p>
                        <button className="cursor-pointer py-3 px-8 w-60 bg-indigo-600 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-indigo-700 mx-auto lg:mx-0">Join
                            our team</button>
                    </div>
                    <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                            <img src="/assets/samuel.jpg" alt="Team"
                                className="w-56 h-72 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0" />
                            <img src="assets/p2.jpg" alt="Team"
                                className="w-56 h-72 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto" />
                            <img src="assets/icp.png" alt="Team"
                                className="w-56 h-72 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0" />
                            <img src="assets/icp.png" alt="Team"
                                className="w-56 h-72 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto" />
                            <img src="assets/p2.jpg" alt="Team"
                                className="w-56 h-72 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto" />
                            <img src="assets/icp.png" alt="Team"
                                className="w-56 h-72 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team