export function position(point, params, dom, rect, size) {
  const minPadding = 10; // 툴팁이 화면 밖으로 나가지 않게 최소 여백

  // point: [x, y] 좌표
  // size: { contentSize: [width, height], viewSize: [width, height] }
  const [x, y] = point; // 마우스 포인터 위치
  const { contentSize, viewSize } = size;
  const tooltipWidth = contentSize[0];
  const tooltipHeight = contentSize[1];
  const viewWidth = viewSize[0];
  const viewHeight = viewSize[1];

  // X 좌표 계산 (툴팁이 오른쪽으로 나가지 않게)
  let xPos = x + minPadding; // 기본적으로 포인터 오른쪽에 툴팁 위치
  if (xPos + tooltipWidth > viewWidth) {
    xPos = x - tooltipWidth - minPadding; // 화면을 넘어가면 왼쪽으로 배치
  }

  // Y 좌표 계산 (툴팁이 아래로 나가지 않게)
  let yPos = y + minPadding; // 기본적으로 포인터 아래에 툴팁 위치
  if (yPos + tooltipHeight > viewHeight) {
    yPos = y - tooltipHeight - minPadding; // 화면을 넘어가면 위로 배치
  }

  return [Math.max(minPadding, xPos), yPos];
}