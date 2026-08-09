export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{new Date().getFullYear()}</time> © Jafet Baca-Obando.
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  ),
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      <title>{title ? `${title} | Jafet Baca` : 'Jafet Baca'}</title>
    </>
  ),
  readMore: 'Read More →',
  postFooter: null,
  darkMode: true,
  navs: [
    {
      url: 'https://github.com/jbacaob',
      name: 'GitHub'
    },
    {
      url: 'https://twitter.com/jbacaob',
      name: 'Twitter'
    }
  ]
}
