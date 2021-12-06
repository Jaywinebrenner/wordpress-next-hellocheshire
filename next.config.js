// module.exports = {
//   future: { webpack5: true },
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       use: [
//         {
//           loader: "@svgr/webpack",
//           options: {
//             svgoConfig: {
//               plugins: [
//                 {
//                   cleanupIDs: false
//                 }
//               ]
//             }
//           }
//         }
//       ]
//     });

//     return config;
//   }

//   // async redirects() {
//   //   return [
//   //     {
//   //       source: '/example-redirect',
//   //       destination: '/example-destination',
//   //       permanent: true,
//   //     },
//   //   ]
//   // },
// }


module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};