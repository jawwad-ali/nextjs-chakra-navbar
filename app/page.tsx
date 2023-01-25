"use client";
import {
  useColorMode,
  Switch,
  Icon,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { HamburgerIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";
import { FaMapMarker, FaCartPlus } from "react-icons/fa";
import NextLink from "next/link";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, setDisplay] = useState("none");

  return (
    <Flex>
      <Flex
        pos="fixed"
        alignItems={"center"}
        w="100%"
        justifyContent={"flex-end"}
        right="1"
        top="1"
      >
        {/* Menu Items */}
        <Flex display={{ base: "none", md: "none", lg: "flex" }}>
          <NextLink href="/" passHref>
            <Button
              variant={"ghost"}
              aria-label="Home"
              my={5}
              w="100%"
              _hover={{ textDecoration: "underline" }}
            >
              <Icon as={EmailIcon} mr={1} />
              info@example.com
            </Button>
          </NextLink>

          <NextLink href="/branches" passHref>
            <Button
              variant={"ghost"}
              aria-label="About"
              my={5}
              w="100%"
              _hover={{ textDecoration: "underline" }}
            >
              <Icon as={FaMapMarker} mr={1} />
              Branches
            </Button>
          </NextLink>

          <NextLink href="/stores" passHref>
            <Button
              variant={"ghost"}
              aria-label="contact"
              my={5}
              w="100%"
              _hover={{ textDecoration: "underline" }}
            >
              <Icon as={FaCartPlus} mr={1} />
              Stores
            </Button>
          </NextLink>
        </Flex>

        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr="2"
          icon={<HamburgerIcon />}
          onClick={() => setDisplay("flex")} 
          display={{ base: "flex", md: "flex", lg: "none" }}
        />

        {/* Dark Mode button */}
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />

        {/* For mobile */}
        <Flex
          w="100vw"
          bgColor={"gray.50"}
          zIndex={50}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir={"column"}
          display={display}
          right="1"
        >
          <Flex justify="flex-end">
            <IconButton
              mt="2"
              mr="2"
              aria-label="Close menu"
              size="lg"
              onClick={() => setDisplay("none")}
              icon={<CloseIcon />}
            />
          </Flex>
          <Flex flexDir="column" align="center">
            <NextLink href="/" passHref>
              <Button
                variant={"ghost"}
                aria-label="Home"
                my={5}
                w="100%"
                _hover={{ textDecoration: "underline" }}
              >
                <Icon as={EmailIcon} mr={1} />
                info@example.com
              </Button>
            </NextLink>

            <NextLink href="/branches" passHref>
              <Button
                variant={"ghost"}
                aria-label="About"
                my={5}
                w="100%"
                _hover={{ textDecoration: "underline" }}
              >
                <Icon as={FaMapMarker} mr={1} />
                Branches
              </Button>
            </NextLink>

            <NextLink href="/stores" passHref>
              <Button
                variant={"ghost"}
                aria-label="contact"
                my={5}
                w="100%"
                _hover={{ textDecoration: "underline" }}
              >
                <Icon as={FaCartPlus} mr={1} />
                Stores
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
