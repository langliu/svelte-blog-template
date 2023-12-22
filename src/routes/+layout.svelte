<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import PageTransition from './transition.svelte';
	import 'open-props/style';
	import 'open-props/normalize';
	import 'open-props/buttons';
	import './styles.css';

	export let data
</script>

<div class="app">
	<Header />

	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.app {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);
	}

	main {
		padding-block: var(--size-9);
	}

	@media (min-width: 1440px) {
		.app {
			padding-inline: 0;
		}
	}
</style>
