<script>
	import { formatDate } from '$lib/utils/index';
	import { title } from '$lib/config';
	export let data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post, i}
			{#if i !== 0}
				<hr />
			{/if}
			<li class="post">
				<a href={'/posts/' + post.slug} class="title">{post.title}</a>
				<p class="description">{post.description}</p>
				<p class="date">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		margin: 0 auto;
		max-width: 42em;
		width: 100%;
	}
	.post {
		max-inline-size: var(--size-content-3);
	}
	hr {
		padding: 0;
		border: 0;
		height: 10px;
		margin: 40px auto;
		width: 100%;
		background-color: transparent;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='10'  viewBox='0 0 20 10' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-miterlimit='10'%3e%3cpath fill='none' d='M0 0h20v10H0z'/%3e%3cclipPath id='a'%3e%3cpath d='M0 0h20v10H0z'/%3e%3c/clipPath%3e%3cg clip-path='url(%23a)'%3e%3cpath d='M20 7.384c-4.999-.001-5-4.768-9.999-4.768C5 2.616 5 7.384 0 7.384' fill='none' stroke-width='3' stroke='%23548E9B'/%3e%3c/g%3e%3c/svg%3e");
		background-repeat: repeat-x;
	}

	.title {
		font-size: 1.8em;
		text-transform: capitalize;
		font-weight: 700;
		margin: 1.6em 0 0 0;
		color: inherit;
		transition: color linear 0.15s;
		&:hover {
			color: var(--primary-color);
			text-decoration: underline;
		}
	}

	.date {
		color: var(--text-2);
		font-weight: 700;
		font-size: 16px;
	}

	.description {
		font-size: 1.3rem;
		line-height: 1.75em;
		margin: 1.2em 0;
	}
</style>
