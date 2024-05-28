import { footer } from '../constants';
import Section from './Section';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="bg-stone-950">
      <Section className="pt-16 pb-12">
        <div className="w-max h-max pl-4 mb-20 flex flex-col md:flex-row md:gap-8 lg:gap-28 xl:gap-40">
          <div className="mb-16 w-max">
            <div className="text-n-2 font-first text-2xl font-semibold mb-3">
              Travel
            </div>
            <p className="text-stone-400 font-first text-base font-semibold max-w-[15rem]">
              Travel with us and explore the world without limits.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
            {footer.map((item, index) => (
              <div
                key={index}
                className="w-max h-max flex items-start gap-2 flex-col"
              >
                <p className="text-n-2 font-first text-xl font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-stone-400 font-first text-base font-semibold hover:underline decoration-stone-400 cursor-pointer">
                  {item.content[0]}
                </p>
                <p className="text-stone-400 font-first text-base font-semibold hover:underline decoration-stone-400 cursor-pointer">
                  {item.content[1]}
                </p>
                <p className="text-stone-400 font-first text-base font-semibold hover:underline decoration-stone-400 cursor-pointer">
                  {item.content[2]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 md:flex-row-reverse md:px-4">
          <div className="flex gap-6 justify-center">
            <FaFacebookF className="w-6 h-6 text-stone-400 font-semibold hover:-translate-y-2 transition-transform duration-300 cursor-pointer" />
            <FaInstagram className="w-6 h-6 text-stone-400 font-semibold hover:-translate-y-2 transition-transform duration-300 cursor-pointer" />
            <FiTwitter className="w-6 h-6 text-stone-400 font-semibold hover:-translate-y-2 transition-transform duration-300 cursor-pointer" />
            <FiYoutube className="w-6 h-6 text-stone-400 font-semibold hover:-translate-y-2 transition-transform duration-300 cursor-pointer" />
          </div>
          <p className="font-first text-sm text-stone-400 font-semibold mx-auto md:ml-0">
            © Copyright Yonatane. All rights reserved
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
