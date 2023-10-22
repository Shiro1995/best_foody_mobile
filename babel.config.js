module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@store': './src/store',
          '@navigation': './src/navigation',
          '@reducers': './src/store/reducers',
          '@components': './src/components',
          '@screens': './src/screens',
          '@constant': './src/constant',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@services': './src/services',
        },
      },
    ],
  ],
};
