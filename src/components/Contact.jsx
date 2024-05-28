import { contactImg } from '../assets';
import Button from './Button';
import Heading from './Heading';
import Section from './Section';

const Contact = () => {
  return (
    <Section className="pb-12 pt-20 ">
      <div className="w-max h-max mx-auto flex items-center md:items-start justify-center flex-col md:flex-row-reverse gap-16 md:gap-8 lg:gap-24">
        <div className=" w-max h-max text-center md:text-start mx-auto">
          <Heading
            head1="Your Journey"
            head2="Starts Here"
            classes="md:text-start md:ml-0 lg:mb-4 md:pt-0 md:pb-4"
            className="text-[1.7rem] lg:text-[3rem] md:ml-0  font-first"
          />
          <p className="text-base font-first font-semibold max-w-[24rem] text-n-3 mx-auto text-center mb-6 lg:mb-8 md:text-start">
            Get up to date with the latest travel and information from us.
          </p>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border-none outline-none w-[17rem] md:w-[22rem] px-4 py-4 
            md:py-5 lg:py-6 mx-auto text-base font-first bg-n-4 text-n-2 mb-6 md:mb-2 lg:mb-5"
          />
          <Button
            child="Subscribe Our Newsletter"
            className="mx-auto md:ml-0 md:w-[22rem] md:py-5 lg:py-6"
          />
        </div>

        <div className="w-[19rem] lg:w-[27rem] overflow-hidden">
          <img
            src={contactImg}
            className="w-full h-full object-cover object-center hover:scale-125 transition-transform duration-500"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
