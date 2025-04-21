import {
  Flex,
  Text,
  
  Code,
  Image,
} from "@chakra-ui/react";
import bg from "../assets/aboutbg4.png";
import aboutRight from "../assets/pic.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Flex
      bgImg={bg}
      bgSize="cover"
      // minH={{ lg: "100vh", base: "auto" }}
      w="100%"
      alignItems="center"
      bgBlendMode={"darken"}
      color="white"
      id="about"
      py={{ base: 10, md: 12, lg: 20 }}
      flexDir={{ base: "column", md: "row" }}
    >
      {/* Left Side */}
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        height={"100%"}
        w={{ lg: "70%" }}
        gap={{ lg: 5, md: 8, base: 6 }}
        alignItems={"center"}
      >
        <Flex
          width={{ lg: "80%", md: "85%", base: "90%" }}
          alignSelf={{ lg: "center", base: "center" }}
          zIndex={2}
          mt={4}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
              fontSize={{ lg: "4xl", md: "26px", base: "2xl" }}
              fontWeight="bold"
              border={"1px solid"}
              borderColor={"brand.buttonGreen"}
              textAlign={"center"}
              width={{ lg: "250px", md: "180px", base: "150px" }}
              borderRadius={"20px 0 20px 0"}
              bg={"black"}
            >
              About Me
            </Text>
          </motion.div>
        </Flex>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
            flexDirection={"column"}
            gap={2}
            fontSize={{ lg: 16, md: 14, base: 12 }}
            width={{ lg: "80%", md: "85%", base: "90%" }}
            p={{md:6,base:4}}
            borderRadius={{md:30,base:20}}
            bg={"#1D2023"}
            alignSelf={{ lg: "center", base: "center" }}
            zIndex={100}
            m={"auto"}
          >
            <Code bg={"none"} color={"#33FFCC"}>
              {"<!--"}
            </Code>
            <Flex flexDir={"column"} px={2} gap={2}>
              <Code bg={"none"} color={"#33FFCC"} fontSize={20}>
                Hello!..
              </Code>
              <Code bg={"none"} color={"white"}>
                Hi, I&apos;m Bezalel Herald, a passionate and detail-oriented
                <span style={{ color: "#33FFCC" }}> Java Full Stack Developer</span> from Chennai, India.I completed
                my B.tech Information Technology from Panimalar Institute of Technology in 2024 with a CGPA of 8.08.
                To strengthen my development skills, I completed a {" "}
                <span style={{ color: "#33FFCC" }}>
                Java Full Stack Developer{" "}
                </span>
                course at{" "}
                <span style={{ color: "#33FFCC" }}>LOGIN 360</span>{" "}
                and successfully wrapped up an internship in {" "}
                <span style={{ color: "#33FFCC" }}>Java Application Development at Uniq Technologies.</span>.
              </Code>
              <Code bg={"none"} color={"white"}>
                {" "}
                I love taking on complex tasks and finding creative solutions to
                challenging problems, especially when it comes to{" "}
                <span style={{ color: "#33FFCC" }}>debugging</span> and
                improving code.
              </Code>
              <Code bg={"none"} color={"white"}>
                {" "}
                I&apos;m constantly exploring new technologies and pushing
                myself to grow as a developer. My goal is to{" "}
                <span style={{ color: "#33FFCC" }}>keep learning</span> and
                contribute to projects that have a meaningful impact.
              </Code>
              <Code bg={"none"} color={"white"}>
                {" "}
                When I&apos;m not coding, I enjoy reading books and diving into
                art and crafts, which help me stay creative and inspired.
              </Code>
            </Flex>
            <Code bg={"none"} color={"#33FFCC"}>
              {"--!>"}
            </Code>
          </Flex>
        </motion.div>
        {/* For mobile screen */}
        <Tilt>
          <Flex
            flex={1}
            justifyContent={"center"}
            alignItems={"center"}
            display={{ base: "flex", lg: "none" }}
          >
            <Tilt>
            <Image
              height={{ base: "320px", md: "360px", lg: "400px", xl: "440px" }}
              width={{ base: "320px", md: "360px", lg: "400px", xl: "440px" }}
              borderRadius="full"
              src={aboutRight}
              background="radial-gradient(circle at center, #33FFCC 40%, #111111 90%)"
              boxShadow="0 0 40px rgba(51, 255, 204, 0.5)"
              loading="lazy"
           />
            </Tilt>
          </Flex>
        </Tilt>
      </Flex>
      {/* Right Side */}
      <Flex
        flex={1}
        justifyContent={"flex-start"}
        alignItems={"center"}
        display={{ base: "none", lg: "flex" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          <Tilt>
          <Image
              height={{ base: "320px", md: "360px", lg: "400px", xl: "440px" }}
              width={{ base: "320px", md: "360px", lg: "400px", xl: "440px" }}
              borderRadius="full"
              src={aboutRight}
              background="radial-gradient(circle at center, #33FFCC 40%, #111111 90%)"
              boxShadow="0 0 40px rgba(51, 255, 204, 0.5)"
              loading="lazy"
           />
          </Tilt>
        </motion.div>
      </Flex>
    </Flex>
  );
};

export default About;
