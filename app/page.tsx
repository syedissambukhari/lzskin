"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import ModalVideo from "@/components/ModalVideo";

const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* 🖼️ mobile image (above text, under navbar) */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1.8, duration: 0.8, ease: "easeInOut" },
            }}
            className="flex xl:hidden justify-center mt-[40px] mb-6 left-0 right-0 z-40 relative pointer-events-none"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Image
              src="/assets/home/img.png"
              width={250}
              height={250}
              quality={100}
              alt="Home hero mobile"
              className="w-[70%] max-w-[380px] h-auto object-contain"
            />
          </motion.div>

          {/* ✨ text section */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className="w-[120%] text-center xl:text-left xl:w-[500px] pt-[1 px] xl:pt-[120px]"
          >
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="text-4xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4 leading-tight"
            >
              Natural Beauty <br /> Starts Here
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-xl mx-auto "
            >
              Tailored skincare solutions for a healthy complexion, offering
              customized care for radiant skin
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <motion.button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn btn-lg"
              >
                Book an appointment
              </motion.button>
              <motion.div
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
              >
                <ModalVideo />
              </motion.div>
            </div>
          </motion.div>

          {/* 💻 desktop image (unchanged) */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, bottom: "-100%" }}
              animate={{
                opacity: 1,
                bottom: 0,
                transition: { delay: 2.4, duration: 1.2, ease: "easeInOut" },
              }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex fixed bottom-0 right-0"
            >
              <Image
                src="/assets/home/img.png"
                width={864}
                height={650}
                quality={100}
                alt="Home hero"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
