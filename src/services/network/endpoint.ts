export const URL_API = {
  Authen: {
    Refresh: '/api/v1/auth/refreshToken',
    LoginEmail: '/api/v1/auth/login',
    Register: '/api/v1/auth/register',
    Logout: '/api/v1/auth/logout',
    UpdateProfile: '/api/v1/auth/update-profile',
    Me: '/api/v1/user/me',
    LoginSocial: '/api/v1/auth/login-social',
    ChangePassword: '/api/v1/auth/change-password',
  },
  Channel: {
    List: '/api/room-chat/by-user',
    Delete: '/api/room-chat/delete-room',
    Pin: '/api/room-chat/update-pin',
    Mute: '/api/room-chat/update-mute',
    CreateChannel: '/api/room-chat/create-room-chat',
  },
  Message: {
    Detail: '/api/room-chat/detail',
    List: '/api/message',
    Pin: '/api/room-chat/pin-message',
    UnPin: '/api/room-chat/unpin-message',
    Reaction: '',
    Translate: '',
    UnSend: '',
    Send: '',
    Report: '',
    SendMedia: '/api/message/up-media',
    ListPin: '/api/room-chat/pin-message',
  },
  Friend: {
    Revoke:'/api/friend/cancel',
    Accept: '/api/friend/update',
    List: '/api/friend',
    UnFriend: '/api/friend/unfriend',
    BlockFriend: '/api/friend/block-friend',
    UnBlockFriend: '/api/friend/unblock-friend',
  },
  User: {
    SearchUser: '/api/user',
  },
  Setting: {
    Language: '/api/v1/languages/list',
    JsonLanguage: '/api/v1/languages',
    LanguageSpeech: '/api/v1/languages/list-language-speech',
  },
};
