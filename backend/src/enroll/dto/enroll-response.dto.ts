export class EnrollResponseDto {
  id: string;
  studentId: string;
  studentFirstName: string;
  studentLastName: string;
  courseId: string;
  courseName: string;

  subject: string;
  lesson: string; // Not sure
  price: number;
  capacity: number;
  hour: number; // Not sure

  status: string;

  learningType: string;
  location: string;
  studentCount: number;

  dateTimeCreated: Date;
  dateTimeUpdated: Date;
}