import { Box, Button, Container, Divider, Flex, Heading, Stack, Text, Image, Input, useToast } from "@chakra-ui/react";
import { FaGoogle, FaGithub, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handlePaymentClick = () => {
    toast({
      title: "Payment Processing",
      description: "This would initiate the Stripe payment process.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleLoginClick = (provider) => {
    toast({
      title: `Login with ${provider}`,
      description: `This would initiate the ${provider} login process.`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" my="10">
        <Heading mb="5">Healthcare Professionals Job Board</Heading>
        <Image src="https://images.unsplash.com/photo-1516841273335-e39b37888115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsc3xlbnwwfHx8fDE3MDk3ODI2NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="Healthcare Professionals" />
        <Stack spacing="4" mt="10" width="100%">
          <Button colorScheme="blue" onClick={handlePaymentClick}>
            Subscribe Now
          </Button>
          <Divider />
          <Heading size="md">Login with</Heading>
          <Flex justify="space-between" width="100%">
            <Button leftIcon={<FaGoogle />} onClick={() => handleLoginClick("Google")}>
              Google
            </Button>
            <Button leftIcon={<FaGithub />} onClick={() => handleLoginClick("GitHub")}>
              GitHub
            </Button>
            <Button leftIcon={<FaTwitter />} onClick={() => handleLoginClick("Twitter")}>
              Twitter
            </Button>
            <Button leftIcon={<FaFacebookF />} onClick={() => handleLoginClick("Facebook")}>
              Facebook
            </Button>
            <Button leftIcon={<FaLinkedinIn />} onClick={() => handleLoginClick("LinkedIn")}>
              LinkedIn
            </Button>
          </Flex>
          <Divider />
          <Heading size="md">Or enter your email</Heading>
          <Flex>
            <Input placeholder="Email address" />
            <Button ml="2">Send Magic Link</Button>
          </Flex>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
