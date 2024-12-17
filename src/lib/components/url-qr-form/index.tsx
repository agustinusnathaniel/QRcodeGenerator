import { Box, Center, Grid, useBreakpointValue } from "@chakra-ui/react";
import { useFormik } from "formik";
import { QRCode } from "react-qrcode-logo";

import FormInput from "lib/components/ui/FormInput";
import FormSelect from "lib/components/ui/FormSelect";

import SaveQRButton from "./SaveQRButton";
import type { QRFormType } from "./types";
import { QRStyleOptions } from "./types";

export const URLQRForm = () => {
  const qrCodeSize = useBreakpointValue({
    base: 200,
    sm: 220,
    md: 200,
  });

  const { values, handleChange } = useFormik<QRFormType>({
    initialValues: {
      value: "https://google.com",
      fgColor: "#000000",
    },
    onSubmit: () => {},
  });
  const { value, qrStyle } = values;

  return (
    <Grid gap={8} templateColumns={["1", "1", "1fr 2fr"]}>
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
            label="Content"
            name="value"
            value={value}
            onChange={handleChange}
            placeholder="URL / texts"
          />
          <FormSelect
            label="QR Style"
            name="qrStyle"
            value={qrStyle}
            onChange={handleChange}
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
  );
};
