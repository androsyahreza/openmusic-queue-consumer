const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylists(id) {
    const query = {
      text: `SELECT p.id, p.name, s.id AS song_id, s.title, s.performer 
      FROM songs s 
      LEFT JOIN playlist_songs ps ON s.id = ps.song_id 
      LEFT JOIN playlists p ON ps.playlist_id = p.id
      LEFT JOIN users u ON p.owner = u.id
      WHERE p.id = $1`,
      values: [id],
    };
    const result = await this._pool.query(query);

    const playlist = {
      id: result.rows[0].id,
      name: result.rows[0].name,
      songs: result.rows
        .filter((row) => row.song_id !== null)
        .map((row) => ({
          id: row.song_id,
          title: row.title,
          performer: row.performer,
        })),
    };

    return { playlist };
  }
}

module.exports = PlaylistsService;
