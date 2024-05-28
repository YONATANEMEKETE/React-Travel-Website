import Heading from './Heading';

const Section = ({ children, className, imageUrl, id }) => {
  return (
    <>
      <div id={id}>
        <div
          className={`max-w-[1112px] ${
            className || ''
          } lg:m-auto pt-28 lg:pt-40 px-2`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Section;
