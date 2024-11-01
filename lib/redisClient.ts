import { createClient } from "redis";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_URL,
    port: Number(process.env.REDIS_PORT!),
  },
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

(async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log("Redis is connected");
  } else {
    console.log("Redis is already connected");
  }
})();

export default redisClient;
