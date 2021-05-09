import styled from "styled-components";
import {
  Tag,
  Box,
  Image,
  HStack,
  Avatar,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const TrueCard = (props) => {
  return (
    <Box boxShadow="md" p="6" rounded="md" bg="white" maxW="sm">
      {!props.small && (
        <Center>
          <Avatar size="2xl" name={props.instructor} src={props.img} />
        </Center>
      )}
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

const CourseCard = (props) => {
  return (
    <>
      {props.enterable ? (
        <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
          <LinkOverlay href={`/courses/${props.id}`}>
            <TrueCard {...props} />
          </LinkOverlay>
        </LinkBox>
      ) : (
        <TrueCard {...props} />
      )}
    </>
  );
};

export default CourseCard;
