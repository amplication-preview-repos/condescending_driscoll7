import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  createdAt?: SortOrder;
  dob?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
