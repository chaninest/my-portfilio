function Aboutme() {
  return (
    <div id='about' className="hero bg min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse items-center lg:items-start">
        <img
          src="https://i.pinimg.com/736x/a1/d9/ae/a1d9ae6d89a29a400236f9d895e1aa2d.jpg"
          className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
          alt="About me"
        />
        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-black">Box Office News!</h1>
          <p className="py-6 font-thin text-black">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="border-dashed border-4 w-full max-w-xs h-[180px] text-center pt-[25px] rounded-lg text-xl font-bold text-black border-slate-600">
              <p className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                Education
              </p>
              <p className="font-thin">King Mongkut's University of <br/>Technology North Bangkok</p>
            </div>

            <div className="border-dashed border-4 w-full max-w-xs h-[180px] text-center pt-[25px] rounded-lg text-xl font-bold text-black border-slate-600">
              <p className="mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
                Another Section
              </p>
              <p className="font-thin">Your content here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;