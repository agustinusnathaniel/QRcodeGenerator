import { Box } from "@chakra-ui/react";

import { URLQRForm } from "lib/components/url-qr-form";

const Home = () => {
  return (
    <Box mb={8} w="full">
      <URLQRForm />
    </Box>
  );
};

export default Home;
