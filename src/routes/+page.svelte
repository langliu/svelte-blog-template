<script>
  import { title } from '$lib/config'
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Welcome to your new Svelte Blog</h1>
    <p>
      Check out the docs on <a
        href="https://github.com/langliu/svelte-blog-template"
        target="_blank"
        rel="noopener">GitHub</a> to get started.
    </p>
  </div>

  <div class="hero-image-container">
    <picture>
      <source srcset="/home-illustration.webp" media="(min-width: 600px)" />
      <img
        class="hero-image"
        alt="Illustration of person reading a book"
        src="/home-illustration-small.webp"
        width="538"
        height="456" />
    </picture>
    <p class="caption">
      Illustration by
      <a
        href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6"
        target="_blank"
        rel="noopener">Icons 8</a>
      from
      <a href="https://icons8.com/illustrations" target="_blank" rel="noopener">Ouch!</a>
    </p>
  </div>
</div>

<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
    padding: 0 1em;
  }

  .home-copy h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
    line-height: 1.3;
  }

  .home-copy p {
    font-size: 1.4em;
  }

  .hero-image-container {
    margin: 0 1em;
    text-align: center;
  }

  .hero-image-container picture {
    display: block;
    min-height: 250px;
  }

  .caption {
    font-size: 0.8em;
    font-style: italic;
    text-align: left;
  }

  .hero-image {
    width: 100%;
    max-width: 550px;
    margin-bottom: 1em;
  }
  p {
    margin: 0;
  }

  @media (max-width: 1200px) {
    p {
      font-size: 1.2em;
    }

    .hero-image {
      max-width: 400px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>
