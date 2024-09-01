function Home() {
    return (
      <div  id='home' className="flex flex-col md:flex-row items-center md:items-start pt-8 md:pt-0">
        <div className="bg pt-8 md:pt-[250px] md:pl-[100px] flex justify-center md:justify-start w-full md:w-auto">
          <img
            className="w-[300px] h-[400px] md:w-[380px] md:h-[500px] shadow-xl rounded-lg"
            src="https://i.pinimg.com/474x/e4/4d/6a/e44d6ab72d11ddcbcf57ee6604c3905a.jpg"
            alt="Chanikarn Limdul"
          />
        </div>
        <div className="name text-black font-semibold pt-8 md:pt-[350px] pl-0 md:pl-[80px] text-center md:text-left w-full md:w-auto">
          <h1 className="text-3xl md:text-5xl pb-[20px]">Chanikarn Limdul</h1>
          <p className="pt-[10px] font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="font-thin pt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aut?</p>
        </div>
      </div>
    );
  }
  
  export default Home;