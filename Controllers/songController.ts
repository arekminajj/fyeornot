import { Song } from '../models/Song.ts'
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
          const { value : songBody } = await request.body();
          const song: Song = songBody;
          response.status = 201;
          response.body = {
            success: true,
            data: song,
          };
        console.log(await song);
        }
      };

export {
    addSong
};