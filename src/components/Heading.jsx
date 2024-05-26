const Heading = ({ head1, head2, topH }) => {
  return (
    <div className="max-w-[22rem] lg:max-w-[33rem] mx-auto lg:ml-0 text-center lg:text-start py-4">
      {
        <p className="font-first font-semibold text-n-2 text-base lg:text-2xl mb-2 lg:mb-6">
          {topH}
        </p>
      }
      <div className="h-max w-max leading-tight text-[3rem] lg:text-[6rem] mx-auto lg:ml-0">
        <div className="font-semibold font-first text-n-2">{head1}</div>
        <div className="font-semibold font-first text-n-2">{head2}</div>
      </div>
    </div>
  );
};

export default Heading;
