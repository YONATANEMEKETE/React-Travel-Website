import Heading from './Heading';
import Section from './Section';
import { populars } from '../constants';

const Popular = () => {
  return (
    <Section className="pt-12">
      <Heading
        head1="Enjoy The Beauty"
        head2="Off The World"
        classes="mb-8"
        className="text-[1.7rem] lg:text-[3rem] leading-relaxed"
      />
      <div>
        {populars.map((item) => (
          <div key={item.id}>
            <div>
              <img src={item.imageUrl} />
            </div>
            <div>
              <div>{item.title}</div>
              <div>{item.region}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Popular;
