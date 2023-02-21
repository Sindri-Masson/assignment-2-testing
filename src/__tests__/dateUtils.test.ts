import { describe, it, expect } from 'vitest'

import { DATE_UNIT_TYPES } from '../constants'

import {
    getCurrentYear,
    add,
    isWithinRange,
    isDateBefore,
    isSameDay,
} from '../dateUtils'

describe('Date Utils', () => {
    it('should return current year', () => {
        expect(getCurrentYear()).toBe(2023)
    })

    it('should add 1 day to date', () => {
        const date = new Date(2000, 9, 17)
        const expected = new Date(2000, 9, 18)
        expect(add(date, 1)).toEqual(expected)
    })

    it('should add 1 month to date', () => {
        const date = new Date(2000, 9, 18)
        const expected = new Date(2000, 10, 18)
        expect(add(date, 1, DATE_UNIT_TYPES.MONTHS)).toEqual(expected)
    })

    it('should add 1 year to date', () => {
        const date = new Date(2000, 9, 18)
        const expected = new Date(2001, 9, 18)
        expect(add(date, 1, DATE_UNIT_TYPES.YEARS)).toEqual(expected)
    })

    it('should return true if date is within range', () => {
        const date = new Date(2000, 9, 18)
        const from = new Date(2000, 9, 17)
        const to = new Date(2000, 9, 19)
        expect(isWithinRange(date, from, to)).toBe(true)
    })

    it('should return false if date is not within range', () => {
        const date = new Date(2000, 9, 18)
        const from = new Date(2000, 9, 19)
        const to = new Date(2000, 9, 20)
        expect(isWithinRange(date, from, to)).toBe(false)
    })

    it('should return false if date is on the lower edge of range', () => {
        const date = new Date(2000, 9, 18)
        const from = new Date(2000, 9, 18)
        const to = new Date(2000, 9, 19)
        expect(isWithinRange(date, from, to)).toBe(false)
    })

    it('should return false if date is on the upper edge of range', () => {
        const date = new Date(2000, 9, 19)
        const from = new Date(2000, 9, 18)
        const to = new Date(2000, 9, 19)
        expect(isWithinRange(date, from, to)).toBe(false)
    })

    it('should return true if date is before compare date', () => {
        const date = new Date(2000, 9, 18)
        const compareDate = new Date(2000, 9, 19)
        expect(isDateBefore(date, compareDate)).toBe(true)
    })

    it('should return false if date is not before compare date', () => {
        const date = new Date(2000, 9, 19)
        const compareDate = new Date(2000, 9, 18)
        expect(isDateBefore(date, compareDate)).toBe(false)
    })

    it('should return false if date is same day as compare date', () => {
        const date = new Date(2000, 9, 18)
        const compareDate = new Date(2000, 9, 18)
        expect(isDateBefore(date, compareDate)).toBe(false)
    })

    it('should return true if date is same day as compare date', () => {
        const date = new Date(2000, 9, 18)
        const compareDate = new Date(2000, 9, 18)
        expect(isSameDay(date, compareDate)).toBe(true)
    })

    it('should return false if date is not same day as compare date', () => {
        const date = new Date(2000, 9, 18)
        const compareDate = new Date(2000, 9, 19)
        expect(isSameDay(date, compareDate)).toBe(false)
    })
})
