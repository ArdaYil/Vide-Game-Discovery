import { HStack, Image, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Input, Switch, Text } from "@chakra-ui/react";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import logo from "../../public/images/logo.webp";

interface Props {
  onToggleMode: () => void;
}

export default function Nav({ onToggleMode }: Props) {
  return (
    <HStack padding="2">
      <Image boxSize="60px" src={logo} />
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon height="4" />}
        />
        <Input placeholder="Search Games" borderRadius="full" />
      </InputGroup>
      <ToggleSwitch onChange={onToggleMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
}
