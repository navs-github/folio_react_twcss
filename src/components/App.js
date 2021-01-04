
//components
import HeroImage from './HeroImage'
import TypeWriter from './TypeWriter';

function App() {
  return (
    <div className="App bg-blue-50 h-screen">


      <main className="flex flex-col space-y-8 justify-between px-8 pt-10 md:flex-row md:space-y-0 md:space-x-16 md:px-52 md:pt-20 bg-blue-50 text-gray-800 text-xl font-poppins">

        {/* landing -> hero text */}
        <div className="flex justify-between flex-col space-y-6">
          <div className="flex flex-col space-y-10">

            <div className="flex flex-col space-y-8 font-semibold">
              <span className="">Abhinav Verma</span>
              <span className="">I  {' '}
                <a href="https://dribbble.com/navs_lists" target="_blank" className="group relative"><span className="relative z-20 italic font-semibold group-hover:text-blue-800 ">design</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-200 ease-in-out "></i></a>
                {' '}and{' '}
                <a href="https://github.com/ArcticJunkie" target="_blank" className="group relative"><span className="relative z-20 font-mono font-semibold group-hover:text-blue-800">&lt;develop/&gt;</span><i className="absolute opacity-60 z-10 left bottom-1 inset-x-0 bg-blue-300 h-1.5 group-hover:h-3 transition-height duration-200 ease-in-out"></i></a>
                <TypeWriter /></span>
              <span className="font-normal text-normal leading-relaxed">I slot-in throughout the digital product life-cycle; taking a big-picture approach to projects, I strive to contribute at every stage, from concept to delivery, there's always room for improvement.</span>
            </div>

            <div className="flex flex-row space-x-8 text-gray-500 text-base">
              <span className="">BRAND-STRATEGY</span>
              <span className="">DESIGN</span>
              <span className="">DEVELOPMENT</span>
            </div>
          </div>

          <div className=" text-sm text-gray-500">
            <span>Job opportunities are warmly welcomed. </span>
            <span className="block">I’m searching for a full-time position at an agency or startup.</span>
          </div>
        </div>

        {/* landing -> image */}
        <HeroImage />

      </main>


    </div >
  );
}

export default App;