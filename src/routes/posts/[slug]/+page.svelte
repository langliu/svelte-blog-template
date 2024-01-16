<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<p class="publish-date">发布于 {formatDate(data.meta.date)}</p>
		<h1>{data.meta.title}</h1>
		<hr />
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
		font-size: 4em;
		margin: 0 0 1em 0;
		text-align: center;
	}

	.publish-date {
		color: rgb(107, 111, 114);
		text-transform: uppercase;
		font-weight: 600;
		text-align: center;
	}
	hr {
		padding: 0;
		border: 0;
		height: 10px;
		margin: 40px auto;
		min-width: 100px;
		width: 60%;
		background-color: transparent;
		background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg width='20' height='10'  viewBox='0 0 20 10' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd' stroke-miterlimit='10'%3e%3cpath fill='none' d='M0 0h20v10H0z'/%3e%3cclipPath id='a'%3e%3cpath d='M0 0h20v10H0z'/%3e%3c/clipPath%3e%3cg clip-path='url(%23a)'%3e%3cpath d='M20 7.384c-4.999-.001-5-4.768-9.999-4.768C5 2.616 5 7.384 0 7.384' fill='none' stroke-width='3' stroke='%23548E9B'/%3e%3c/g%3e%3c/svg%3e");
		background-repeat: repeat-x;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style>
