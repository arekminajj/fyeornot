export interface Song {
  _id: { $oid: string };
  artistName: string;
  name: string;
  fyeCount: number;
  notCount: number;
  releaseDate: string;
  coverUrl: string;
}
