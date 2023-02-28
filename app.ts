import dotenv from 'dotenv';
import Server from './models/server';

// configurar dotenv
dotenv.config();

const server = new Server();

server.listen();