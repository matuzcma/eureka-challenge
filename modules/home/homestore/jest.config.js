module.exports = {
  displayName: 'homestore',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '.+\\.(css|scss|png|jpg|svg|jpeg)$': 'jest-transform-stub',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../coverage/home/homestore',
};
