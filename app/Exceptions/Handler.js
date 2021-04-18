'use strict';

const BaseExceptionHandler = use('BaseExceptionHandler');
const Env = use('Env');
const Sentry = use('@sentry/node');
const Package = require('../../package.json');

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report(error, { request }) {
    const sentryDSN = Env.get('SENTRY_DSN', false);
    if (!sentryDSN) {
      return;
    }

    // Initialize Sentry configs
    Sentry.init({
      dsn: sentryDSN,
      release: `${Package.name}@${Package.version}`,
      environment: Env.get('APP_ENV'),
      debug: Env.get('NODE_ENV') !== 'production',
      maxBreadcrumbs: 50,
      beforeSend(event) {
        if (Env.get('NODE_ENV') !== 'production') {
          return null; // Won't send event to sentry
        }
        return event;
      },
    });

    // Tags
    Sentry.setTag('Url', request.url());
    Sentry.setTag('NodeJs', process.version);

    // Contexts
    Sentry.setContext('Request', {
      method: request.method(),
      url: request.url(),
      query: request._qs,
      body: request._body,
    });

    // TODO get from auth token
    /*
    Sentry.setContext('User', {
      id: "",
      name: "",
      email: ""
    });
    */

    Sentry.captureException(error);
  }
}

module.exports = ExceptionHandler;
