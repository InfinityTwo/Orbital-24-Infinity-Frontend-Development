import { Prisma } from "@prisma/client";

export enum TopicStatus {
  // CREATED = "Created", // topic created, files may or may not be uploaded,
  GENERATING = "Generating...", // generating in progress
  COMPLETED = "Completed", // all generated questions graded
  ATTEMPTING = "Attempting", // there are questions ungraded, default state
}

export interface ITopic {
  topicID: number;
  topicName: string;
  lastModified: Date;
  status: TopicStatus;
  questionsAttempted: number;
  questionsTotal: number;
  data: string;
  questions: Prisma.QuestionUncheckedCreateInput[];
  questionsOptions: Prisma.QuestionOptionsUncheckedCreateInput[][];
  files: Prisma.FileUncheckedCreateInput[];
}
