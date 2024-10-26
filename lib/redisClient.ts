import { createClient } from "redis";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const redisClient = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
      host: process.env.REDIS_URL,
      port: parseInt(process.env.REDIS_PORT!)
    }
  });
  
  redisClient.on('error', (err) => console.error('Redis Client Error', err));

  (async () => {
    await redisClient.connect();
    console.log("Redis is connected")
  })();
  
  export default redisClient;