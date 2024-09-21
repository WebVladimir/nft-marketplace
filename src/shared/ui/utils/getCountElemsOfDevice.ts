//Для работы требуется модуль useDevice

export const getCountElemsOfDevice = (
  useDevice: () => { isTablet: boolean; isMobile: boolean },
  desktopCount: number,
  tabletCount: number,
  mobileCount: number,
  arr: any[]
) => {
  const { isTablet, isMobile } = useDevice();

  const limit = isTablet ? tabletCount : isMobile ? mobileCount : desktopCount;
  return arr.slice(0, limit);
};