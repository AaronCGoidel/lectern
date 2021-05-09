import styled from "styled-components";
import { Tag, Box, Image, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const CourseCard = (props) => {
  return (
    <Box boxShadow="md" p="6" rounded="md" bg="white" maxW="sm">
      <Image src={props.img} alt={""} />
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        <Box>{props.title}</Box>
        <Box as="span" color="gray.600">
          Taught by {props.instructor}
        </Box>
        <HStack spacing={2} marginTop={2}>
          {props.tags.map((tag, i) => (
            <Tag key={i}>{tag}</Tag>
          ))}
        </HStack>
      </Box>

      <Box d="flex" mt="2" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < props.rating ? "teal.500" : "gray.300"}
            />
          ))}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {props.revCount} reviews
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;
