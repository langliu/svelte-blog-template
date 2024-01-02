<script>
	import { page } from '$app/stores';
	import { title } from '$lib/config';
	import github from '$lib/images/github.svg';
	import Toggle from './toggle.svelte';
	import Logo from './Logo.svelte';
</script>

<header>
	<Logo />
	<nav>
		<!-- <a href="/" class="title">
			<b>{title}</b>
		</a> -->
		<ul class="links">
			<li>
				<a href="/" class:selected={$page.url.pathname === '/'}>Home</a>
			</li>
			<li>
				<a href="/about" class:selected={$page.url.pathname === '/about'}>About</a>
			</li>
			<li>
				<a class:selected={$page.url.pathname === '/rss.xml'} href="/rss.xml" target="_blank">RSS</a
				>
			</li>
			<li>
				<a href="/sverdle" class:selected={$page.url.pathname === '/sverdle'}>Sverdle</a>
			</li>
		</ul>

		<Toggle />
	</nav>
</header>

<style>
	header {
		display: flex;
		margin: 0 auto;
		padding: 2em;
		width: 100%;
	}

	nav {
		align-items: center;
		display: flex;
		flex: 1;
		font-family: var(--font-family-sans);
		font-weight: 700;
		justify-content: flex-end;
		text-transform: uppercase;
		gap: 20px;
		& .links {
			display: flex;
			gap: 20px;
		}
	}

	a {
		color: inherit;
		text-decoration: none;
		padding: 10px 5px;
		display: block;
		position: relative;
		min-width: 70px;
		text-align: center;
	}

	a:not(.selected) {
		opacity: 0.7;
	}

	a::before {
		content: '';
		position: absolute;
		transition: transform 0.3s ease;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background: var(--text-2);
		transform: scaleX(0);
	}

	a:hover::before,
	.selected::before {
		transform: scaleX(1);
	}

	.selected::before {
		background: var(--primary-color);
	}

	.theme-toggle-container {
		width: 75px;
	}
</style>
