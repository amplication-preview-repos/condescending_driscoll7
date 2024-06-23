import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
