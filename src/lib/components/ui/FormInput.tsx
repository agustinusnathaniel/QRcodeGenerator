import type { FormControlProps, InputProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input,
} from "@chakra-ui/react";

type FormInputProps = Pick<
  FormControlProps,
  "isInvalid" | "isDisabled" | "isRequired"
> & {
  label?: string;
  errorMsg?: string;
} & InputProps;

const FormInput = forwardRef(
  (
    {
      isDisabled,
      isInvalid,
      isRequired,
      label,
      errorMsg,
      ...inputProps
    }: FormInputProps,
    ref
  ) => {
    return (
      <FormControl
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        isRequired={isRequired}
      >
        {label && <FormLabel>{label}</FormLabel>}
        <Input borderRadius={24} size="lg" ref={ref} {...inputProps} />
        {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
      </FormControl>
    );
  }
);

export default FormInput;
