<script>
  import { title } from '$lib/config'
</script>

<footer>
  <p>{title} &copy {new Date().getFullYear()} Powered by SvelteKit</p>
</footer>

<style>
  footer {
    padding-block: var(--size-7);
    border-top: 1px solid var(--border);
  }

  p {
    color: var(--text-2);
    margin: 0;
  }
</style>
