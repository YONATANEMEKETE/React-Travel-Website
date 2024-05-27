import { homeBg } from '../assets';
import { heroImgs } from '../constants';
import Button from './Button';
import Heading from './Heading';
import Section from './Section';

const Hero = () => {
  return (
    <div className="relative">
      <img
        src={homeBg}
        className="absolute top-0 left-0 w-full h-3/4 -z-10 object-cover object-center"
        alt="forest"
      />
      <div className="shadow absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-n-1/0 to-n-1"></div>

      <Section className="bg-fixed relative">
        <Heading
          topH="Welcome to Travel"
          head1="Explore"
          head2="The World"
          classes="max-w-[22rem] lg:max-w-[33rem] lg:text-start lg:ml-0 grid lg:justify-start justify-center "
          className="text-[3rem] lg:text-[6rem] lg:mx-0"
        />
        <p
          className="text-n-2 font-first text-base lg:text-lg  max-w-[24rem] 
        lg:max-w-[30rem] mx-auto lg:ml-0 text-center lg:text-start mb-8"
        >
          Live the trips exploring the world, discover paradises, islands,
          mountains and much more, get your trip now
        </p>
        <Button
          child="Start Your Journey"
          className="mx-auto lg:ml-0 lg:px-6 lg:py-6 mb-10"
        />

        <div className="w-full">
          <div className="w-max h-max mx-auto lg:ml-0 grid md:grid-cols-2 lg:grid-cols-4 items-center gap-6">
            {heroImgs.map((item) => (
              <div
                key={item.id}
                className="w-[15rem] relative overflow-hidden group"
              >
                <img
                  src={item.imageUrl}
                  className="w-full h-full object-cover object-center group-hover:scale-125 transition-transform duration-500"
                />
                <p className="absolute left-4 bottom-4 text-n-2 font-first font-semibold">
                  {item.state}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
