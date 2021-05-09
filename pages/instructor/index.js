import Head from "next/head";
import { Container, Controls, Courses } from "./styles";
import { CreateCourse } from "../../components/CourseForm";
import CourseCard from "../../components/CourseCard";
import { SimpleGrid, Spinner, useRadio } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../contexts/userContext";
import { useRouter } from "next/router";
import { db } from "../../components/firebase";

const MyCourses = () => {
  const [ready, setReady] = useState(false);
  const [courses, setCourses] = useState([]);
  const { user } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (!user.uid) {
      router.push("/login");
    }
    if (user.type !== "instructor") {
      router.push("/courses");
    }

    db.collection("courses")
      .where(`instructor.uid`, "==", user.uid)
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

  const handleNewCourse = (course) => {
    console.log(course);
    db.collection("courses")
      .add({ ...course, instructor: user, rating: { num: 0, total: 0 } })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        setCourses([
          ...courses,
          { ...course, instructor: user, rating: { num: 0, total: 0 } },
        ]);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const roundHalf = (num) => {
    return Math.round(num * 2) / 2;
  };

  return (
    <>
      <Head>
        <title>Manage Courses | Lectern</title>
        <meta name="description" content="Find an instructor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Controls>
          <CreateCourse onSubmit={handleNewCourse} />
        </Controls>
        <Courses>
          {ready ? (
            <SimpleGrid spacing={4} minChildWidth="250px">
              {courses.map((course, i) => (
                <CourseCard
                  key={i}
                  small
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

export default MyCourses;
