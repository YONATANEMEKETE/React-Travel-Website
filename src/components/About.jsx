import { aboutImg } from '../assets';
import Button from './Button';
import Heading from './Heading';
import Section from './Section';

const About = () => {
  return (
    <Section className="pt-14">
      <div
        className=" max-w-[768px] lg:max-w-[1024px] mx-auto 
      flex items-center justify-center flex-col md:flex-row md:gap-6 lg:gap-20"
      >
        <div className=" pb-10">
          <Heading
            head1="Learn More"
            head2="About Travel"
            classes="max-w-[15rem] lg:max-w-[17rem] md:text-start md:ml-0"
            className="text-[2rem] lg:text-[3rem] md:ml-0 md:text-start"
          />
          <p
            className="text-n-3 font-first text-base lg:text-lg max-w-[24rem] lg:max-w-[30rem] 
        mx-auto text-center md:ml-0 md:text-start mb-8"
          >
            All the trips around the world are a great pleasure and happiness
            for anyone, enjoy the sights when you travel the world. Travel
            safely and without worries, get your trip and explore the paradises
            of the world
          </p>
          <Button child="Explore Travel" className="mx-auto md:ml-0 lg:p-6" />
        </div>
        <div className=" py-4 flex place-content-center">
          <div className=" w-[19rem] lg:w-[27rem] overflow-hidden">
            <img
              src={aboutImg}
              alt="ocean"
              className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
