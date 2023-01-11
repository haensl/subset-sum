const nodeResolve = require('@rollup/plugin-node-resolve').default;
const babel = require('@rollup/plugin-babel').default;
const localResolve = require('@haensl/rollup-plugin-local-resolve');
const commonJS = require('@rollup/plugin-commonjs');
const minify = require('@rollup/plugin-terser');
const pkg = require('./package');

const copyright = `// ${pkg.homepage} v${pkg.version} Copyright ${(new Date()).getFullYear()} ${pkg.author.name} <${pkg.author.email}>`;

module.exports = [
  {
    input: './src/index.js',
    output: {
      esModule: false,
      exports: 'default',
      file: pkg.unpkg,
      format: 'umd',
      banner: copyright,
      name: pkg.name,
      indent: false
    },
    plugins: [
      babel({
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        babelHelpers: 'bundled',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: 'defaults'
            }
          ]
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      localResolve(),
      nodeResolve(),
      minify()
    ]
  },
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.module,
        format: 'esm',
        banner: copyright,
        indent: false,
        name: pkg.name,
        sourcemap: true
      }
    ],
    plugins: [
      babel({
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        babelHelpers: 'runtime',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                esmodules: true
              }
            }
          ]
        ],
        plugins: [
          '@babel/plugin-transform-runtime'
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      localResolve(),
      nodeResolve()
    ]
  },
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        name: pkg.name,
        exports: 'default',
        indent: false,
        banner: copyright,
        sourcemap: true
      }
    ],
    plugins: [
      babel({
        babelrc: false,
        exclude: [
          'node_modules/**',
          '**/*.test.js'
        ],
        babelHelpers: 'runtime',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: true
              }
            }
          ]
        ],
        plugins: [
          '@babel/plugin-transform-runtime'
        ]
      }),
      commonJS({
        include: 'node_modules/**'
      }),
      localResolve(),
      nodeResolve()
    ]
  }
];
