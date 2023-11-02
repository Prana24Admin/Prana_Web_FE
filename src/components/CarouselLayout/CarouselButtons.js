import { ChevronLeft, ChevronRight } from "lucide-react";

export const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <ChevronLeft style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

export const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide, slidesToShow } = props;

  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <ChevronRight style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
