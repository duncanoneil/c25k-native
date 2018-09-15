const WARMUP = 300;
const COOLDOWN = 300;

export const SEGMENTS = [
  {
    week: 1,
    day: 1,
    intervals: [
      WARMUP,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      COOLDOWN
    ]
  },
  {
    week: 1,
    day: 2,
    intervals: [
      WARMUP,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      COOLDOWN
    ]
  },
  {
    week: 1,
    day: 3,
    intervals: [
      WARMUP,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      60,
      90,
      COOLDOWN
    ]
  },
  {
    week: 2,
    day: 1,
    intervals: [
      WARMUP,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      COOLDOWN
    ]
  },
  {
    week: 2,
    day: 2,
    intervals: [
      WARMUP,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      COOLDOWN
    ]
  },
  {
    week: 2,
    day: 3,
    intervals: [
      WARMUP,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      90,
      120,
      COOLDOWN
    ]
  },
  {
    week: 3,
    day: 1,
    intervals: [WARMUP, 90, 90, 180, 180, 90, 90, 180, 180, COOLDOWN]
  },
  {
    week: 3,
    day: 2,
    intervals: [WARMUP, 90, 90, 180, 180, 90, 90, 180, 180, COOLDOWN]
  },
  {
    week: 3,
    day: 3,
    intervals: [WARMUP, 90, 90, 180, 180, 90, 90, 180, 180, COOLDOWN]
  },
  {
    week: 4,
    day: 1,
    intervals: [WARMUP, 180, 90, 300, 150, 180, 90, 300, COOLDOWN]
  },
  {
    week: 4,
    day: 2,
    intervals: [WARMUP, 180, 90, 300, 150, 180, 90, 300, COOLDOWN]
  },
  {
    week: 4,
    day: 3,
    intervals: [WARMUP, 180, 90, 300, 150, 180, 90, 300, COOLDOWN]
  },
  {
    week: 5,
    day: 1,
    intervals: [WARMUP, 300, 180, 300, 180, 300, COOLDOWN]
  },
  {
    week: 5,
    day: 2,
    intervals: [WARMUP, 480, 300, 480, COOLDOWN]
  },
  {
    week: 5,
    day: 3,
    intervals: [WARMUP, 1200, COOLDOWN]
  },
  {
    week: 6,
    day: 1,
    intervals: [WARMUP, 300, 180, 480, 180, 300, COOLDOWN]
  },
  {
    week: 6,
    day: 2,
    intervals: [WARMUP, 600, 180, 600, COOLDOWN]
  },
  {
    week: 6,
    day: 3,
    intervals: [WARMUP, 1500, COOLDOWN]
  },
  {
    week: 7,
    day: 1,
    intervals: [WARMUP, 1500, COOLDOWN]
  },
  {
    week: 7,
    day: 2,
    intervals: [WARMUP, 1500, COOLDOWN]
  },
  {
    week: 7,
    day: 3,
    intervals: [WARMUP, 1500, COOLDOWN]
  },
  {
    week: 8,
    day: 1,
    intervals: [WARMUP, 1680, COOLDOWN]
  },
  {
    week: 8,
    day: 2,
    intervals: [WARMUP, 1680, COOLDOWN]
  },
  {
    week: 8,
    day: 3,
    intervals: [WARMUP, 1680, COOLDOWN]
  },
  {
    week: 9,
    day: 1,
    intervals: [WARMUP, 1800, COOLDOWN]
  },
  {
    week: 9,
    day: 2,
    intervals: [WARMUP, 1800, COOLDOWN]
  },
  {
    week: 9,
    day: 3,
    intervals: [WARMUP, 1800, COOLDOWN]
  }
];
