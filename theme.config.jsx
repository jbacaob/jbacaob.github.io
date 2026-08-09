export default {
  logo: <span>Jafet Baca</span>,
  project: {
    link: 'https://github.com/jbacaob',
  },
  chat: {
    link: 'https://twitter.com/jbacaob',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  docsRepositoryBase: 'https://github.com/jbacaob/jbacaob.github.io/blob/main',
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Jafet Baca-Obando.
      </span>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Jafet Baca'
    }
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  }
}
