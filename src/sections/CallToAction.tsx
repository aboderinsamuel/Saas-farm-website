import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import D3 from "@/assets/D3.png";
import D7 from "@/assets/D7.png";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#006600] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Order today</h2>
          <p className="section-description mt-5">
            We offer competitive rates that honor both the farmer's hard work
            and the value you deserve. Contact us for detailed pricing on our
            seasonal offerings, and enjoy the freshest produce delivered
            straight from our farm to your table.
          </p>
          <Image
            src={D3}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={D7}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get Now</button>
          <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
