export const getStyles = (activeSlide, index) => {
  if (activeSlide === index)
      return {
          opacity: 1,
          transform:
              "translateX(0px) translateZ(0px) rotateY(0deg) scale(1.5)",
          zIndex: 10,
      };
  else if (activeSlide - 1 === index)
      return {
          opacity: 1,
          transform:
              "translateX(100px) translateZ(-100px) rotateY(25deg)",
          zIndex: 9,
      };
  else if (activeSlide + 1 === index)
      return {
          opacity: 1,
          transform:
              "translateX(-100px) translateZ(-100px) rotateY(-25deg)",
          zIndex: 9,
      };
  else if (activeSlide - 2 === index)
      return {
          opacity: 1,
          transform:
              "translateX(-140px) translateZ(-500px) rotateY(25deg)",
          zIndex: 8,
      };
  else if (activeSlide + 2 === index)
      return {
          opacity: 1,
          transform:
              "translateX(140px) translateZ(-500px) rotateY(-25deg)",
          zIndex: 8,
      };
  else if (index < activeSlide - 2)
      return {
          opacity: 0,
          transform:
              "translateX(-480px) translateZ(-500px) rotateY(35deg)",
          zIndex: 7,
      };
  else if (index > activeSlide + 2)
      return {
          opacity: 0,
          transform:
              "translateX(480px) translateZ(-500px) rotateY(-35deg)",
          zIndex: 7,
      };
};