import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  patientId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
