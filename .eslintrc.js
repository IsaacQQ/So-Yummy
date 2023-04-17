module.exports = {
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useEffect',
        // Custom rule configuration:
        // Only enforce the rule if the dependency array is not present.
        // This allows empty arrays to be used as a replacement for componentDidMount.
        // This configuration is optional and can be adjusted to fit your needs.
        enableEmptyDeps: true,
      },
    ],
  },
};
