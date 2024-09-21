export const useCategoriesSection = () => {
  interface Category {
    name: string;
    icon: string;
    image: string;
    to: string
  }

  const categories: Category[] = [
    {
      name: 'Art',
      icon: 'paint-brush',
      image: 'category-1',
      to: 'art'
    },
    {
      name: 'Collectibles',
      icon: 'swatches',
      image: 'category-2',
      to: 'collectibles'
    },
    {
      name: 'Music',
      icon: 'music-notes',
      image: 'category-3',
      to: 'music'
    },
    {
      name: 'photography',
      icon: 'camera',
      image: 'category-4',
      to: 'photography'
    },
    {
      name: 'Video',
      icon: 'video-camera',
      image: 'category-5',
      to: 'video'
    },
    {
      name: 'Utility',
      icon: 'magic-wand',
      image: 'category-6',
      to: 'utility'
    },
    {
      name: 'Sport',
      icon: 'basketball',
      image: 'category-7',
      to: 'sport'
    },
    {
      name: 'Virtual Worlds',
      icon: 'paint-brush',
      image: 'category-8',
      to: 'virtual-worlds'
    },
  ]

  return {
    categories
  }
}