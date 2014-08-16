Package.describe({
  summary: "jQuery unveil library"
});

Package.on_test(function (api) {
  api.use('jquery', 'client');
  api.add_files('jquery-unveil.js', 'client');
});