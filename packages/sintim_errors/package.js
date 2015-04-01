Package.describe({
  name: 'sintim:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('WINDOWS-PREVIEW@0.3.0');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['sintim_errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sintim:errors');
  api.addFiles('sintim_errors-tests.js');
});
