import Redis from "ioredis"

const redis=new Redis(process.env.REDIS_URL)

redis.on("connect",()=> {
  console.log("redis connected")
})

export default redis

//ab yhe hamne redis setup kar liya hai iske liye hame bas ioredis ki jarurat thi 