import type { QRFormType } from "lib/components/qr-utils/types";

export type VCardQRFormType = Omit<QRFormType, "value"> & {
  firstName?: string;
  lastName?: string;
  mobilePhoneNumber?: string;
  otherPhoneNumber?: string;
  emailAddress?: string;
  companyName?: string;
  jobTitle?: string;
  streetAddress?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  websiteURL?: string;
};
