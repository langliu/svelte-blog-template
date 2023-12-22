<script>
	import { page } from '$app/stores';
	import { title } from '$lib/config';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import Toggle from './toggle.svelte';
</script>

<header>
	<nav>
		<div class="corner">
			<a href="https://kit.svelte.dev">
				<img src={logo} alt="SvelteKit" />
			</a>
		</div>
		<a href="/" class="title">
			<b>{title}</b>
		</a>
		<ul class="links">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/rss.xml') ? 'page' : undefined}>
				<a href="/rss.xml" target="_blank">RSS</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
				<a href="/sverdle">Sverdle</a>
			</li>
		</ul>

		<Toggle />
	</nav>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 768px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}

	.corner {
		width: 2em;
	}
</style>
