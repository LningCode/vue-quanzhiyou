<template>
  <footer class="footer">
    <!-- <section class="sitemap">
      <a href="/" class="nav-home">
        <img src="../../assets/images/logo.png" alt="Jest" width="66" height="58" />
      </a>
      <div>
        <h5>Docs</h5>
        <a href="#">Getting Started</a>
        <a href="#">Guides</a>
        <a href="#">API Reference</a>
      </div>
      <div>
        <h5>Community</h5>
        <a href="#" target="_blank">Stack Overflow</a>
        <a href="#">Jest Chat</a>
        <a href="#" target="_blank">Twitter</a>
      </div>
      <div>
        <h5>More</h5>
        <a href="/blog">Blog</a>
        <a href="#">GitHub</a>
        <span></span>
      </div>
    </section>-->
    <section class="copyright">Copyright © 2018 - 2019 Qaunzy Inc.</section>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  }
};
</script>

<style scoped>
.footer {
  background: #20232a;
  border: none;
  color: #202020;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  line-height: 24px;
  padding-bottom: 2em;
  padding-top: 2em;
  position: relative;
}
.sitemap {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 3em;
  max-width: 1080px;
}
.copyright {
  color: hsla(0, 0%, 100%, 0.4);
  text-align: center;
  font-size: 16px;
}
.nav-home {
  display: table;
  height: 72px;
  margin: -12px 20px 0 0;
  opacity: 0.4;
  padding: 10px;
  width: 72px;
  transition: opacity 0.15s ease-in-out;
}
.sitemap a {
  color: hsla(0, 0%, 100%, 0.6);
  display: block;
  padding: 3px 10px 3px 0;
}
.sitemap h5,
.sitemap h5 > a,
.sitemap h6,
.sitemap h6 > a {
  color: #fff;
  margin: 0;
  margin-bottom: 8px;
  font-size: 16px;
}
.sitemap div {
  flex: 1;
}
</style>
