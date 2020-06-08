import { Shift } from "./shift.model";
import { WorkingCalendar } from "./working-calendar.model";
import { TelesalesOfficer } from "./telesale-officer.model";

export interface Caller {
    userId?: number;
    callerId?: number;
    channelMobileApplied?: boolean | number;
    channelMicrositeApplied?: boolean | number;
    channelLoyaltyApplied?: boolean | number;
    isOverLaping?: boolean | number;
    happeningShift?: Shift;
    working_shifts?: Shift[];
    working_calendars?: WorkingCalendar[];
    telesales_officer: TelesalesOfficer;
}