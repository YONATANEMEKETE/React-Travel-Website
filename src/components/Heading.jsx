const Heading = ({ head1, head2, topH, className, classes }) => {
  return (
    <div className={`${classes || ''} mx-auto  text-center  py-4`}>
      {
        <p className="font-first font-semibold text-n-2 text-base lg:text-2xl mb-2 lg:mb-6">
          {topH}
        </p>
      }
      <div className={`${className || ''}h-max w-max leading-tight mx-auto`}>
        <div className={`font-semibold font-first text-n-2`}>{head1}</div>
        <div className="font-semibold font-first text-n-2">{head2}</div>
      </div>
    </div>
  );
};

export default Heading;
