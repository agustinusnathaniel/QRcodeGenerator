import { Box } from "@chakra-ui/react";

import { VCardQRForm } from "lib/components/vcard-qr-form";

const VCardFormPage = () => {
  return (
    <Box mb={8} w="full">
      <VCardQRForm />
    </Box>
  );
};

export default VCardFormPage;
