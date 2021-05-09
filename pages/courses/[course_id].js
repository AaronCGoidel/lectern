import { useRouter } from 'next/router'

const Course = () => {
  const router = useRouter()
  const { course_id } = router.query

  return <p>Course: {course_id}</p>
}

export default Course;