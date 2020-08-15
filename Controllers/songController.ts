import { Song } from "../models/Song.ts";
import { MongoClient } from "../deps.ts";
import mongoUri from "../mongo.ts";

const addSong = async (
  { request, response }: { request: any; response: any },
) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const { value: songBody } = await request.body();
    let song: Partial<Song> | undefined;
    song = await songBody;
    console.log(song!);

    insertToDb(song!);

    response.status = 201;
    response.body = {
      success: true,
      data: song,
    };
    console.log(song!.name);
  }
};

export {
  addSong,
};

const insertToDb = async (song: Partial<Song>) => {
  const client = new MongoClient();
  client.connectWithUri(mongoUri);

  const db = client.database("denotest");
  const songsCollection = db.collection<Song>("songs");

  //insert to mongo - test
  const insertSong = await songsCollection.insertOne(song!);
};
