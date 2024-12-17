import {
  Flex,
  Heading,
  Textarea,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { QRCode } from "react-qrcode-logo";

import SaveQRButton from "lib/components/qr-utils/SaveQRButton";
import { QRStyleOptions } from "lib/components/qr-utils/types";
import FormInput from "lib/components/ui/FormInput";
import FormSelect from "lib/components/ui/FormSelect";

import type { VCardQRFormType } from "./types";

export const VCardQRForm = () => {
  const qrCodeSize = useBreakpointValue({
    base: 200,
    sm: 220,
    md: 200,
  });

  const { register, watch } = useForm<VCardQRFormType>({
    defaultValues: {
      fgColor: "#000000",
    },
  });
  const values = watch();
  // eslint-disable-next-line complexity, sonarjs/cognitive-complexity
  const value = useMemo(() => {
    const {
      firstName,
      lastName,
      mobilePhoneNumber,
      otherPhoneNumber,
      emailAddress,
      companyName,
      jobTitle,
      streetAddress,
      city,
      state,
      postalCode,
      country,
      websiteURL,
    } = values;
    return [
      "BEGIN:VCARD",
      `${firstName || lastName ? "N:" : ""}${lastName}${
        lastName ? ";" : ""
      }${firstName}`,
      mobilePhoneNumber && `TEL;TYPE=work,VOICE:${mobilePhoneNumber}`,
      otherPhoneNumber && `TEL;TYPE=home,VOICE:${otherPhoneNumber}`,
      emailAddress && `EMAIL:${emailAddress}`,
      companyName && `ORG:${companyName}`,
      jobTitle && `TITLE:${jobTitle}`,
      (streetAddress || city || state || postalCode || country) &&
        `ADR;TYPE=WORK,PREF:;;${streetAddress || ""}${
          streetAddress ? ";" : ""
        }${city || ""}${city ? ";" : ""}${state || ""}${state ? ";" : ""}${
          postalCode || ""
        }${postalCode ? ";" : ""}${country || ""}`,
      websiteURL && `URL:${websiteURL}`,
      `VERSION:3.0`,
      `END:VCARD`,
    ]
      .filter(Boolean)
      .join("\n");
  }, [values]);

  return (
    <VStack align="start" gap={12}>
      <Heading>VCard QR Generator</Heading>
      <Flex
        gap={8}
        direction={{
          base: "column",
          md: "row",
        }}
        width="100%"
      >
        <VStack gap={2}>
          <QRCode size={qrCodeSize} {...values} value={value} />
          <SaveQRButton />
        </VStack>

        <VStack gap={4} flex={1}>
          <FormInput {...register("firstName")} label="First Name" />
          <FormInput {...register("lastName")} label="Last Name" />
          <FormInput
            {...register("mobilePhoneNumber")}
            label="Mobile Phone Number"
            type="tel"
          />
          <FormInput
            {...register("otherPhoneNumber")}
            label="Phone Number"
            type="tel"
          />
          <FormInput {...register("emailAddress")} label="Email" />
          <FormInput {...register("companyName")} label="Company" />
          <FormInput {...register("jobTitle")} label="Job Title" />
          <FormInput {...register("streetAddress")} label="Street" />
          <FormInput {...register("city")} label="City" />
          <FormInput {...register("state")} label="State" />
          <FormInput {...register("country")} label="Country" />
          <FormInput {...register("websiteURL")} label="Website" />
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

          <Textarea value={value} disabled />
        </VStack>
      </Flex>
    </VStack>
  );
};
