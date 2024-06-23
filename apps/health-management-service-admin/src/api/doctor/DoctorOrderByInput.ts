import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  specialty?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
