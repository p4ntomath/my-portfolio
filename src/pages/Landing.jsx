function Landing() {
  return (
    <div className="h-full bg-[var(--fourth)] w-full flex sm:flex-row flex-col justify-center items-center space-y-4">
      <div className="w-1/2 hidden my-3 sm:flex items-center flex-col justify-center">
      <img className="max-w-96 "
      src="src\assets\my-picture.png" 
      alt="picture of mahlatse" />

      </div>
      <div className="sm:w-1/2 items-center space-y-4 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center">
          I'm <br /> Mahlatse Rabothata
        </h1>
        <p className="max-w-3/4 text-center text-md">
          a final year Computer Science and Applied Mathematics student at the University of the Witwatersrand. 
          With a keen interest in Computational Physics and Sofware Development
        </p>
        <div className="flex flex-row justify-center space-x-4 py-3">
          <button className="bg-[var(--secondary)] px-3 py-2 text-white rounded-lg hover:bg-slate-600"
          >Hire Me</button>
          <button className="bg-[var(--secondary)] px-3 py-2 text-white rounded-lg hover:bg-slate-600"
          >Collaborate</button>
        </div>
      </div>

    </div>
      
  );
}


  export default Landing;
