import app from './app';

describe('app', () => {

  describe('AppCtrl2', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl2', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });
});