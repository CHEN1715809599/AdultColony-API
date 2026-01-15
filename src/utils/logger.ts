import pino from 'pino';

const logger = pino({
  // 我们删除了 transport 配置，直接使用默认设置，这样 Vercel 就不会报错了
  level: process.env.LOG_LEVEL || 'info',
});

export { logger };
