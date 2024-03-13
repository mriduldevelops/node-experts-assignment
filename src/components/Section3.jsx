import checkCircle from "../assets/check-circle.svg";
import assignmentTurned from "../assets/assignment-turned.svg";
import userCircle from "../assets/user-circle.svg";
function Section3() {
  return (
    <div className="my-10 flex flex-col gap-12 items-center py-8 px-28">
      <div className="w-[70%] md:w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold text-center mb-6 leading-normal">
          We Completed 1200+ Certification Program Successfully & Counting
        </h1>
        <p className="text-sm text-[#241B1B] font-semibold text-center lg:w-[75%]">
          At Learning Exp. We Are Committed To Providing You With A Superior
          Learning Experience That Empowers You To Achieve Your Goals. Join Us
          Today And Embark On A Journey Of Discovery, Growth, And Success.
        </p>
      </div>
      <div className="flex lg:gap-20">
        <div className="flex items-center gap-2">
          <img src={checkCircle} alt="checkCircle" className="h-14 w-14" />
          <div className="font-semibold">
            <h3 className="text-[#1453FF] text-xl">100+</h3>
            <span>Batch Complete</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={assignmentTurned}
            alt="assignmentTurned"
            className="h-14 w-14"
          />
          <div className="font-semibold">
            <h3 className="text-[#1453FF] text-xl">50+</h3>
            <span>Active Batches</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={userCircle}
            alt="userCircle"
            className="h-14 w-14"
          />
          <div className="font-semibold">
            <h3 className="text-[#1453FF] text-xl">10,000+</h3>
            <span>Student Satisfied</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={userCircle}
            alt="userCircle"
            className="h-14 w-14"
          />
          <div className="font-semibold">
            <h3 className="text-[#1453FF] text-xl">10+</h3>
            <span>Course Modules</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
