<script lang="typescript">
	import { fade, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import DurationTick from '../duration.svelte';

	interface ShortUrlJson {
		id: string;
		duration: number;
	}

	const urlRequest = import.meta.env.VITE_REQUEST_URL;

	let urlInput: string;
	let durationInput: number;
	let shortenUrls: ShortUrlJson[] = [];

	$: errors = [];

	async function toClipboard() {
		const url = urlRequest + this.id;

		await navigator.clipboard.writeText(url).then(
			() => console.log('Async: Copying to clipboard was successful!'),
			(err) => console.error('Async: Could not copy text: ', err)
		);
	}

	function handlerErrorInput(): string[] {
		errors.length = 0;

		if (!urlInput) errors.push('The URL field is empty.');

		!durationInput
			? errors.push('The duration field is empty.')
			: !Math.max(0, durationInput) || !(durationInput === (durationInput | 0))
			? errors.push('Use only integers and positives.')
			: null;

		setTimeout(() => (errors.length = 0), 10000);

		return errors;
	}

	async function doPost() {
		if (handlerErrorInput().length) return;

		await fetch(urlRequest, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			mode: 'cors',
			body: JSON.stringify({ url: urlInput, duration: durationInput })
		})
			.then((res) => res.json())
			.then((json) => {
				shortenUrls = shortenUrls.concat(json);
			})
			.catch(console.error);
	}
</script>

<div id="container">
	<h1>µlink</h1>
	{#if errors.length}
		<div class="error" transition:fade>
			{#each errors as error}
				<div class="item" transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
					{error}
				</div>
			{/each}
		</div>
	{/if}
	<input type="text" bind:value={urlInput} placeholder="enter your url" required={true} />
	<input
		type="number"
		bind:value={durationInput}
		placeholder="enter seconds duration"
		min="1"
		required={true}
	/>
	<button type="button" on:click={doPost} class="btn">Shorten</button>
	{#if shortenUrls.length}
		<div id="menu" transition:fade>
			{#each shortenUrls as { id, duration }}
				<div class="item" transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
					<a href={urlRequest + id} target="_blank">{id}</a>
					<DurationTick {duration} />
					<span {id} class="copy" on:click={toClipboard}>Copy</span>
				</div>
			{/each}
		</div>
	{/if}
</div>
<div id="footer">
	<a href="https://github.com/ImGabe" target="_blank">Github</a>
</div>
<svelte:body id="body" />

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap');

		body {
			text-align: center;
			background-color: #b7c0ee;

			font-family: 'Lora', serif;

			display: flex;
			justify-content: center;
		}

		input {
			text-align: center;
			width: 100%;
			margin: 8px 0;
			box-sizing: border-box;
			border: 1px solid;
			padding: 10px;
			box-shadow: 5px 10px #050401;
			font-family: 'Lora', serif;
		}

		input::-webkit-outer-spin-button,
		input::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		/* Firefox */
		input[type='number'] {
			-moz-appearance: textfield;
		}

		a {
			text-decoration: none;
			text-transform: uppercase;
		}

		#footer {
			position: fixed;
			left: 0;
			bottom: 0;

			border: 1px solid black;

			width: 100%;
		
			background-color: #7067cf;
			text-align: center;
		}

		#footer a {
			color: black;
		}

		.icon {
			width: 16px;
			height: 16px;
		}

		.error {
			border: 1px solid;
			padding: 10px;
			box-shadow: 5px 10px;
			margin: 1em;
			background-color: #b3001b;
		}

		.copy {
			cursor: pointer;
		}

		.btn {
			background-color: #7067cf;

			font-family: 'Lora', serif;
			border: none;
			color: white;
			padding: 15px 32px;
			border: 1px solid black;

			font-size: 1em;
			margin: 1em;
			cursor: pointer;

			box-shadow: 5px 8px black;
		}

		.btn:active {
			transform: scale(0.98);
			box-shadow: 3px 6px black;
		}

		#menu {
			background-color: white;

			margin: 1em;

			border: 1px solid;
			padding: 10px;
			box-shadow: 5px 10px;
		}

		.item {
			padding: 0.5em;
			display: flex;
			justify-content: space-around;
		}

		.item a {
			color: #7067cf;
		}

	</style>
</svelte:head>
