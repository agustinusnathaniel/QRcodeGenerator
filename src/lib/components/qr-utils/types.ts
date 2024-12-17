import type { IProps } from "react-qrcode-logo";

export type QRFormType = Pick<
  IProps,
  | "value"
  | "logoImage"
  | "logoWidth"
  | "logoHeight"
  | "logoOpacity"
  | "bgColor"
  | "fgColor"
  | "quietZone"
  | "qrStyle"
>;

export const QRStyleOptions: Array<IProps["qrStyle"]> = ["dots", "squares"];
