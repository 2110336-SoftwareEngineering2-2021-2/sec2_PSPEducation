import { TimeSlot } from "./timeSlot.dto";

export class CourseResponseDto {
  id: string;
  tutorId: string;
  tutorFirstname: string;
  tutorLastname: string;
  courseName: string;
  subject: string;
  lesson: string; // Not sure
  courseStartDate: Date;
  courseFinishDate: Date;
  timeSlots: Array<TimeSlot>; // Not sure
  price: number;
  capacity: number;
  description: string;
  hour: number; // Not sur
  status: string;
  learningType: string;
  location: string;
  students: String[]
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
}