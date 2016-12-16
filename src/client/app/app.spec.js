import app from './components/app-map/app.map.controller';

describe('app', () => {

  describe('AppMapController', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppMapController', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('http://google.com');
    });
  });
});