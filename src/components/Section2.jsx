import heroVideo from "../assets/hero-img.png";
import play from "../assets/next.svg";

function Section2() {
  return (
    <div className="my-10 flex flex-col gap-12 items-center py-8 px-28">
      <div className="w-[60%] md:w-[70%]">
        <h1 className="text-4xl font-semibold text-center mb-6">Why Us</h1>
        <p className="text-sm text-[#707070] text-center">
          It Is A Long Established Fact That At Learning Exp. We Are Committed
          To Providing You With A Superior Learning Experience That Empowers You
          To Achieve Your Goals. Join Us Today And Embark On A Journey Of
          Discovery, Growth, And Success.
        </p>
      </div>
      <div className="flex gap-16">
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
        <div className="w-[55%]">
          <h1 className="text-2xl font-bold">
            Crafting Your Dream Career:
            <br /> Building a Path You Love with us
          </h1>
          <p className="my-4 text-sm text-[#707070]">
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </p>
          <p className="my-4 text-sm text-[#707070]">
            {" "}
            Our Platform Is Designed To Empower Learners Like You To Excel In
            Today’s Dynamic World.
          </p>
          <div className="mt-8 flex gap-7">
            <button className="py-3 px-5 w-40 bg-[#FFEC05] rounded-full text-sm font-semibold">
              Get More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
