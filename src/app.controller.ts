
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getStatus() {
    return {
      name: 'ZANORA',
      service: 'ZANORA API',
      status: 'online',
      version: '1.0.0',
      message: 'Welcome to ZANORA'
    };
  }

  @Get('health')
  getHealth() {
    return {
      status: 'healthy',
      service: 'zanora-server',
      timestamp: new Date().toISOString()
    };
  }
}
