export interface Employee {
  length: any;
  id: number;
  userId: number;
  jobId: number;
  name: string;
  status: 'AKTIF' | 'NONAKTIF'; // Jika status hanya memiliki dua kemungkinan
  salaryPerDay: string;
  salaryPerMonth: string;
  totalWorkDays: number;
  photo: string;
  joinDate: string; // Date dalam format ISO string
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  email: string;
  password: string; // Bisa diganti dengan `hashedPassword` jika lebih jelas
  role: 'USER' | 'ADMIN'; // Sesuaikan jika ada peran lain
  createdAt: string;
  updatedAt: string;
  employee?: Employee; // Optional, karena tidak semua user mungkin memiliki employee data
}

export interface GetUserType {
  message: string;
  user: User;
}

export interface Jobs {
  id: number;
  title: string;
  description: string;
  employees: Employee;
}

export interface ErrorResponse {
  message: string;
}
