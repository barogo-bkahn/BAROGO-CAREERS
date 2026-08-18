const HERO_VIDEO_FILES = [
  '1.mp4',
  '2.mp4',
  '3.mp4',
  '4.mp4',
  '5.mp4',
  '6.mp4',
  '7.mp4',
  '8.mp4',
  '9.mp4',
  '10.mp4',
] as const

function numericFileOrder(fileName: string) {
  return Number.parseInt(fileName.match(/\d+/)?.[0] ?? '', 10)
}

export const HERO_VIDEOS = [...HERO_VIDEO_FILES]
  .sort((a, b) => numericFileOrder(a) - numericFileOrder(b))
  .map((fileName) => `./videos/hero/${fileName}`)

