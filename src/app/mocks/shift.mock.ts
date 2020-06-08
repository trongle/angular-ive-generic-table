import { Shift } from "../models/shift.model";

export const SHIFTS: Shift[] = [
  {
    shiftId: 29,
    shiftDate: new Date("2020-05-17T17:30:00.000000Z"),
    shiftTimeFrom: new Date("2020-05-18T17:25:24.000000Z"),
    shiftTimeTo: new Date("2020-05-18T17:29:24.000000Z"),
    shiftName: "Shift 1",
    shiftActive: true,
    dtDeactivated: null,
    personDeactivated: null,
    shiftStartedAt: null,
    shiftEndedAt: null,
    shiftRemark: null,
    channelMobileApplied: true,
    channelMicrositeApplied: false,
    channelLoyaltyApplied: false,
    shiftProgress: "completed"
  },
  {
    shiftId: 30,
    shiftDate: new Date("2020-05-17T17:30:00.000000Z"),
    shiftTimeFrom: new Date("2020-05-18T16:30:44.000000Z"),
    shiftTimeTo: new Date("2020-05-18T17:29:44.000000Z"),
    shiftName: "Shift 2",
    shiftActive: true,
    dtDeactivated: null,
    personDeactivated: null,
    shiftStartedAt: null,
    shiftEndedAt: null,
    shiftRemark: null,
    channelMobileApplied: true,
    channelMicrositeApplied: false,
    channelLoyaltyApplied: true,
    shiftProgress: "completed"
  }
];