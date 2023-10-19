const GradientText = ({ classes, content, isVisible }) => {
  return (
    <span
      className={`${
        isVisible
          ? classes + " animate-text"
          : // ? classes + " transition-all duration-1000 w-full"
            "text-transparent transition-all duration-1000 w-0 bg-none"
      }`}
    >
      {content}
    </span>
  );
};

export default GradientText;
