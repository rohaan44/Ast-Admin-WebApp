import { Certification, Student } from "@/pages/tutor/certification/certification_type";

export const mockCertifications: Certification[] = [
  {
    id: "1",
    studentName: "John D.",
    studentInitials: "JD",
    courseName: "S&C - Livello 1",
    expiryDate: "20/12/2026",
    completionDate: "12 settembre 2025",
    status: "active",
    courseProgress: 100,
    examScore: 92,
    certificateNumber: "AST-2025-00923",
    issueDate: "12 settembre 2025",
    history: [
      { id: "h1", issueDate: "12 settembre 2024", expiryDate: "12 settembre 2025", status: "expired" },
      { id: "h2", issueDate: "1 agosto 2023", expiryDate: "1 agosto 2024", status: "expired" },
    ],
  },
  {
    id: "2",
    studentName: "Maria Rossi",
    studentInitials: "MR",
    courseName: "Nozioni di base sulla nutrizione",
    issueDate: "15/09/2025",
    expiryDate: "15/10/2025",
    completionDate: "15 settembre 2025",
    status: "pending",
    courseProgress: 100,
    examScore: 88,
    duration: "12 settimane",
  },
  {
    id: "3",
    studentName: "Sarah Lee",
    studentInitials: "SL",
    courseName: "Scienze Motorie",
    expiryDate: "05/10/2024",
    status: "expired",
    courseProgress: 100,
    examScore: 75,
  },
  {
    id: "4",
    studentName: "John D.",
    studentInitials: "JD",
    courseName: "S&C - Livello 1",
    expiryDate: "20/12/2026",
    status: "active",
    courseProgress: 100,
    examScore: 90,
  },
  {
    id: "5",
    studentName: "John sick",
    studentInitials: "JS",
    courseName: "Padronanza della Nutrizione Sportiva",
    expiryDate: "15 ottobre 2025",
    status: "expiring_soon",
    courseProgress: 100,
    examScore: 85,
  },
];

export const mockStudents: Student[] = [
  {
    id: "s1",
    name: "John Doe",
    initials: "JD",
    courses: [
      { id: "c1", name: "Padronanza della Nutrizione Sportiva", completionDate: "22 settembre 2025", duration: "12 settimane" },
      { id: "c2", name: "Allenamento di forza avanzato", completionDate: "15 agosto 2025", duration: "8 settimane" },
    ],
  },
  {
    id: "s2",
    name: "Maria Rossi",
    initials: "MR",
    courses: [
      { id: "c3", name: "Nozioni di base sulla nutrizione", completionDate: "10 settembre 2025", duration: "6 settimane" },
    ],
  },
];

export const expiringCertifications = mockCertifications.filter(
  (c) => c.status === "expiring_soon" || c.status === "expired"
);
