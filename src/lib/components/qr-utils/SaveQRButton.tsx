import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import html2canvas from "html2canvas";
import { useState } from "react";

const SaveQRButton = () => {
  const [size, setSize] = useState<number>(2000);

  const handleSetSize = (_: string, valueAsNumber: number) => {
    setSize(Number.isNaN(valueAsNumber) ? 1 : valueAsNumber);
  };

  const handleSaveImage = async () => {
    html2canvas(
      document.querySelector("#react-qrcode-logo") as HTMLElement
    ).then((canvas) => {
      const resizedCanvas = document.createElement("canvas");
      resizedCanvas.setAttribute("width", size.toString());
      resizedCanvas.setAttribute("height", size.toString());
      const ctx = resizedCanvas.getContext("2d");
      ctx?.drawImage(
        canvas,
        0,
        0,
        canvas.width,
        canvas.height,
        0,
        0,
        size,
        size
      );

      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = resizedCanvas.toDataURL();
      link.click();
    });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="blue" width="full">
          Save QR Code
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />

        <PopoverHeader>configuration</PopoverHeader>

        <PopoverBody>
          <FormControl>
            <FormLabel>size (px)</FormLabel>

            <NumberInput
              defaultValue={size}
              value={size}
              min={1}
              max={5000}
              onChange={handleSetSize}
              clampValueOnBlur
              variant="filled"
              size="lg"
            >
              <NumberInputField borderRadius={24} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <FormHelperText>min: 1, max: 5000</FormHelperText>
          </FormControl>
        </PopoverBody>

        <PopoverFooter>
          <Button onClick={handleSaveImage} width="full" colorScheme="green">
            Download
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default SaveQRButton;
