import { ModelTransformer } from "../generic-table/model-transformer.model";
import { Shift } from "../models/shift.model";

export class ShiftTransformer extends ModelTransformer<Shift> {
  transform(shifts: Shift[]): any {
    return shifts.map(shift => ({
      ...shift,
      shiftProgress: { value: shift.shiftProgress }
    }));
  }
}
