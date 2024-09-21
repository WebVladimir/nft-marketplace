export const useSectionCreators = () => {
  interface Creator {
    id: number,
    name: string,
    avatar: string,
    totalSales: number,
    position: number
  }

  const creators: Creator[] = [
    {
      id: 1,
      name: 'Keepitreal',
      avatar: 'avatar-1',
      totalSales: 34.53,
      position: 1,
    },
    {
      id: 2,
      name: 'DigiLab',
      avatar: 'avatar-2',
      totalSales: 34.53,
      position: 2,
    },
    {
      id: 3,
      name: 'GravityOne',
      avatar: 'avatar-3',
      totalSales: 34.53,
      position: 3,
    },
    {
      id: 4,
      name: 'Juanie',
      avatar: 'avatar-4',
      totalSales: 34.53,
      position: 4,
    },
    {
      id: 5,
      name: 'BlueWhale',
      avatar: 'avatar-5',
      totalSales: 34.53,
      position: 5,
    },
    {
      id: 6,
      name: 'Mr Fox',
      avatar: 'avatar-6',
      totalSales: 34.53,
      position: 6,
    },
    {
      id: 7,
      name: 'Shroomie',
      avatar: 'avatar-7',
      totalSales: 34.53,
      position: 7,
    },
    {
      id: 8,
      name: 'Robotica',
      avatar: 'avatar-8',
      totalSales: 34.53,
      position: 8,
    },
    {
      id: 9,
      name: 'RustyRobot',
      avatar: 'avatar-9',
      totalSales: 34.53,
      position: 9,
    },
    {
      id: 10,
      name: 'animakid',
      avatar: 'avatar-10',
      totalSales: 34.53,
      position: 10,
    },
    {
      id: 11,
      name: 'Dotgu',
      avatar: 'avatar-11',
      totalSales: 34.53,
      position: 11,
    },
    {
      id: 12,
      name: 'Ghiblier',
      avatar: 'avatar-12',
      totalSales: 34.53,
      position: 12,
    },
  ]

  return {
    creators
  }
}