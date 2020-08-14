export class Song {
    public id: string;
    public artistName: string;
    public name: string;
    public fyeCount: number;
    public notCount: number;
    public releaseDate: string;
    public coverUrl: string;

    constructor(id = '', artistName = '', name = '', fyeCount = 0, notCount = 0, releaseDate = '', coverUrl = '') {
        this.id = id;
        this.artistName = artistName;
        this.name = name;
        this.fyeCount = fyeCount;
        this.notCount = notCount;
        this.releaseDate = releaseDate;
        this.coverUrl = coverUrl;
    }
}