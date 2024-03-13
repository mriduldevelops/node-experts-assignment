import heroVideo from "../assets/hero-img.png";
import rightArrow from "../assets/right_arrow.svg";
import play from "../assets/next.svg";
function Hero() {
  return (
    <div className="px-20 lg:py-8 flex h-[100vh]">
      <div className="w-[55%]">
        <h1 className="text-4xl text-white font-semibold">
          We Create Learning Experience With Excellent Technology.
        </h1>
        <p className="my-4 text-sm text-[#fefefe] w-[75%]">
          Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And
          Job-Ready Certificate Programs— All Included In Your Subscription
        </p>
        <div className="mt-8 flex gap-7">
          <button className="py-2 px-5 bg-[#FFEC05] rounded-full text-sm font-semibold">
            Book Demo Class
          </button>
          <a
            href=""
            className="text-white text-sm flex items-center gap-2 hover:scale-105 hover:underline"
          >
            {" "}
            <span>Explore more</span>{" "}
            <img src={rightArrow} alt="right arrow" className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="w-[45%] flex justify-center items-start py-20">
        <div className="relative flex items-center justify-center w-full">
          <img src={heroVideo} alt="hero image" className="absolute z-0" />
          <img
            src={play}
            alt="play-button"
            className="relative z-1 h-24 w-24"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
