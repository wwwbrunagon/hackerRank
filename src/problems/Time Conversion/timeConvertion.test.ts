import { time } from 'node:console';
import { timeConvertion } from './timeconvertion';

describe('timeConvertion', () => {
	it('converts PM correctly (non-12)', () => {
		expect(timeConvertion('07:05:45PM')).toBe('19:05:45');
	});

	it('keeps 12PM unchanged', () => {
		expect(timeConvertion('12:01:00PM')).toBe('12:01:00');
	});

	it('converts 12AM to 00', () => {
		expect(timeConvertion('12:01:00AM')).toBe('00:01:00');
	});

	it('keeps AM (non-12) unchanged', () => {
		expect(timeConvertion('09:30:00AM')).toBe('09:30:00');
	});

	it('handles midnight exactly', () => {
		expect(timeConvertion('12:00:00AM')).toBe('00:00:00');
	});

	it('handles noon exactly', () => {
		expect(timeConvertion('12:00:00PM')).toBe('12:00:00');
	});
});
