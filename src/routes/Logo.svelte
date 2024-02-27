<script>
  import logo from '$lib/images/logo.webp'
</script>

<a href="/">
  <img alt="Blog Logo" src={logo} width="75" height="50" />
</a>

<style>
  img {
    display: block;
    width: 75px;
  }

  @media screen and (max-width: 520px) {
    img {
      display: none;
    }
  }
</style>
