export const API_ENDPOINTS = {
  LOGIN: "/users/tokens",
  PIN_AUTH: "/users/pin/auth",
  REGISTER: "/users/v2/simple-create",
  VALIDATION_PROFILE: "/users/validations/profile",
  VALIDATION_BANK: "/users/validations/bank",
  VALIDATION_SECURITY: "/users/validations/security-question",
  VALIDATION_PIN: "/users/validations/pin",
  EMAIL_VERIFICATION: "/users/send-email-verification",
  USER_PROFILE: "/users/me",
  UPDATE_EMAIL: "/users",
  CHANGE_PASSWORD: "/users/password",
  CHANGE_PIN: "/users/pin",
  LOGOUT: "/logout",
  FORGET_PASSWORD: "/forget-password",
  GAME_TYPES: "/games/types",
  GET_PROVIDERS: "/games/types/",
  PROVIDERS: "/games/types/arcade",
  GAMES: "/games",
  GET_GAMES: "/games",
  MARKET_DETAIL: "/bets/market",
  GAMES_ALL_MARKET: "/bets/markets",
  GAMES_RESULT_ALL_MARKET: "/calculations/results",
  GAMES_RESULT_REAL_MARKET: "/calculations/results/real-markets/latest",
  GAMES_GET_DEALER: "/dealers",
  ALL_GAMES: "/?provider={provider}&type={type}&limit=20",
  POPULAR_GAMES: "/games?provider=awc",
  GENERATE_GAMES_URL: "/games/game-urls",
  GENERATE_LOBBY_URL: "/lobbies/get-game-url",
  BANK_LIST: "/dealers/banks",
  DEPOSIT_HISTORY: "/transactions/v2/deposits",
  CREATE_DEPOSIT: "/transactions/v2/deposits",
  WITHDRAWAL_HISTORY: "/transactions/v2/withdrawals",
  CREATE_WITHDRAWAL: "/transactions/v2/withdrawals",
  TRANSACTIONS: "/transactions",
  GET_USER_REFERRAL: "/users/referrals",
  GET_USER_COMMISSION: "/transactions/commissions",
  CLAIM_COMMISSION: "/transactions/balance-commissions",
  MEMO_INBOX: "/memos/inbox",
  MEMO_OUTBOX: "/memos/outbox",
  MEMO_SENT: "/memos/messages",
  MEMO_UNREAD: "/memos/total-unread",
  CHECK_BETS: "/bets/checks",
  POST_BETS: "/bets",
  TRANSACTIONS_DETAIL: "/bets/reports/bets/markets",
  GET_BANK: "/dealers/banks",
  GAMELIST_RECENTLY_PLAYED: "/games/recent-games",
  GAMELIST_FEATURED_GAME: "/games/curation/featured",
  GAMELIST_POPULAR_GAME: "/games/curation/popular",
  GAMELIST_NEW_GAME: "/games/curation/new",
  GAMELIST_RTP: "/games/curation/RTP",
  GAME_PROVIDERS: "/games/dealers/providers",
  DEALER_PROMOTIONS: "/dealers/promotions/",
  GAME_COUNT_BY_TYPE: "/games/count/type",
  GAME_COUNT_BY_PROVIDER: "/games/count/provider",
  SPORTS_EVENT: "/games/providers/football/event",

  SETTINGS: "/dealers/settings",
  BANNERS: "/dealers/settings?category=banner",
  PAGES: "/dealers/settings?category=page",
  META: "/dealers/settings?category=meta",
  SOSMED: "/dealers/settings?category=social&limit=15",
  INVOICE_BET: "/bets/invoices/transactions",
  INVOICE_GAME: "/bets/invoices/transactions",

  CREATE_BANK: "/users/v2/add-banks",

  DOMAINS: "/dealers/env/domains?web_role[]=web",
  DOMAIN: "/dealers/env/",

  LUCKY_DRAW: "/promotions/live-events",
};