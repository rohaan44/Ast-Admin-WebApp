export type PresentationStatus = "pending" | "approved" | "rejected";

export interface Presentation {
  id: string;
  studentName: string;
  courseName: string;
  moduleName: string;
  type: string;
  date: string;
  status: PresentationStatus;
  avatar?: string;
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
}
