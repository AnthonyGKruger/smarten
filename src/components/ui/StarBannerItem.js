const StarBannerItem = ({ text, imgClasses, spanClasses, liClasses }) => {
  return (
    <li className={liClasses}>
      <img
        src={
          "https://smartenup-figma-test.s3.eu-central-1.amazonaws.com/assets/Star+1.svg"
        }
        alt={"star"}
        className={imgClasses}
      />{" "}
      <span className={spanClasses}>{text}</span>
    </li>
  );
};

export default StarBannerItem;
