
var Benchmark = require('benchmark');

var Builder_0_15_15 = require('systemjs-builder-0.15.15');
var Builder_0_15_23 = require('systemjs-builder-0.15.23');
var Builder_0_15_31 = require('systemjs-builder-0.15.31');

var suite = new Benchmark.Suite;

suite
.add('0.15.15 bundle jQuery', function(deferred) {
    build(Builder_0_15_15, 'config-jquery.js', './use-jquery.js', 'out-0.15.15-jquery.js').then(function() { deferred.resolve() });
}, {defer: true})
.add('0.15.23 bundle jQuery', function(deferred) {
    build(Builder_0_15_23, 'config-jquery.js', './use-jquery.js', 'out-0.15.23-jquery.js').then(function() { deferred.resolve() });
}, {defer: true})
.add('0.15.31 bundle jQuery', function(deferred) {
    build(Builder_0_15_31, 'config-jquery.js', './use-jquery.js', 'out-0.15.31-jquery.js').then(function() { deferred.resolve() });
}, {defer: true})
.add('0.15.15 bundle traceur sources', function(deferred) {
    build(Builder_0_15_15, 'config-traceur.js', 'traceur-src/**/*.js', 'out-0.15.15-traceur.js').then(function() { deferred.resolve() });
}, {defer: true})
.add('0.15.23 bundle traceur sources', function(deferred) {
    build(Builder_0_15_23, 'config-traceur.js', 'traceur-src/**/*.js', 'out-0.15.23-traceur.js').then(function() { deferred.resolve() });
}, {defer: true})
.add('0.15.31 bundle traceur sources', function(deferred) {
    build(Builder_0_15_31, 'config-traceur.js', 'traceur-src/**/*.js', 'out-0.15.31-traceur.js').then(function() { deferred.resolve() });
}, {defer: true})
.on('cycle', function(event) {
    console.log('cycle ' + event.target);
})
.run({async: true});


function build(Builder, config, src, out) {
    var builder = new Builder;
    return builder.loadConfig(config).then(function() {
        return builder.buildStatic(src, out, {
            minify: false,
            mangle: false,
            sourceMaps: false,
            runtime: true
        });
    });
}