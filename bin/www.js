/**
 * Module dependencies.
 */
import http from 'http';
import app from '../src/app';
import {
  normalizePort,
  onError,
  onListening
} from './helper';

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', () => onListening(server));
