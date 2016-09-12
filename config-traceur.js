System.config({
    paths: {'traceur-src/': './traceur-compiler-0.0.111/src/'},
    map: {
            traceur: './lib/traceur/traceur.js'
    },
    packages: {
        'traceur-src': {
            format: 'esm',
        }
    }
});
