import { Router } from "./deps.ts";
import { addSong } from './Controllers/songController.ts'

const router = new Router();


router
  .get("/", (ctx: any) => {
    ctx.response.body = "main get page 1";
    console.log("hello");
  })
  .post('/api/post', addSong)

export default router;
