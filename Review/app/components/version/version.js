'use strict';

angular.module('DemoAngular.version', [
  'DemoAngular.version.interpolate-filter',
  'DemoAngular.version.version-directive'
])

.value('version', '0.1');
