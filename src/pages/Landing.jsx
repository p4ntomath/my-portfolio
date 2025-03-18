import HunterLicenseCard from "./components/HunterLicenseCard";

function Landing() {
  return (
    <div className="flex items-center justify-center">
      {/* Left Side Content*/}
      <div className="hidden md:block m-8 w-1/3">
        <h2 className="text-2xl font-bold">Welcome To My Portfolio</h2>
        <p className="mt-2 text-xs text-gray-600">Explore my work, skills, and projects that highlight my passion for technology and design. Feel free to browse and discover how I can help bring your ideas to life!</p>
      </div>

      {/* Hunter License Card*/}
      <HunterLicenseCard />

      {/* Right Side Content */}
      <div className="hidden md:block m-8">

      </div>
    </div>
  );
}

export default Landing;