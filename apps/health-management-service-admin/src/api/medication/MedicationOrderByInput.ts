import { SortOrder } from "../../util/SortOrder";

export type MedicationOrderByInput = {
  createdAt?: SortOrder;
  dosage?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  patientId?: SortOrder;
  prescriptionDate?: SortOrder;
  updatedAt?: SortOrder;
};
