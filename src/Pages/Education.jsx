import { Flex, Text, Image, Divider, Icon } from "@chakra-ui/react";
import dev from "../assets/Skills/dev.svg";
import teach from "../assets/Skills/teach.svg";
import TypewriterText from "../Components/TypewriterText";
import { motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
const Education = () => {
  const text = "E d u c a t i o n ".split(" ");
  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="education"
      alignItems={"center"}
      // minH={{ md: "100vh", base: "auto" }}
      gap={10}
      py={20}
      bg={"rgba(22, 22, 22, 0.3)"}
      backdropFilter={"blur(2px)"}
    >
      <Flex flexDir={"column"}>
        <TypewriterText text={text} />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{
            width: "100%", // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
              delay: 0.8,
            },
          }}
          viewport={{ once: true }}
        >
          <Divider borderColor="brand.buttonGreen" borderWidth={2} />
        </motion.div>
      </Flex>
      {/* Experience Section */}
      <Flex flexDir={"column"} alignItems={"center"} w={"100%"}>
        {/* First Experience */}
        {educationData.map((data, i) => {
          return (
            <Flex
              gap={{ md: 2, base: 1 }}
              key={i}
              w={{ md: "100%", base: "90%" }}
              justifyContent={"center"}
              m={"auto"}
            >
              {/* First Section Starts */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide in to its original position
                  transition: {
                    duration: 0.5, // Animation duration
                    delay: 0.5,
                  },
                }}
                viewport={{ once: true }}
              >
                <Flex
                  bg={"brand.buttonGreen"}
                  h={{ md: 8, base: 7 }}
                  alignItems={"center"}
                  width={{ lg: 180, md: 130, base: "100px" }}
                  borderRadius={20}
                  mt={2}
                  justifyContent={"center"}
                  display={{ base: "none", md: "flex" }}
                >
                  <Text
                    fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                    fontWeight={600}
                    color={"black"}
                  >
                    {data.period}
                  </Text>
                </Flex>
              </motion.div>
              {/* First Section Ends */}
              {/* Second Section Starts */}
              <Flex flexDir={"column"} alignItems={"center"}>
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Flex
                    width={{ md: "50px", base: "40px" }}
                    height={{ md: "50px", base: "40px" }}
                    border={"2px solid "}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderColor={"brand.buttonGreen"}
                    borderRadius={50}
                    p={1.5}
                    boxShadow=" 1px 0 10px 0px #33FFCC"
                  >
                    <Image src={data.icon} alt="dev" mt={3} />
                  </Flex>
                </motion.div>
                {/* Line */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{
                    opacity: 1,
                    height: "100%", // Slide in to its original position
                    marginBottom: 5,
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Divider
                    orientation="vertical"
                    // h={"100%"}
                    borderWidth={2}
                    w={0}
                    my={1}
                    borderColor={"#33FFCC"}
                  />
                </motion.div>
              </Flex>
              {/* Second Section Starts */}

              {/* Second Experience */}
              {/* Third Section Starts */}
              <Flex
                color={"white"}
                flexDir={"column"}
                ml={{ md: 4, base: 2 }}
                w={{ xl: "35%", lg: "45%", md: "50%", base: "100%" }}
                mb={5}
              >
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{
                    opacity: 1,
                    y: 0, // Slide in to its original position
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Flex
                    bg={"brand.buttonGreen"}
                    h={{ md: 8, base: 7 }}
                    alignItems={"center"}
                    width={{ lg: 180, md: 130, base: 120 }}
                    borderRadius={20}
                    mt={1}
                    mb={2}
                    justifyContent={"center"}
                    display={{ base: "flex", md: "none" }}
                  >
                    <Text
                      fontSize={{ lg: "14px", md: "12px", base: "10px" }}
                      fontWeight={600}
                      color={"black"}
                    >
                      {data.period}
                    </Text>
                  </Flex>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{
                    opacity: 1,
                    y: 0, // Slide in to its original position
                    transition: {
                      duration: 0.5, // Animation duration
                      delay: 0.5,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <Text
                    fontSize={{ md: "3xl", base: "18px" }}
                    fontWeight={"bold"}
                  >
                    {data.std}
                  </Text>
                  <Text fontSize={{ md: "xl", base: "15px" }} fontWeight={600}>
                    {data.school}
                  </Text>
                </motion.div>
                <Flex
                  flexDir={"column"}
                  width={"100%"}
                  pl={{ lg: 4, md: 2, base: 1 }}
                >
                  {data.description.map((desc, i) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                          opacity: 1,
                          y: 0, // Slide in to its original position
                          transition: {
                            duration: 0.7, // Animation duration
                            delay: 0.5,
                          },
                        }}
                        viewport={{ once: true }}
                        key={i}
                      >
                        <Flex
                          alignItems={"center"}
                          gap={2}
                          w={{ lg: "100%", md: "100%", base: "95%" }}
                        >
                          <Icon as={CiStar} color={"#33FFCC"} />
                          <Text
                            fontSize={{ md: "14px", base: "12px" }}
                            mt={2}
                            color={"whiteAlpha.800"}
                          >
                            {desc}
                          </Text>
                        </Flex>
                      </motion.div>
                    );
                  })}
                </Flex>
              </Flex>
              {/* Third Section Ends */}
            </Flex>
          );
        })}
        {/* First Experience Ends */}
      </Flex>
    </Flex>
  );
};

export default Education;

const educationData = [
  {
    school: "David Matriculation Higher Secondary School",
    std:"SSLC",
    icon: teach,
    period: "June 2017 - May 2018",
    description: [
      "Completed my SSLC with a score of 86% in 2018.",
      "This foundational education provided me with essential skills and knowledge, laying the groundwork for my future studies and career.",
    ],
  },
  {
    school:"David Matriculation Higher Secondary School",
    std: "HSC",
    icon: teach,
    period: "June 2019 - May 2020",
    description: [
        "Completed my HSC with a score of 74% in 2020.",
        "This period was crucial in shaping my academic interests and aspirations, particularly in the field of computer science.",
    ],
  },
  {
    school:"Panimalar Institute of Technology",
    std:"B.Tech Information Technology",
    icon: dev,
    period:"Sept 2020 - June 2024",
    description: [
        "I completed my B.Tech in Information Technology with a CGPA of 8.08.",
        "This program provided me with a strong foundation in computer science principles, programming languages, and software development methodologies.",
    ]
  }
];