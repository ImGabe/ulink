<script lang="typescript">
	import { formatDistance, addSeconds } from 'date-fns';
	export let duration: number;

	$: tempDuration = duration;

	function getTime(seconds: number): string {
		return !seconds
			? 'Expired'
			: 'Expire ' +
					formatDistance(addSeconds(new Date(), seconds), new Date(), { addSuffix: true });
	}

	function tick(): void {
		tempDuration <= 0 ? clearInterval(interval) : (tempDuration -= 1);
	}

	const interval = setInterval(tick, 1000);
</script>

{getTime(tempDuration)}
