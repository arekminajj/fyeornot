import { Router, RouterContext, Status } from "./deps.ts";
import { addSong } from "./Controllers/songController.ts";

const router = new Router();

interface Book {
  id: string;
  title: string;
  author: string;
}

const books = new Map<string, Book>();

router
  .get("/", (ctx: RouterContext) => {
    ctx.response.body = "main get page 1";
    console.log("hello");
  })
  .post("/api/post", addSong);

export default router;
