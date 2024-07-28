function About() {
    return (
        <section className="bg-slate-200 dark:bg-slate-600">
            <div className="container flex justify-between gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-slate-900 sm:text-lg dark:text-slate-100 text-2xl">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-blacky dark:text-slate-300">
                        About ICP ZimHub.
                    </h2>
                    <p className="mb-4 text-2xl">
                        We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.
                    </p>
                    <p className="text-2xl">
                        We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="/assets/icp.png" alt="about-us" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src="assets/icp-board.png" alt="about-us" />
                </div>
            </div>
        </section>
    );
}

export default About;
