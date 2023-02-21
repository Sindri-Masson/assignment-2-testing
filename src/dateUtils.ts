import { isBefore, isEqual, isWithinInterval, getYear } from "date-fns";
import { add as fnsAdd } from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear() {
  const today = new Date();
  return getYear(today);
}

export function add(date: Date, number: number, type = DATE_UNIT_TYPES.DAYS) {
  switch (type) {
    case DATE_UNIT_TYPES.SECONDS:
      return fnsAdd(date, { seconds: number });
    case DATE_UNIT_TYPES.MINUTES:
      return fnsAdd(date, { minutes: number });
    case DATE_UNIT_TYPES.DAYS:
      return fnsAdd(date, { days: number });
    case DATE_UNIT_TYPES.WEEKS:
      return fnsAdd(date, { weeks: number });
    case DATE_UNIT_TYPES.MONTHS:
      return fnsAdd(date, { months: number });
    case DATE_UNIT_TYPES.YEARS:
      return fnsAdd(date, { years: number });
  }
}

export function isWithinRange(date: Date, from: Date, to: Date) {
  if (isSameDay(date, from) || isSameDay(date, to)) {
    return false;
  }
  return isWithinInterval(date, { start: from, end: to });
}

export function isDateBefore(date: Date, compareDate: Date) {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date) {
  return isEqual(date, compareDate);
}
