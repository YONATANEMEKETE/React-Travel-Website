import Heading from './Heading';
import Section from './Section';
import { populars } from '../constants';
import { FiMapPin } from 'react-icons/fi';

const Popular = () => {
  return (
    <Section className="pt-12 lg:pt-32 mb-6">
      <Heading
        head1="Enjoy The Beauty"
        head2="Off The World"
        classes="mb-8"
        className="text-[1.7rem] lg:text-[3rem] lg:font-normal"
      />
      <div
        className="mx-auto md:w-[35rem] lg:w-[62rem] grid md:grid-cols-2 
      lg:grid-cols-3 place-content-center gap-4 lg:gap-6"
      >
        {populars.map((item) => (
          <div key={item.id} className="w-[16rem] lg:w-[18rem]">
            <div className="w-full h-3/4 overflow-hidden">
              <img
                src={item.imageUrl}
                className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500"
              />
            </div>
            <div className="pt-4">
              <div className="text-n-2 font-first font-semibold mb-2 lg:text-[1.25rem]">
                {item.title}
              </div>
              <div className="text-sm text-n-3 lg:text-base font-semibold font-first flex items-center gap-2">
                <FiMapPin />
                {item.region}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Popular;
