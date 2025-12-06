export type CertificationStatus = "active" | "pending" | "expired" | "expiring_soon";

export interface Certification {
  id: string;
  studentName: string;
  studentInitials: string;
  courseName: string;
  courseLevel?: string;
  issueDate?: string;
  expiryDate: string;
  completionDate?: string;
  status: CertificationStatus;
  courseProgress?: number;
  examScore?: number;
  certificateNumber?: string;
  duration?: string;
  history?: CertificationHistory[];
}

export interface CertificationHistory {
  id: string;
  issueDate: string;
  expiryDate: string;
  status: "expired" | "active";
}

export interface Student {
  id: string;
  name: string;
  initials: string;
  courses: StudentCourse[];
}

export interface StudentCourse {
  id: string;
  name: string;
  completionDate: string;
  duration: string;
}
