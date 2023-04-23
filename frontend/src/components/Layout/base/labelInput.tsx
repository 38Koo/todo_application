import { HStack, Input, TagLabel, Text } from '@chakra-ui/react';

type Props = {
  children: React.ReactNode;
  placeHolder?: string;
};

export const LabelInput = ({ children, placeHolder = '' }: Props) => {
  return (
    <HStack spacing="10">
      <Text w="100px">{children}</Text>
      <Input placeholder={placeHolder}></Input>
    </HStack>
  );
};
