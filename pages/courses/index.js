import Head from "next/head";
import { Container, Controls, Courses } from "./styles";
import {
  Select,
  Heading,
  FormLabel,
  Button,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { FindCourse } from "../../components/CourseForm";
import CourseCard from "../../components/CourseCard";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/userContext";
import { useRouter } from "next/router";
import { db } from "../../components/firebase";

const FindClass = () => {
  const [ready, setReady] = useState(false);
  const [courses, setCourses] = useState([]);
  const { user } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (!user.uid) {
      router.push("/login");
    }

    let courseRef = db.collection("courses");
    courseRef
      .get()
      .then((res) => {
        res.forEach((doc) => {
          const data = doc.data();
          setCourses([...courses, data]);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setReady(true);
  }, []);

  const handleUpdateSearch = (subject, level) => {
    let courseRef = db.collection("courses");
    if (subject !== "") {
      courseRef = courseRef.where(`subject`, "==", subject);
    }
    if (level !== "") {
      courseRef = courseRef.where(`level`, "==", level);
    }

    courseRef
      .get()
      .then((res) => {
        setCourses([])
        res.forEach((doc) => {
          const data = doc.data();
          setCourses([...courses, data]);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  const roundHalf = (num) => {
    return Math.round(num * 2) / 2;
  };

  return (
    <>
      <Head>
        <title>Courses | Lectern</title>
        <meta name="description" content="Find an instructor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Controls>
          <FindCourse onSubmit={handleUpdateSearch} />
        </Controls>
        <Courses>
          {ready ? (
            <SimpleGrid spacing={4} minChildWidth="250px">
              {courses.map((course, i) => (
                <CourseCard
                  key={i}
                  instructor={course.instructor.name}
                  tags={[course.subject, course.level]}
                  title={course.title}
                  rating={roundHalf(course.rating.total / course.rating.num)}
                  revCount={course.rating.num}
                />
              ))}
            </SimpleGrid>
          ) : (
            <Spinner size="xl" />
          )}
        </Courses>
      </Container>
    </>
  );
};

export default FindClass;
