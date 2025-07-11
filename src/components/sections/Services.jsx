import { FiArrowRight, FiUsers, FiBriefcase, FiTarget } from "react-icons/fi";
import { IoBarChartOutline, IoCog } from "react-icons/io5";
import { BiTrendingUp } from "react-icons/bi";
import { services } from "../../assets/Services";
import { ButtonOne, ButtonTwo } from "../ui/Button";

const iconComponents = {
  IoBarChartOutline: IoBarChartOutline,
  IoCog: IoCog,
  BiTrendingUp: BiTrendingUp,
  FiUsers: FiUsers,
  FiBriefcase: FiBriefcase,
  FiTarget: FiTarget,
};

export default function Services() {
  return (
    <section id="services" className="w-full mx-auto section !py-32">
      <div className="mb-20 text-center">
        <h2 className="mb-3 text-6xl font-bold md:text-7xl lg:text-8xl text-blue-950">Services That Drive Results</h2>
        <p className="mx-auto text-4xl text-gray-600  normal-case max-w-5xl sm:max-w-6xl md:max-w-[90rem]">
          We offer comprehensive business solutions designed to create measurable value and sustainable growth for your organization.
        </p>
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const IconComponent = iconComponents[service.icon];
          return (
            <div key={index} className="p-5 bg-white border-0 shadow-lg md:p-8 group rounded-xl hover:shadow-2xl hover:-translate-y-1">
              <div className="p-5 space-y-12 md:p-8">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center p-8 bg-blue-950 rounded-xl group-hover:scale-110">
                    {IconComponent && <IconComponent className="text-5xl text-white" />}
                  </div>
                  <h2 className="text-5xl font-semibold text-blue-950">{service.title}</h2>
                </div>

                <p className="text-3xl font-medium text-gray-600 normal-case">{service.description}</p>

                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                      <span className="text-3xl text-gray-600 normal-case">{feature}</span>
                    </div>
                  ))}
                </div>
                <ButtonOne
                  name="learn more"
                  className="w-full bg-transparent !mt-20 group-hover:bg-blue-950 !text-blue-950 group-hover:!text-white flex justify-between h-[6rem] !gap-12"
                  icon={<FiArrowRight className="text-4xl" />}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-28">
        <div className="p-12 mx-auto bg-white shadow-xl w-full max-w-[100rem] rounded-2xl">
          <h2 className="mb-6 font-bold text-7xl text-blue-950">Ready to Transform Your Business?</h2>
          <p className="mx-auto mb-8 text-4xl text-gray-600 normal-case max-w-7xl">
            Let's discuss how our proven strategies can create exceptional value for your organization.
          </p>
          <div className="flex flex-col justify-center gap-8 mt-20 sm:flex-row">
            <ButtonOne
              name="schedule consultation"
              className="flex items-center justify-center text-center md:justify-start md:h-fit w-full md:w-fit h-[6rem]"
            />
            <ButtonTwo
              name="view case studies"
              className="flex items-center justify-center text-center md:justify-start md:h-fit w-full md:w-fit h-[6rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
