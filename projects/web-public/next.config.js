const nextConfig = {
  reactStrictMode: true,
}

const withTM = require('next-transpile-modules')([
  "@alura/design-system",
  "@alura/utils",
])

module.exports = withTM(nextConfig)
