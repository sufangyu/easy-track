import { ReportOptions, UserIdType } from './options';

export type ReportClassOptions = ReportOptions & {
  dsn: string;
  userId: UserIdType;
};
