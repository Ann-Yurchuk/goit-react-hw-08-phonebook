import { motion, AnimatePresence } from 'framer-motion';
import { variants } from 'utils/Motion';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';
import s from './Home.module.css';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.wrapper}>
      <AnimatePresence>
        <motion.h1
          className={s.title}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variants}
        >PhoneBook Aplication
          <br></br>
          Welcome
        </motion.h1>
      </AnimatePresence>
      <AnimatePresence>
        <motion.p
          className={s.text}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
          variants={variants}
        >
          We are glad to have you back!
        </motion.p>
      </AnimatePresence>
      {!isLoggedIn && (
        <AnimatePresence>
          <motion.p
            className={s.info}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
            variants={variants}
          >
            Please, <b>Register</b> or <b>Log In</b> to have access to the
            PhoneBook!
          </motion.p>
        </AnimatePresence>
      )}
    </div>
  );
}
