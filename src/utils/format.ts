export const format = (number: number): string => {
  // 구독자 비공개인 경우 어떤 값으로 들어오는지 확인 필요

  if (number < 1000) return number.toString();

  if (number < 10000) {
    const firstPlace = Math.floor(number / 1000);
    const rest =
      number - firstPlace * 1000
        ? `${Math.floor((number - firstPlace * 1000) / 100)}`
        : '';
    return rest ? `${firstPlace}.${rest}천` : `${firstPlace}천`;
  }

  if (number < 100000000) {
    const firstPlace = Math.floor(number / 10000);
    const rest =
      number - firstPlace * 10000
        ? `${Math.floor((number - firstPlace * 10000) / 1000)}`
        : '';
    return rest ? `${firstPlace}.${rest}만` : `${firstPlace}만`;
  }

  return '';
};
