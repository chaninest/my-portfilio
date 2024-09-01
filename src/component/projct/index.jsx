function Project() {
  return (
    <div id='projects' className="p-[50px] pt-[30px] flex flex-wrap justify-center gap-8 h-[700px]">
      <div className="card bg-[#041c9d] w-full max-w-sm md:w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="11.png"
            alt="Project 1"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title pt-[40px] text-[#fff]">Project 1</h2>
          <p className="card-content text-[#fff]">Create a website using HTML and Tailwind</p>
          <div className="card-actions">
            <button className="btn bg-yellow-500 text-[#fff]">Read more</button>
          </div>
        </div>
      </div>

      <div className="card bg-[#041c9d] w-full max-w-sm md:w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="3.png"
            alt="Project 2"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title pt-[40px] text-[#fff]">Project 2</h2>
          <p className="card-content text-[#fff]">Create To-do list using HTML and JavaScript.</p>
          <div className="card-actions">
            <button className="btn bg-yellow-500 text-[#fff]">Read more</button>
          </div>
        </div>
      </div>

      <div className="card bg-[#041c9d] w-full max-w-sm md:w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="2.png"
            alt="Project 3"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-[#fff]">Project 3</h2>
          <p className="card-content text-[#fff]">Create forms using HTML and React.</p>
          <div className="card-actions">
            <button className="btn bg-yellow-500 text-[#fff]">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;