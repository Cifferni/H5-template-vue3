import { getUrlParams } from './index';

((): void => {
  const copyConsole = console.log;
  console.log = function (...args: any[]) {
    const urlParams = getUrlParams();
    if (import.meta.env.MODE !== 'production' || urlParams.debug === 'true') {
      copyConsole.apply(this, args);
    }
  };
})();
