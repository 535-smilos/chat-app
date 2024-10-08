import React from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Avatar, Box, Text } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor={"pointer"}
      bg="#e8e8e8"
      _hover={{
        background: "#38b2ac",
        color: "white",
      }}
      w={"100%"}
      display={"flex"}
      alignItems={"center"}
      color={"black"}
      px={3}
      py={2}
      mb={2}
      borderRadius={"lg"}
    >
      <Avatar
        mr={2}
        size={"md"}
        cursor={"pointer"}
        name={user.name}
        src={user.pic}
      />

      <Box>
        <Text fontSize={"lg"}>{user.name}</Text>
        <Text fontSize={"sm"}><b>Email:</b> {user.email}</Text>
      </Box>

    </Box>
  );
};

export default UserListItem;
