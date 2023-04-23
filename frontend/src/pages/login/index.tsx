import { LabelInput } from '@/components/Layout/base/labelInput';
import { Title } from '@/components/Title/tilte';
import { Box, VStack } from '@chakra-ui/react';

const login = () => {
  return (
    <>
      <Title titleSize="h3" borderSize="2px solid">
        test!
      </Title>
      <VStack>
        <LabelInput>ID</LabelInput>
        <LabelInput>password</LabelInput>
      </VStack>
    </>
  );
};

export default login;
