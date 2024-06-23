import { SortOrder } from "../../util/SortOrder";

export type MedicalHistoryOrderByInput = {
  condition?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  doctorId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
