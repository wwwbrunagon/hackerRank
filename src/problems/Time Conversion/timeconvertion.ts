export function timeConvertion(s: string): string {
	const period = s.slice(-2); //AM or PM
	const time = s.slice(0, 8); // hh:mm:ss

	let [hh, mm, ss] = time.split(':');
	let hour = Number(hh);

	if (period === 'AM') {
		if (hour === 12) {
			hour = 0;
		}
	} else {
		//PM
		if (hour !== 12) {
			hour += 12;
		}
	}

	const formattedHour = hour.toString().padStart(2, '0');
	return `${formattedHour}:${mm}:${ss}`;
}

//padStart(2, '0') → If length < 2 → pad with '0'
// If length ≥ 2 → return unchanged
