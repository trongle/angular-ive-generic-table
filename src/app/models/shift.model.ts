import { Caller } from "./caller.model";

export interface Shift {
  shiftId?: number;
  shiftTimeTo?: Date;
  shiftTimeFrom?: Date;
  shiftName?: string;
  shiftDate?: Date;
  shiftStartedAt?: Date;
  shiftRemark?: string;
  shiftEndedAt?: Date;
  shiftActive?: boolean;
  shiftProgress?: string;
  personUpdated?: number;
  personDeleted?: number;
  personDeactivated?: number;
  personCreated?: number;
  dtUpdated?: Date;
  dtDeleted?: Date;
  dtDeactivated?: Date;
  dtCreated?: Date;
  channelMobileApplied?: boolean;
  channelMicrositeApplied?: boolean;
  channelLoyaltyApplied?: boolean;
  callers?: Caller[];
}
