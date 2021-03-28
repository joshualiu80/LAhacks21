let config = {};

const DEV = true;
config.API_URL = (DEV) ? 'jytte.ddns.net:3000' : 'localhost:3000';

config.AUDIO_STREAM_URL = `${config.API_URL}/snippets`;
config.AUDIO_UPLOAD_URL = `${config.API_URL}/upload`;
config.USERS_URL = `${config.API_URL}/users`;
config.GET_FRIENDS_URL = `${config.API_URL}/users/getFriends`;
config.AUTH_VERIFY_URL = `${config.API_URL}/auth/verify`;

module.exports = config;