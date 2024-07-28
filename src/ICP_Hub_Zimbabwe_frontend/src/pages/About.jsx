function About() {
    return (
      <section id="about" className="bg-slate-200 dark:bg-slate-600 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/assets/group-photo.jpg')" }}
        ></div>

        <div className="container relative flex justify-between gap-16 items-center py-8 px-4 mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 bg-scroll">
          <div className="font-light text-slate-900 sm:text-lg dark:text-slate-100 text-2xl">
            <h2 className="mb-8 text-6xl tracking-tight font-extrabold text-blacky dark:text-slate-300">
              About ICP ZimHub.
            </h2>
            <p className="mb-4 text-2xl font-serif font-semibold tracking-wider leading-loose text-justify">
              The Internet Computer Protocol (ICP) heralds a groundbreaking
              series of protocols that catalyze decentralized synergy between
              data centers across the globe. Its audacious mission sets its
              sights on superseding conventional cloud providers, cultivating an
              equitable and fortified global computational infrastructure. The
              ICP token is the engine of this avant-garde movement, underpinning
              governance, rewarding community contributors, and enabling smooth
              transactions. Embrace ICP for a tomorrow where the web belongs to
              everyone, decentralised and barrier-free. Within the spectrum of
              public decentralized smart contract networks, ICP holds an
              unrivalled position. Boasting unmatched on-chain data storage
              cost-effectiveness coupled with state-of-the-art tech, ICP’s smart
              contracts – termed ‘canisters’ – equip you to seamlessly host and
              automate a vast range of dapps and services. Step into the next
              epoch of decentralized dynamism with the unparalleled prowess of
              ICP.
            </p>
            <p className="text-2xl font-serif font-semibold">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/assets/icp.png"
              alt="about-us"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="assets/icp-board.png"
              alt="about-us"
            />
          </div>
        </div>
      </section>
    );
}

export default About;
