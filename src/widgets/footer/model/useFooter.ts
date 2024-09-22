export const useFooter = () => {
  interface Link {
    name: string,
    to: string
  }

  interface SocialLink {
    name: string
    href: string
    ico: {
      name: string,
      alt?: string
    }
  }

  const links: Link[] = [
    {
      name: 'Marketplace',
      to: '/'
    },
    {
      name: 'Rankings',
      to: '/'
    },
    {
      name: 'Connect a wallet',
      to: '/'
    }
  ]

  const socialLinks: SocialLink[] = [
    {
      name: 'discord',
      href: '#',
      ico: {
        name: 'discord',
        alt: 'discord'
      }
    },
    {
      name: 'youtube',
      href: '#',
      ico: {
        name: 'youtube',
        alt: 'youtube'
      }
    },
    {
      name: 'twitter',
      href: '#',
      ico: {
        name: 'twitter',
        alt: 'twitter'
      }
    },
    {
      name: 'instagram',
      href: '#',
      ico: {
        name: 'instagram',
        alt: 'instagram'
      }
    },
  ]

  return {
    links,
    socialLinks
  }
}