import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Strengthen your muscles and build endurance with a variety of weightlifting techniques and routines. Ideal for improving physical power, this class helps enhance both muscle tone and core strength!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Improve flexibility, balance, and peace of mind with guided yoga sessions. From basic poses to advanced flows, this class helps you connect body, mind, and spirit for total relaxation.",
    image: image2,
  },
  {
    name: "Abs Core Training Classes",
    description:
      "Target your core with specific exercises designed to strengthen your abs and back. This class focuses on functional movements that enhance stability and core endurance for better posture.",
    image: image3,
  },
  {
    name: "Adventure Training Classes",
    description:
      "Challenge yourself with high-intensity outdoor workouts that blend physical fitness and fun. These adventure-based classes push your limits, combining cardio, strength, and agility training.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Join full-body workouts that improve your overall fitness levels. These sessions combine cardio, strength, and flexibility exercises for a well-rounded approach to health and vitality.",
    image: image5,
  },
  {
    name: "Functional Training Classes",
    description:
      "Enhance your everyday movements through dynamic training that focuses on balance, coordination, and strength. This class boosts overall fitness, helping you move more efficiently.",
    image: image6,
  },
];


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
  <HeaderText>OUR CLASSES</HeaderText>
  <p className="py-5">
    Discover a range of dynamic classes designed to elevate your fitness journey. Whether you seek to build strength, enhance flexibility, or challenge yourself with new adventures, our expertly crafted programs offer something for everyone. Join us and experience the benefits of a well-rounded fitness regimen that caters to all levels and goals.
  </p>
</div>

        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

// when implementing scrolls, the child container would have a very large width while the parent container would have a smaller width or can be set to the full extent of the device screen
// whitespace-nowrap means we won't have any whitespace left over
