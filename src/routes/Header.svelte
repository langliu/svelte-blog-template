<script>
  import { page } from '$app/stores'
  import { title } from '$lib/config'
  import Toggle from './toggle.svelte'
  import Logo from './Logo.svelte'
</script>

<header>
  <div class="logo-wrapper">
    <Logo />
    <b>{title}</b>
  </div>
  <nav>
    <ul class="links">
      <li>
        <a href="/" class:selected={$page.url.pathname === '/'}>首页</a>
      </li>
      <li>
        <a href="/posts" class:selected={$page.url.pathname === '/posts'}>文章</a>
      </li>
      <li>
        <a href="/about" class:selected={$page.url.pathname === '/about'}>关于</a>
      </li>
      <li>
        <a class:selected={$page.url.pathname === '/rss.xml'} href="/rss.xml" target="_blank"
          >RSS 订阅</a>
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

  .logo-wrapper {
    display: inline-flex;
    gap: 20px;
    align-items: center;
  }
</style>
