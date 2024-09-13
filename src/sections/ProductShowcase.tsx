import productImage from "@/assets/bkground.jpg";
import Image from "next/image";
import D5 from "@/assets/D5.jpg";
import D6 from "@/assets/D6.jpg";

export const ProductShowcase = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${D6.src})`,
      }}
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Prioritize fresh Foods</div>
          </div>
          <h2 className="section-title mt-5 text-white">
            A more effective way to Shop
          </h2>
          <p className="section-description mt-5 text-white">
            Get Food fresh from the farm effortlessly through delivery service.
            Quick and easy.
          </p>
        </div>
        {/* Background Image Div with Text */}
        <div className="relative h-[50vh] md:h-[100vh] overflow-hidden rounded-2xl">
          {/* Ensure the text is absolutely positioned on top */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 md:px-0">
            <h2 className="section-title2 text-3xl md:text-4xl font-bold text-white">
              Our Produce
            </h2>
            <p className="mt-5 text-sm md:text-lg mx-auto font-medium leading-relaxed text-black max-w-2xl text-center bg-[#1d4c2d] p-6 rounded-lg shadow-lg">
              <span className="hidden md:block">
                At <span className="text-green-600">MetripMarigold</span>, we
                take pride in growing the freshest and most delicious produce
                for you and your family. From our fields to your table, we
                ensure that every fruit and vegetable is cultivated with care
                and harvested at its peak. Here’s a selection of what’s in
                stock:
              </span>
              <strong className="text-lg md:text-xl text-green-700">
                Fruits:
              </strong>
              <br />
              Juicy Strawberries | Sweet Apples
              <br />
              Ripe Peaches | Plump Blueberries
              <br />
              Fresh Oranges
              <br />
              <br />
              <strong className="text-lg md:text-xl text-green-700">
                Vegetables:
              </strong>
              <br />
              Crisp Lettuce | Tender Carrots
              <br />
              Crunchy Bell Peppers | Hearty Potatoes
              <br />
              Fresh Green Beans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
