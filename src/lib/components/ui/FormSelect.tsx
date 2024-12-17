import type { FormControlProps, SelectProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Select,
} from "@chakra-ui/react";

type FormSelectProps = Pick<
  FormControlProps,
  "isInvalid" | "isDisabled" | "isRequired"
> & {
  label?: string;
  errorMsg?: string;
} & SelectProps;

const FormSelect = forwardRef(
  (
    {
      isInvalid,
      isDisabled,
      isRequired,
      label,
      errorMsg,
      ...selectProps
    }: FormSelectProps,
    ref
  ) => {
    return (
      <FormControl
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        isRequired={isRequired}
      >
        {label && <FormLabel>{label}</FormLabel>}
        <Select borderRadius={24} size="lg" ref={ref} {...selectProps} />
        {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
      </FormControl>
    );
  }
);

export default FormSelect;
