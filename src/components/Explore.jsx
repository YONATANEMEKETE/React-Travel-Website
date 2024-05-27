import { exploreBg, exploreProfile } from '../assets';
import Heading from './Heading';
import Section from './Section';

const Explore = () => {
  return (
    <div className="relative mt-24">
      <div className="absolute top-0 left-0 w-full h-2/4 lg:h-[28rem]">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-n-1/100 to-n-1/0"></div>
        <img
          src={exploreBg}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-n-1/0 to-n-1/100"></div>
      </div>

      <Section className="relative pb-12 lg:pt-[18rem]">
        <div className="flex items-center lg:items-end flex-col lg:flex-row justify-between gap-12 h-max w-max lg:w-full mx-auto">
          <div className="">
            <Heading
              head1="Explore The"
              head2="Best Paradises"
              classes="lg:text-start"
              className="text-[1.7rem] lg:text-[3rem] lg:font-normal lg:ml-0 border"
            />
            <p
              className="text-n-3 font-first text-base max-w-[24rem] lg:max-w-[42rem] 
            text-center lg:text-start mx-auto font-semibold"
            >
              Exploring paradises such as islands and valleys when traveling the
              world is one of the greatest experiences when you travel, it
              offers you harmony and peace and you can enjoy it with great
              comfort.
            </p>
          </div>
          <div className=" flex items-center gap-4 justify-center">
            <div className="w-[2rem] overflow-hidden rounded-full">
              <img
                src={exploreProfile}
                className="w-fullh-full object-cover object-center"
              />
            </div>
            <p className="text-base font-first font-semibold text-n-2">
              Paul Jeams
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Explore;
