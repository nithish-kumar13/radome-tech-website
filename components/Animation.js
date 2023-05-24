import { easeIn, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children, useEffect } from "react";

const boxVariant = {
  visible: {
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.7 },
  },
  hidden: { opacity: 0 },
};

const Animation = (props) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
};
export default Animation;
