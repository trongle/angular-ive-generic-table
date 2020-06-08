import { Caller } from "./caller.model";

export interface TelesalesOfficer {
  userId?: number;
  caller?: Caller;
  userFullName?: string;
  userName?: string;
}