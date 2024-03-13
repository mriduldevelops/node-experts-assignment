import blackArrow from "../assets/black-arrow.svg";
import productManager from "../assets/man.png";
import star from "../assets/star.svg";
function Section4() {
  return (
    <div className="my-10 flex flex-col gap-12 items-center py-8 px-28">
      <div className="w-full flex justify-between items-center">
        <div className="w-[70%]">
          <h1 className="text-4xl font-semibold leading-normal mb-2">
            Our Students Feedback
          </h1>
          <p className="text-sm text-[#707070] font-semibold">
            At Learning Exp. We Are Committed To Providing You With A Superior
            Learning Experience That Empowers You To Achieve Your Goals. Join Us
            Today And Embark On A Journey Of Discovery, Growth, And Success.
          </p>
        </div>
        <div>
          <button className="py-1 px-4 bg-[#F3F3F3] flex items-center rounded-md text-[#707070]">
            <span>Read more</span>
            <img src={blackArrow} alt="blackArrow" className="h-10 w-10" />
          </button>
        </div>
      </div>
      <div className="w-full h-[300px] bg-[#EFEFFE] flex rounded-md shadow-md">
        <img src={productManager} alt="productManager" className="h-full" />
        <div className="py-14 px-20 md:w-[50%] lg:w-[70%]">
          <div className="flex gap-3">
            <img src={star} alt="star" className="h-8" />
            <img src={star} alt="star" className="h-8" />
            <img src={star} alt="star" className="h-8" />
            <img src={star} alt="star" className="h-8" />
            <img src={star} alt="star" className="h-8" />
          </div>
          <p className="text-sm font-semibold mt-5 mb-7">
            "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
            Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
            Quae Ab Illo Modi Tem."
          </p>
          <h2 className="font-bold text-lg">Riad Isalm</h2>
          <h3 className="font-bold text-sm">
            Product Manager{" "}
            <a href="" className="text-semibold text-[#333697]">
              @Learning.com
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Section4;
