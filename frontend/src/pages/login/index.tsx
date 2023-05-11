import { VStack } from '@chakra-ui/react';

import { LabelInput } from '@/components/Layout/base/labelInput';

const login = () => {
  return (
    <>
      <VStack>
        <LabelInput>ID</LabelInput>
        <LabelInput>password</LabelInput>
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      subTitle: 'Login'
    }
  };
}

export default login;
