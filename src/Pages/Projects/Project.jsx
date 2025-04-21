import { Divider, Flex, Grid } from "@chakra-ui/react";
import TypewriterText from "../../Components/TypewriterText";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import p1 from "../../assets/projects/project1.png";
import p2 from "../../assets/projects/project2.png";
import p3 from "../../assets/projects/project3.png";

const Project = () => {
  const text = "P r o j e c t s ".split(" ");

  return (
    <Flex
      width={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      id="projects"
      alignItems={"center"}
      // px={10}
      py={20}
      gap={10}
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
      {/* Project Card */}
      <Grid
        templateColumns={{
          xl: "repeat(3, 1fr)",
          md: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gap={{ xl: 10, lg: 16, md: 10, base: 5 }}
      >
        <ProjectCard
          title={"Social Book Library Management System"}
          description={
            "A Social Book Library Management System is a web application that allows users to manage their book collections, borrow and lend books, and connect with other readers. It features user authentication, book cataloging, borrowing history tracking, and social networking functionalities."
          }
          image={p1}
          stack={[
            "Html",
            "CSS",
            "JS",
            "Nodejs",
            "Java",
            "Spring Boot",
          ]}
        />
        <ProjectCard
          title={"Smart Agriculture AI Bot"}
          description={
            "A Smart Agriculture AI Bot is an intelligent system designed to assist farmers in optimizing their agricultural practices. It utilizes machine learning algorithms to analyze data from various sources, such as weather forecasts, soil conditions, and crop health, providing actionable insights and recommendations for improved yield and resource management."
          }
          image={p3}
          stack={[
            "Machine Learning",
            "Java",
            "MySQL",
            "ANN",
            "RNN",
            "WAMP Server",
          ]}
        />
        <ProjectCard
          title={"E-Commerce Order Management System"}
          description={
            "An E-Commerce Order Management System is a software solution that streamlines the process of managing customer orders in an online retail environment. It automates order processing, inventory management, and shipping logistics, ensuring efficient order fulfillment and enhancing the overall customer experience."
          }
          image={p2}
          stack={[
            "Html",
            "CSS",
            "JS",
            "React",
            "Bootstrap",
            "Thymeleaf",
            "Spring Boot",
            "Java",
            "MySQL",
          ]}
        />
      </Grid>
    </Flex>
  );
};

export default Project;
