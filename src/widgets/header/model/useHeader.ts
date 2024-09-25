interface link {
  label?: string;
  to?: string
}

export function useHeader () {
  const menuLinks: link[] = [
    {
      label: 'Marketplace',
      to: '',
    },
    {
      label: 'Rankings',
      to: '',
    },
    {
      label: 'Connect a wallet',
      to: '/connect-wallet',
    },
  ]

  return {
    menuLinks
  }
}