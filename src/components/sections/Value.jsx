import { FiGlobe, FiShield, FiUsers, FiZap } from "react-icons/fi";
import { values } from "../../assets/Values";
import { LuLightbulb } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const iconComponents = {
  FiShield: FiShield,
  LuLightbulb: LuLightbulb,
  FiUsers: FiUsers,
  FiZap: FiZap,
  FaRegHeart: FaRegHeart,
  FiGlobe: FiGlobe,
};

export default function Value() {
  return (
    <section className="w-full mx-auto section bg-white !py-32">
      <div className="mb-20 text-center">
        <h2 className="mb-3 font-bold text-7xl lg:text-8xl text-blue-950">Our Core Values</h2>
        <p className="mx-auto text-4xl text-gray-600 max-w-6xl md:max-w-[90rem]">
          These fundamental principles guide every decision we make and every solution we deliver, ensuring consistent value creation for our clients.
        </p>
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => {
          const IconComponent = iconComponents[value.icon];
          return (
            <div key={index} className="transition-all duration-300 border-0 shadow-lg group hover:shadow-xl hover:-translate-y-2">
              <div className="p-12 space-y-8 text-center">
                <div className={`p-12 mx-auto w-fit rounded-full ${value.color} flex items-center justify-center group-hover:scale-110 `}>
                  {IconComponent && <IconComponent className="text-5xl" />}
                </div>

                <h2 className="text-5xl font-semibold text-blue-950">{value.title}</h2>

                <p className="text-3xl font-medium text-gray-600 normal-case">{value.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Value Proposition */}
      <div className="text-center p-28 mt-28 bg-blue-950 rounded-3xl">
        <h2 className="mb-16 font-bold text-white text-7xl">Why Businesses Choose Edmoss</h2>
        <div className="grid gap-10 text-white md:grid-cols-3">
          <div>
            <div className="mb-2 text-6xl font-bold">15+</div>
            <div className="text-3xl opacity-90">Years of Excellence</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-bold">500+</div>
            <div className="text-3xl opacity-90">Successful Projects</div>
          </div>
          <div>
            <div className="mb-2 text-6xl font-bold">98%</div>
            <div className="text-3xl opacity-90">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
