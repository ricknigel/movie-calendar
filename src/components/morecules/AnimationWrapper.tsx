import { FC } from 'react';

import { motion } from 'framer-motion';

import { ChildrenProp } from 'modules/types/props';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

type Props = ChildrenProp & {
  aniKey?: string;
  isAnimation?: boolean;
};

const AnimationWrapper: FC<Props> = ({
  children,
  aniKey = undefined,
  isAnimation = true
}) => {
  return isAnimation ? (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{
        delay: 0.3,
        type: 'linear',
        default: { duration: 0.3 }
      }}
      key={aniKey}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  ) : (
    <div>{children}</div>
  );
};

export default AnimationWrapper;
