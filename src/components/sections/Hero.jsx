import { FiArrowRight, FiTarget } from "react-icons/fi";
import { ButtonOne, ButtonTwo } from "../ui/Button";
import { BiAward, BiTrendingUp } from "react-icons/bi";

export default function Hero() {
  return (
    <section id="about" className="mx-auto section bg-gradient-to-br from-gray-50 to-white !pb-28">
      <div className="flex flex-wrap items-center justify-between gap-10 gap-y-16 md:flex-nowrap">
        {/* Left Content */}
        <div className="w-full md:flex-1">
          <div className="md:max-w-6xl">
            <div className="space-y-10">
              <h1 className="font-semibold text-[7rem] md:text-[8.5rem] leading-[6rem] md:leading-[9rem]">
                creating <span className="text-yellow-500">Exceptional value</span> for your business
              </h1>
              <p className="text-4xl font-medium normal-case font-one text-blue-950">
                We transform businesses through strategic innovation, operational excellence, and sustainable growth solutions that deliver measurable
                results.
              </p>
              <div className="flex flex-col gap-10 !mt-12 sm:flex-row">
                <ButtonOne
                  name="start your journey"
                  className="w-full flex justify-between items-center h-[6rem] md:w-fit md:h-fit !gap-12"
                  icon={<FiArrowRight className="text-4xl" />}
                />
                <ButtonTwo name="learn more" className="w-full md:w-fit  md:h-fit flex justify-center items-center h-[6rem]" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center pt-20 space-x-20 md:justify-start">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-950">500+</div>
              <div className="text-2xl text-gray-600">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-950">98%</div>
              <div className="text-2xl text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-950">15+</div>
              <div className="text-2xl text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="w-full md:flex-1">
          <div className="p-8 space-y-6 bg-white shadow-2xl md:p-16 rounded-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-5xl font-semibold text-blue-950">Our Core Focus</h2>
              <p className="text-4xl text-gray-600 normal-case">Delivering measurable business value</p>
            </div>

            <div className="space-y-12">
              <div className="flex items-center p-10 space-x-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center p-5 rounded-xl bg-blue-950">
                  <BiTrendingUp className="text-5xl text-white" />
                </div>
                <div>
                  <h4 className="text-4xl font-semibold text-blue-950">Growth Strategy</h4>
                  <p className="pt-3 text-3xl font-medium normal-case text-gray-6">Sustainable business expansion</p>
                </div>
              </div>

              <div className="flex items-center p-10 space-x-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center p-5 bg-yellow-500 rounded-xl">
                  <FiTarget className="text-5xl text-blue-950" />
                </div>
                <div>
                  <h4 className="text-4xl font-semibold text-blue-950">Precision Planning</h4>
                  <p className="pt-3 text-3xl font-medium normal-case text-gray-6">Strategic goal achievement</p>
                </div>
              </div>

              <div className="flex items-center p-10 space-x-4 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-center p-5 rounded-xl bg-blue-950">
                  <BiAward className="text-5xl text-white" />
                </div>
                <div>
                  <h4 className="text-4xl font-semibold text-blue-950">Excellence</h4>
                  <p className="pt-3 text-3xl font-medium normal-case text-gray-6">Premium quality delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
