import { Expose } from "class-transformer";
import { TimeSlot } from "./timeSlot.dto";

export class CourseDto {
  @Expose()
  id: string;

  @Expose()
  tutorId: string;

  @Expose() // unique or not
  courseName: string;

  @Expose()
  subject: string;

  @Expose()
  lesson: string; // Not sure

  @Expose()
  courseStartDate: Date;

  @Expose()
  courseFinishDate: Date;

  @Expose()
  timeSlots: Array<TimeSlot>; // Not sure

  @Expose()
  price: number;

  @Expose()
  capacity: number;

  @Expose()
  description: string;

  @Expose()
  hour: number; // Not sure

  @Expose()
  status: string;

  @Expose()
  learningType: string;

  @Expose()
  location: string;

  @Expose()
  students: String[]

  @Expose()
  dateTimeCreated: Date;

  @Expose()
  dateTimeUpdated: Date;
}