import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { QRCode } from "react-qrcode-logo";

import SaveQRButton from "lib/components/qr-utils/SaveQRButton";
import type { QRFormType } from "lib/components/qr-utils/types";
import { QRStyleOptions } from "lib/components/qr-utils/types";
import FormInput from "lib/components/ui/FormInput";
import FormSelect from "lib/components/ui/FormSelect";

export const URLQRForm = () => {
  const qrCodeSize = useBreakpointValue({
    base: 200,
    sm: 220,
    md: 200,
  });

  const { register, watch } = useForm<QRFormType>({
    defaultValues: {
      value: "https://google.com",
      fgColor: "#000000",
    },
  });
  const values = watch();

  return (
    <VStack gap={8} align="start">
      <Flex>
        <Button as={Link} href="/vcard">
          VCard
        </Button>
      </Flex>
      <Grid gap={8} templateColumns={["1", "1", "1fr 2fr"]} width="100%">
        <Box>
          <Center>
            <Grid gap={2}>
              <Box id="qr-code">
                <QRCode size={qrCodeSize} {...values} />
              </Box>

              <SaveQRButton />
            </Grid>
          </Center>
        </Box>

        <Box>
          <Grid gap={4}>
            <FormInput
              {...register("value")}
              label="Content"
              placeholder="URL / texts"
            />
            <FormSelect
              {...register("qrStyle")}
              label="QR Style"
              placeholder="Select QR Style"
            >
              {QRStyleOptions.map((qrStyleOption) => (
                <option key={qrStyleOption} value={qrStyleOption}>
                  {qrStyleOption}
                </option>
              ))}
            </FormSelect>
          </Grid>
        </Box>
      </Grid>
    </VStack>
  );
};
