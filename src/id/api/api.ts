/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserPasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;
}

export enum UserRoleEnum {
  SuperAdmin = 'superAdmin',
  Admin = 'admin',
  User = 'user',
}

export enum I18NLocaleEnum {
  PtBr = 'pt-br',
  En = 'en',
}

export interface CreateAddressDto {
  street?: string;
  number?: string;
  district?: string;
  complement?: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;
  coordinates?: string;
}

export interface CreateUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;

  /** @example 00000000-0000-0000-0000-000000000000 */
  tenantId: string;

  /** @example user */
  role: UserRoleEnum;
  name?: string;

  /** @example user@example.com */
  email: string;

  /** @example pt-br */
  i18nLocale: I18NLocaleEnum;
  address?: CreateAddressDto;

  /** @example true */
  sendEmail?: object;
  callbackUrl?: string;
}

export interface AddressResponseDto {
  /** @format uuid */
  id: string;

  /** @example Street */
  street?: string;

  /** @example 123 */
  number?: string;

  /** @example null */
  district?: string;

  /** @example null */
  complement?: string;

  /** @example Sao Paulo */
  city?: string;

  /** @example Sao Paulo */
  state?: string;

  /** @example Brazil */
  country?: string;

  /** @example null */
  postalCode?: string;

  /** @example null */
  coordinates?: string;
}

export enum WalletTypes {
  Vault = 'vault',
  Metamask = 'metamask',
}

export enum WalletStatus {
  Unverified = 'unverified',
  Ready = 'ready',
  Blocked = 'blocked',
}

export interface WalletResponseDto {
  /** @format uuid */
  id: string;

  /** @format uuid */
  tenantId: string;

  /** @example 0x0000000000000000000000000000000000000000 */
  address: string;

  /** @format uuid */
  ownerId: string;

  /** @example vault */
  type: WalletTypes;

  /** @example ready */
  status: WalletStatus;
}

export interface UserPublicResponseDto {
  /** @format uuid */
  id: string;

  /** @example email@example.com */
  email: string;

  /** @example true */
  verified: boolean;

  /** @example user */
  roles: any[][];

  /** @example pt-br */
  i18nLocale: I18NLocaleEnum;

  /** @example John Doe */
  name?: string;

  /** @format uuid */
  tenantId?: string;

  /** @format uuid */
  mainWalletId?: string;

  /** @format uuid */
  addressId?: string;
  address?: AddressResponseDto;
  mainWallet?: WalletResponseDto;
  wallets?: WalletResponseDto[];

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;
}

export interface HttpExceptionDto {
  /** @example 2022-07-25T17:24:07.042Z */
  timestamp: string;

  /** @example /api/foo/bar */
  path: string;
  error: string;

  /** @example 500 */
  statusCode: number;

  /** @example Something went wrong */
  message: object;

  /** @example null */
  data?: object;
}

export interface InviteUserDto {
  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId: string;
  name?: string;

  /** @example email@example.com */
  email: string;

  /** @example pt-br */
  i18nLocale: I18NLocaleEnum;

  /** @example false */
  generateRandomPassword?: boolean;

  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password?: string;

  /** @example true */
  sendEmail?: boolean;
  callbackUrl?: string;
}

export enum OrderByEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface PaginationMetaDto {
  /** @example 1 */
  itemCount: number;

  /** @example 1 */
  totalItems?: number;

  /** @example 1 */
  itemsPerPage: number;

  /** @example 1 */
  totalPages?: number;

  /** @example 1 */
  currentPage: number;
}

export interface PaginationLinksDto {
  /** @example http://example.com?page=1 */
  first?: string;

  /** @example http://example.com?page=1 */
  prev?: string;

  /** @example http://example.com?page=2 */
  next?: string;

  /** @example http://example.com?page=3 */
  last?: string;
}

export interface UserPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: UserPublicResponseDto[];
}

export interface UpdateAddressDto {
  street?: string;
  number?: string;
  district?: string;
  complement?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  coordinates?: string;
}

export interface UpdateProfileUserDto {
  name?: string;

  /** @example pt-br */
  i18nLocale?: I18NLocaleEnum;
  address?: UpdateAddressDto;
}

export interface ChangePasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;
  oldPassword: string;
}

export interface MainWalletDto {
  walletId: string;
}

export interface UserTokenResponseDto {
  /** @example email@example.com */
  email?: string;

  /** @example b8ee934f8d9c6704b982c14b95ba3266fef9bba7798ed4885a05c70dbb4545435517cdd25f851e7522ad503e04ccb691a18f507b792866c3282d13abc2a09cb2;1654178219308 */
  token?: string;
}

export interface UpdateUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password?: string;

  /** @example user */
  role?: UserRoleEnum;
  name?: string;

  /** @example user@example.com */
  email?: string;

  /** @example pt-br */
  i18nLocale?: I18NLocaleEnum;

  /** @example true */
  sendEmail?: object;
  callbackUrl?: string;
  address?: UpdateAddressDto;
}

export interface AccountCompleteRetryDto {
  email: string;
  tenantId: string;
}

export enum ChainId {
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Kovan = 42,
  Local = 1337,
  Mumbai = 80001,
  Polygon = 137,
}

export interface RequestMetamaskDto {
  /** @example 0x9FeCC07273d5F5Cb22FF10c5Bb7Dc49e82e01ce9 */
  address: string;

  /** @example 137 */
  chainId: ChainId;
}

export interface RequestMetamaskResponseDto {
  /** @example 0x9FeCC07273d5F5Cb22FF10c5Bb7Dc49e82e01ce9 */
  address: string;

  /** @example 137 */
  chainId: ChainId;

  /** @example  */
  message: string;

  /** @example 1666581369815 */
  nonce: number;

  /** @format uuid */
  userId: string;
}

export interface ClaimMetamaskDto {
  /** @example 6ef8fe3b-d901-4f01-9aeb-20fecc545521 */
  signature: string;
}

export enum CountryCodeEnum {
  BGD = 'BGD',
  BEL = 'BEL',
  BFA = 'BFA',
  BGR = 'BGR',
  BIH = 'BIH',
  BRB = 'BRB',
  WLF = 'WLF',
  BLM = 'BLM',
  BMU = 'BMU',
  BRN = 'BRN',
  BOL = 'BOL',
  BHR = 'BHR',
  BDI = 'BDI',
  BEN = 'BEN',
  BTN = 'BTN',
  JAM = 'JAM',
  BVT = 'BVT',
  BWA = 'BWA',
  WSM = 'WSM',
  BES = 'BES',
  BRA = 'BRA',
  BHS = 'BHS',
  JEY = 'JEY',
  BLR = 'BLR',
  BLZ = 'BLZ',
  RUS = 'RUS',
  RWA = 'RWA',
  SRB = 'SRB',
  TLS = 'TLS',
  REU = 'REU',
  TKM = 'TKM',
  TJK = 'TJK',
  ROU = 'ROU',
  TKL = 'TKL',
  GNB = 'GNB',
  GUM = 'GUM',
  GTM = 'GTM',
  SGS = 'SGS',
  GRC = 'GRC',
  GNQ = 'GNQ',
  GLP = 'GLP',
  JPN = 'JPN',
  GUY = 'GUY',
  GGY = 'GGY',
  GUF = 'GUF',
  GEO = 'GEO',
  GRD = 'GRD',
  GBR = 'GBR',
  GAB = 'GAB',
  SLV = 'SLV',
  GIN = 'GIN',
  GMB = 'GMB',
  GRL = 'GRL',
  GIB = 'GIB',
  GHA = 'GHA',
  OMN = 'OMN',
  TUN = 'TUN',
  JOR = 'JOR',
  HRV = 'HRV',
  HTI = 'HTI',
  HUN = 'HUN',
  HKG = 'HKG',
  HND = 'HND',
  HMD = 'HMD',
  VEN = 'VEN',
  PRI = 'PRI',
  PSE = 'PSE',
  PLW = 'PLW',
  PRT = 'PRT',
  SJM = 'SJM',
  PRY = 'PRY',
  IRQ = 'IRQ',
  PAN = 'PAN',
  PYF = 'PYF',
  PNG = 'PNG',
  PER = 'PER',
  PAK = 'PAK',
  PHL = 'PHL',
  PCN = 'PCN',
  POL = 'POL',
  SPM = 'SPM',
  ZMB = 'ZMB',
  ESH = 'ESH',
  EST = 'EST',
  EGY = 'EGY',
  ZAF = 'ZAF',
  ECU = 'ECU',
  ITA = 'ITA',
  VNM = 'VNM',
  SLB = 'SLB',
  ETH = 'ETH',
  SOM = 'SOM',
  ZWE = 'ZWE',
  SAU = 'SAU',
  ESP = 'ESP',
  ERI = 'ERI',
  MNE = 'MNE',
  MDA = 'MDA',
  MDG = 'MDG',
  MAF = 'MAF',
  MAR = 'MAR',
  MCO = 'MCO',
  UZB = 'UZB',
  MMR = 'MMR',
  MLI = 'MLI',
  MAC = 'MAC',
  MNG = 'MNG',
  MHL = 'MHL',
  MKD = 'MKD',
  MUS = 'MUS',
  MLT = 'MLT',
  MWI = 'MWI',
  MDV = 'MDV',
  MTQ = 'MTQ',
  MNP = 'MNP',
  MSR = 'MSR',
  MRT = 'MRT',
  IMN = 'IMN',
  UGA = 'UGA',
  TZA = 'TZA',
  MYS = 'MYS',
  MEX = 'MEX',
  ISR = 'ISR',
  FRA = 'FRA',
  IOT = 'IOT',
  SHN = 'SHN',
  FIN = 'FIN',
  FJI = 'FJI',
  FLK = 'FLK',
  FSM = 'FSM',
  FRO = 'FRO',
  NIC = 'NIC',
  NLD = 'NLD',
  NOR = 'NOR',
  NAM = 'NAM',
  VUT = 'VUT',
  NCL = 'NCL',
  NER = 'NER',
  NFK = 'NFK',
  NGA = 'NGA',
  NZL = 'NZL',
  NPL = 'NPL',
  NRU = 'NRU',
  NIU = 'NIU',
  COK = 'COK',
  XKX = 'XKX',
  CIV = 'CIV',
  CHE = 'CHE',
  COL = 'COL',
  CHN = 'CHN',
  CMR = 'CMR',
  CHL = 'CHL',
  CCK = 'CCK',
  CAN = 'CAN',
  COG = 'COG',
  CAF = 'CAF',
  COD = 'COD',
  CZE = 'CZE',
  CYP = 'CYP',
  CXR = 'CXR',
  CRI = 'CRI',
  CUW = 'CUW',
  CPV = 'CPV',
  CUB = 'CUB',
  SWZ = 'SWZ',
  SYR = 'SYR',
  SXM = 'SXM',
  KGZ = 'KGZ',
  KEN = 'KEN',
  SSD = 'SSD',
  SUR = 'SUR',
  KIR = 'KIR',
  KHM = 'KHM',
  KNA = 'KNA',
  COM = 'COM',
  STP = 'STP',
  SVK = 'SVK',
  KOR = 'KOR',
  SVN = 'SVN',
  PRK = 'PRK',
  KWT = 'KWT',
  SEN = 'SEN',
  SMR = 'SMR',
  SLE = 'SLE',
  SYC = 'SYC',
  KAZ = 'KAZ',
  CYM = 'CYM',
  SGP = 'SGP',
  SWE = 'SWE',
  SDN = 'SDN',
  DOM = 'DOM',
  DMA = 'DMA',
  DJI = 'DJI',
  DNK = 'DNK',
  VGB = 'VGB',
  DEU = 'DEU',
  YEM = 'YEM',
  DZA = 'DZA',
  USA = 'USA',
  URY = 'URY',
  MYT = 'MYT',
  UMI = 'UMI',
  LBN = 'LBN',
  LCA = 'LCA',
  LAO = 'LAO',
  TUV = 'TUV',
  TWN = 'TWN',
  TTO = 'TTO',
  TUR = 'TUR',
  LKA = 'LKA',
  LIE = 'LIE',
  LVA = 'LVA',
  TON = 'TON',
  LTU = 'LTU',
  LUX = 'LUX',
  LBR = 'LBR',
  LSO = 'LSO',
  THA = 'THA',
  ATF = 'ATF',
  TGO = 'TGO',
  TCD = 'TCD',
  TCA = 'TCA',
  LBY = 'LBY',
  VAT = 'VAT',
  VCT = 'VCT',
  ARE = 'ARE',
  AND = 'AND',
  ATG = 'ATG',
  AFG = 'AFG',
  AIA = 'AIA',
  VIR = 'VIR',
  ISL = 'ISL',
  IRN = 'IRN',
  ARM = 'ARM',
  ALB = 'ALB',
  AGO = 'AGO',
  ATA = 'ATA',
  ASM = 'ASM',
  ARG = 'ARG',
  AUS = 'AUS',
  AUT = 'AUT',
  ABW = 'ABW',
  IND = 'IND',
  ALA = 'ALA',
  AZE = 'AZE',
  IRL = 'IRL',
  IDN = 'IDN',
  UKR = 'UKR',
  QAT = 'QAT',
  MOZ = 'MOZ',
}

export interface CreateTenantDto {
  name: string;
  document: string;

  /** @example BRA */
  countryCode: CountryCodeEnum;
}

export enum TenantRoleEnum {
  Application = 'application',
  Administrator = 'administrator',
  Integration = 'integration',
}

export interface TenantEntityDto {
  id: string;
  name: string;
  document: string;

  /** @example BRA */
  countryCode: CountryCodeEnum;

  /** @example ["application"] */
  roles: TenantRoleEnum;
  wallets: string[];
  client?: object;
  clientId?: object;
  info: object;

  /** @format date-time */
  createdAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  deletedAt?: string;
}

export interface TenantPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantEntityDto[];
}

export interface TenantClientResponseDto {
  /** @example 193d34cd9f6ca1f2661357e346822a3643bd5c3d0590a670ee896af6ca9a8141 */
  apiKey: string;

  /** @format uuid */
  clientId: string;

  /** @example ef9b4f3cc540501fa1d7c4f0fc1216851500ed52aa85f2adb34d978f70688f37 */
  signatureKey: string;
}

export interface UpdateTenantProfileDto {
  name?: string;
}

export interface UpdateTenantDto {
  name?: string;
  document?: string;

  /** @example BRA */
  countryCode?: CountryCodeEnum;
}

export interface CreateTenantAccessDto {
  /** @format uuid */
  id?: string;
}

export interface TenantAccessResponseDto {
  /** @format uuid */
  id: string;
  key: string;
  secret: string;
  tenantId: string;
  active: boolean;
}

export type TenantEntity = object;

export interface TenantAccessEntityDto {
  /** @format uuid */
  id: string;
  key: string;
  secret: string;
  tenant: TenantEntity;
  tenantId: string;
  active: boolean;
}

export interface TenantAccessPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantAccessEntityDto[];
}

export interface CreateTenantHostDto {
  /** @format uuid */
  id?: string;

  /** @example example.com */
  hostname: string;
}

export interface TenantHostResponseDto {
  /** @format uuid */
  id: string;

  /** @example example.com */
  hostname: string;
  tenantId: string;
}

export interface TenantHostEntityDto {
  /** @format uuid */
  id: string;

  /** @example example.com */
  hostname: string;
  tenant: TenantEntity;
  tenantId: string;
}

export interface TenantHostPaginateResponseDto {
  meta: PaginationMetaDto;
  links?: PaginationLinksDto;
  items: TenantHostEntityDto[];
}

export interface JwtPayloadDto {
  /** @example 00000000-0000-0000-0000-000000000001 */
  sub: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  iss: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  aud?: string[];

  /** @example 1516239022 */
  exp?: number;

  /** @example 1516239022 */
  iat?: number;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId: string;
}

export enum JwtType {
  User = 'user',
  Tenant = 'tenant',
}

export interface UserJwtPayloadDto {
  /** @example 00000000-0000-0000-0000-000000000001 */
  sub: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  iss: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  aud?: string[];

  /** @example 1516239022 */
  exp?: number;

  /** @example 1516239022 */
  iat?: number;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId: string;

  /** @example user@example.com */
  email: string;

  /** @example Jon Doe */
  name?: string;

  /** @example user */
  roles: UserRoleEnum[];

  /** @example true */
  verified: boolean;

  /** @example user */
  type: JwtType;
}

export interface TenantJwtPayloadDto {
  /** @example 00000000-0000-0000-0000-000000000001 */
  sub: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  iss: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  aud?: string[];

  /** @example 1516239022 */
  exp?: number;

  /** @example 1516239022 */
  iat?: number;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId: string;

  /** @example application */
  roles: TenantRoleEnum[];

  /** @example tenant */
  type: JwtType;
}

export interface VerifySignupResponseDto {
  /** @example true */
  verified: boolean;
}

export interface TooManyRequestsExceptionDto {
  /** @example 2022-07-25T17:24:07.042Z */
  timestamp: string;

  /** @example /api/foo/bar */
  path: string;
  error: string;

  /** @example 429 */
  statusCode: number;

  /** @example Too many requests */
  message: object;

  /** @example null */
  data?: object;
}

export interface RequestConfirmationEmailDto {
  email: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
  callbackUrl: string;
}

export interface RequestPasswordResetDto {
  /** @example email@example.com */
  email: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
  callbackUrl: string;
}

export interface ResetPasswordDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;

  /** @example user@example.com */
  email: string;
  token: string;
}

export interface SignInResponseDto {
  /** @example eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJlbWFpbCI6InBpeHdheUB3M2Jsb2NrLmlvIiwibmFtZSI6IlBpeHdheSIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRlbmFudElkIjoiNWJkOTZhYWYtMTg4OC00OTNlLWI4NGUtN2M1NGE0NzMxODY4IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY1ODUwODE3OSwiZXhwIjoxNjkwMDQ0MTc5fQ.L_0Py_M_1Ija_QnFKl7uNZr9fpkcVpZSv-tnNf07YQOcIEuR-TU0S9DMkLkHtmYrHKJe_vzzf14FS7J43NYVILn3NrXb-pC5-YO8V3JnMX4yBsgM2t0xdqEW6fqILk8_oxXsDFAhNkaNeBa2ljNilDncSepps7q69PP-TP7JVkjKQg2Za_E6ZwU */
  token: string;

  /** @example eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJ0ZW5hbnRJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRva2VuSGFzaCI6ImJiMmFjMzE4M2EzZDZlMDljYTI2ZDkzNDEzNjQyNzU4MGY3Yjc5NWVlYWU3YTFlYzUzNDU2MjU5NThjMDZhYWQiLCJpYXQiOjE2NTg1MDgxNzksImV4cCI6MTY5MDA0NDE3OX0.au6dcpbcSmF134J335G4CymEUlwK39TT-4jXQwEUm0zRokFBiHpkXZzy23fTufyo_XzW_Tr_IUfO9b_y5e0thjIfvng4dS7akdeQAykcN7nRhwNBtqCVZxFHyZE39yzz38JLMwC00EtaKowM6lPykJYC5qZC0bBj4g4Yb1GG9IU5dQodibdXj00 */
  refreshToken: string;
  data: UserJwtPayloadDto | TenantJwtPayloadDto;
}

export interface BadRequestExceptionDto {
  /** @example 2022-07-25T17:24:07.042Z */
  timestamp: string;

  /** @example /api/foo/bar */
  path: string;
  error: string;

  /** @example 400 */
  statusCode: number;

  /** @example Bad Request */
  message: object;

  /** @example null */
  data?: object;
}

export interface SignupUserDto {
  /**
   * Password should include lowercase, uppercase and digits
   * @example P@ssw0rd
   */
  password: string;

  /** @example P@ssw0rd */
  confirmation: string;

  /** @example 00000000-0000-0000-0000-000000000000 */
  tenantId: string;

  /** @example email@example.com */
  email: string;

  /** @example Jon Doe */
  name?: string;

  /** @example pt-br */
  i18nLocale?: I18NLocaleEnum;
  callbackUrl: string;
}

export interface UnauthorizedExceptionDto {
  /** @example 2022-07-25T17:24:07.042Z */
  timestamp: string;

  /** @example /api/foo/bar */
  path: string;
  error: string;

  /** @example 401 */
  statusCode: number;

  /** @example Unauthorized */
  message: object;

  /** @example null */
  data?: object;
}

export interface LoginUserDto {
  /** @example user@example.com */
  email: string;

  /** @example P@ssw0rd */
  password: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId?: string;
}

export interface RefreshTokenDto {
  /** @example eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiI4NGViM2Q2NC01OTk4LTRjM2UtODliMS0yZTgyZmQ2NDRjMDciLCJpc3MiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJhdWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJjb21wYW55SWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDEiLCJ0b2tlbkhhc2giOiI5NGFkMzFjMjcwMWI0NzQxNjk5ZjI1YTA4NWM0NmQyNDE4ZTk2MjNhYTcyYjM3MGZhZWZkNWJhYWYzYzM3YzgzIiwiaWF0IjoxNjU3MzEwMzQwLCJleHAiOjE2NTc0ODMxNDB9.epg4Grc6LkJMMxNlFbsdEc5Rq2nupXZTsFQeD-JgKZMWg4ey_ialD-mmSBehHD_xFF4Ho_BbWG1ld9aCuQBQcft4zxDfMdxogM5fMfdhAnAccM7a4J0NyKECzYHhIDe_jnrpT4QVHs4x78NIookQiKguANuSa7dNViFphpC9K5LRcxVwS6sEqT8 */
  refreshToken: string;
}

export interface RefreshTokenResponseDto {
  /** @example eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJlbWFpbCI6InBpeHdheUB3M2Jsb2NrLmlvIiwibmFtZSI6IlBpeHdheSIsInJvbGUiOiJhZG1pbiIsImNvbXBhbnlJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRlbmFudElkIjoiNWJkOTZhYWYtMTg4OC00OTNlLWI4NGUtN2M1NGE0NzMxODY4IiwidmVyaWZpZWQiOnRydWUsImlhdCI6MTY1ODUwODE3OSwiZXhwIjoxNjkwMDQ0MTc5fQ.L_0Py_M_1Ija_QnFKl7uNZr9fpkcVpZSv-tnNf07YQOcIEuR-TU0S9DMkLkHtmYrHKJe_vzzf14FS7J43NYVILn3NrXb-pC5-YO8V3JnMX4yBsgM2t0xdqEW6fqILk8_oxXsDFAhNkaNeBa2ljNilDncSepps7q69PP-TP7JVkjKQg2Za_E6ZwU */
  token: string;

  /** @example eyJhbGciOiJSUzI1NiIsInR5cCI6InJlZnJlc2gifQ.eyJzdWIiOiJjOTFhZDIyOC05NTdhLTQxMDQtOWIxMy0xOGUyNzk5MDE4MDMiLCJpc3MiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJhdWQiOiI1YmQ5NmFhZi0xODg4LTQ5M2UtYjg0ZS03YzU0YTQ3MzE4NjgiLCJ0ZW5hbnRJZCI6IjViZDk2YWFmLTE4ODgtNDkzZS1iODRlLTdjNTRhNDczMTg2OCIsInRva2VuSGFzaCI6ImJiMmFjMzE4M2EzZDZlMDljYTI2ZDkzNDEzNjQyNzU4MGY3Yjc5NWVlYWU3YTFlYzUzNDU2MjU5NThjMDZhYWQiLCJpYXQiOjE2NTg1MDgxNzksImV4cCI6MTY5MDA0NDE3OX0.au6dcpbcSmF134J335G4CymEUlwK39TT-4jXQwEUm0zRokFBiHpkXZzy23fTufyo_XzW_Tr_IUfO9b_y5e0thjIfvng4dS7akdeQAykcN7nRhwNBtqCVZxFHyZE39yzz38JLMwC00EtaKowM6lPykJYC5qZC0bBj4g4Yb1GG9IU5dQodibdXj00 */
  refreshToken: string;
}

export interface ForbiddenExceptionDto {
  /** @example 2022-07-25T17:24:07.042Z */
  timestamp: string;

  /** @example /api/foo/bar */
  path: string;
  error: string;

  /** @example 403 */
  statusCode: number;

  /** @example Forbidden */
  message: object;

  /** @example null */
  data?: object;
}

export interface LoginTenantDto {
  key: string;
  secret: string;

  /** @example 00000000-0000-0000-0000-000000000001 */
  tenantId: string;
}

export interface JSONWebKeyDto {
  /** @example RSA */
  kty: string;

  /** @example LySdYaP3_-DOrOElTtHy9TAM9EZ8veMzPftUWibTTNI */
  kid: string;
  alg?: string;
  n?: string;
  e?: string;
}

export interface JSONWebKeySetDto {
  keys: JSONWebKeyDto[];
}

export namespace Users {
  /**
   * No description
   * @tags Users
   * @name Create
   * @request POST:/users
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name Invite
   * @request POST:/users/invite
   * @secure
   */
  export namespace Invite {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InviteUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetUserByEmail
   * @request GET:/users/find-user-by-email
   * @secure
   */
  export namespace GetUserByEmail {
    export type RequestParams = {};
    export type RequestQuery = { email: string; tenantId: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetProfileByUserLogged
   * @request GET:/users/profile
   * @secure
   */
  export namespace GetProfileByUserLogged {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetProfileUserById
   * @request GET:/users/{tenantId}/{id}
   * @secure
   */
  export namespace GetProfileUserById {
    export type RequestParams = { id: string; tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name GetUsersByTenantId
   * @request GET:/users/{tenantId}
   * @secure
   */
  export namespace GetUsersByTenantId {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
      role?: UserRoleEnum;
      userId?: string[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserPaginateResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name UpdateProfileByUserLogged
   * @request PATCH:/users/{tenantId}/profile
   * @secure
   */
  export namespace UpdateProfileByUserLogged {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateProfileUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name ChangePassword
   * @request PATCH:/users/change-password
   * @secure
   */
  export namespace ChangePassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePasswordDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name SetWalletDefault
   * @request PATCH:/users/main-wallet
   * @secure
   */
  export namespace SetWalletDefault {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MainWalletDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users
   * @name UpdateToken
   * @request PATCH:/users/{tenantId}/{id}/token
   * @secure
   */
  export namespace UpdateToken {
    export type RequestParams = { id: string; tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = UserTokenResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name Update
   * @request PATCH:/users/{tenantId}/{id}/edit
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string; tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = UserPublicResponseDto;
  }
  /**
   * No description
   * @tags Users
   * @name AccountCompleteRetry
   * @request POST:/users/account-complete/retry
   * @secure
   */
  export namespace AccountCompleteRetry {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AccountCompleteRetryDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name CreateVault
   * @request POST:/users/{tenantId}/wallets/vault/claim
   * @secure
   */
  export namespace CreateVault {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name FindByAddress
   * @request GET:/users/{tenantId}/wallets/by-address/{address}
   * @secure
   */
  export namespace FindByAddress {
    export type RequestParams = { tenantId: string; address: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name FindAllWalletByUserId
   * @request GET:/users/{tenantId}/wallets/{userId}
   * @secure
   */
  export namespace FindAllWalletByUserId {
    export type RequestParams = { userId: string; tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto[];
  }
  /**
   * No description
   * @tags Users Wallet
   * @name FindWallet
   * @request GET:/users/{tenantId}/wallets/{userId}/{walletId}
   * @secure
   */
  export namespace FindWallet {
    export type RequestParams = { walletId: string; userId: string; tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name RequestMetamask
   * @request POST:/users/{tenantId}/wallets/metamask/request
   * @secure
   */
  export namespace RequestMetamask {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = RequestMetamaskDto;
    export type RequestHeaders = {};
    export type ResponseBody = RequestMetamaskResponseDto;
  }
  /**
   * No description
   * @tags Users Wallet
   * @name ClaimMetamask
   * @request POST:/users/{tenantId}/wallets/metamask/claim
   * @secure
   */
  export namespace ClaimMetamask {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = ClaimMetamaskDto;
    export type RequestHeaders = {};
    export type ResponseBody = WalletResponseDto;
  }
}

export namespace Tenant {
  /**
   * No description
   * @tags Tenant
   * @name Create
   * @request POST:/tenant
   * @secure
   */
  export namespace Create {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantEntityDto;
  }
  /**
   * No description
   * @tags Tenant
   * @name FindAll
   * @request GET:/tenant
   * @secure
   */
  export namespace FindAll {
    export type RequestParams = {};
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant
   * @name FindOne
   * @request GET:/tenant/{id}
   * @secure
   */
  export namespace FindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name Update
   * @request PUT:/tenant/{id}
   * @secure
   */
  export namespace Update {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name Remove
   * @request DELETE:/tenant/{id}
   * @secure
   */
  export namespace Remove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Tenant
   * @name GetTenantClientOrFail
   * @request GET:/tenant/client/{id}
   * @secure
   */
  export namespace GetTenantClientOrFail {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantClientResponseDto;
  }
  /**
   * No description
   * @tags Tenant
   * @name UpdateProfile
   * @request PUT:/tenant/profile/{id}
   * @secure
   */
  export namespace UpdateProfile {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTenantProfileDto;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace TenantAccess {
  /**
   * No description
   * @tags Tenant Access
   * @name Create
   * @request POST:/tenant-access/{tenantId}
   * @secure
   */
  export namespace Create {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateTenantAccessDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantAccessResponseDto;
  }
  /**
   * No description
   * @tags Tenant Access
   * @name FindAll
   * @request GET:/tenant-access/{tenantId}
   * @secure
   */
  export namespace FindAll {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantAccessPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant Access
   * @name FindOne
   * @request GET:/tenant-access/{tenantId}/{id}
   * @secure
   */
  export namespace FindOne {
    export type RequestParams = { id: string; tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace TenantHosts {
  /**
   * No description
   * @tags Tenant Hosts
   * @name Create
   * @request POST:/tenant-hosts/{tenantId}
   * @secure
   */
  export namespace Create {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateTenantHostDto;
    export type RequestHeaders = {};
    export type ResponseBody = TenantHostResponseDto;
  }
  /**
   * No description
   * @tags Tenant Hosts
   * @name FindAll
   * @request GET:/tenant-hosts/{tenantId}
   * @secure
   */
  export namespace FindAll {
    export type RequestParams = { tenantId: string };
    export type RequestQuery = {
      page?: number;
      limit?: number;
      search?: string;
      sortBy?: string;
      orderBy?: OrderByEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TenantHostPaginateResponseDto;
  }
  /**
   * No description
   * @tags Tenant Hosts
   * @name FindOne
   * @request GET:/tenant-hosts/{tenantId}/{id}
   * @secure
   */
  export namespace FindOne {
    export type RequestParams = { tenantId: string; id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace Auth {
  /**
   * No description
   * @tags Authentication
   * @name VerifySignUp
   * @request GET:/auth/verify-sign-up
   */
  export namespace VerifySignUp {
    export type RequestParams = {};
    export type RequestQuery = { email: string; token: string };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VerifySignupResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name RequestConfirmationEmail
   * @request POST:/auth/request-confirmation-email
   */
  export namespace RequestConfirmationEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestConfirmationEmailDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Authentication
   * @name RequestPasswordReset
   * @request POST:/auth/request-password-reset
   */
  export namespace RequestPasswordReset {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestPasswordResetDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags Authentication
   * @name ResetPassword
   * @request POST:/auth/reset-password
   */
  export namespace ResetPassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResetPasswordDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name SignUp
   * @request POST:/auth/signup
   */
  export namespace SignUp {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignupUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name SignIn
   * @request POST:/auth/signin
   */
  export namespace SignIn {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name RefreshToken
   * @request POST:/auth/refresh-token
   * @secure
   */
  export namespace RefreshToken {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RefreshTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = RefreshTokenResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name SignInTenant
   * @request POST:/auth/signin/tenant
   */
  export namespace SignInTenant {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginTenantDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignInResponseDto;
  }
  /**
   * No description
   * @tags Authentication
   * @name LogOut
   * @request POST:/auth/logout
   * @secure
   */
  export namespace LogOut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags Authentication
   * @name GetJwks
   * @request GET:/auth/jwks.json
   */
  export namespace GetJwks {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = JSONWebKeySetDto;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || 'https://pixwayid.stg.pixway.io' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === 'object' && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      requestParams.headers.common = { Accept: '*/*' };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Pixway ID
 * @version 0.1.6
 * @baseUrl https://pixwayid.stg.pixway.io
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name Create
     * @request POST:/users
     * @secure
     */
    create: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Invite
     * @request POST:/users/invite
     * @secure
     */
    invite: (data: InviteUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/invite`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUserByEmail
     * @request GET:/users/find-user-by-email
     * @secure
     */
    getUserByEmail: (query: { email: string; tenantId: string }, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/find-user-by-email`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetProfileByUserLogged
     * @request GET:/users/profile
     * @secure
     */
    getProfileByUserLogged: (params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/profile`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetProfileUserById
     * @request GET:/users/{tenantId}/{id}
     * @secure
     */
    getProfileUserById: (id: string, tenantId: string, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUsersByTenantId
     * @request GET:/users/{tenantId}
     * @secure
     */
    getUsersByTenantId: (
      tenantId: string,
      query?: {
        page?: number;
        limit?: number;
        search?: string;
        sortBy?: string;
        orderBy?: OrderByEnum;
        role?: UserRoleEnum;
        userId?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<UserPaginateResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateProfileByUserLogged
     * @request PATCH:/users/{tenantId}/profile
     * @secure
     */
    updateProfileByUserLogged: (tenantId: string, data: UpdateProfileUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/profile`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name ChangePassword
     * @request PATCH:/users/change-password
     * @secure
     */
    changePassword: (data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<void, HttpExceptionDto>({
        path: `/users/change-password`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name SetWalletDefault
     * @request PATCH:/users/main-wallet
     * @secure
     */
    setWalletDefault: (data: MainWalletDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/main-wallet`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateToken
     * @request PATCH:/users/{tenantId}/{id}/token
     * @secure
     */
    updateToken: (id: string, tenantId: string, params: RequestParams = {}) =>
      this.request<UserTokenResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/${id}/token`,
        method: 'PATCH',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name Update
     * @request PATCH:/users/{tenantId}/{id}/edit
     * @secure
     */
    update: (id: string, tenantId: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<UserPublicResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/${id}/edit`,
        method: 'PATCH',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name AccountCompleteRetry
     * @request POST:/users/account-complete/retry
     * @secure
     */
    accountCompleteRetry: (data: AccountCompleteRetryDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/account-complete/retry`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name CreateVault
     * @request POST:/users/{tenantId}/wallets/vault/claim
     * @secure
     */
    createVault: (tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, any>({
        path: `/users/${tenantId}/wallets/vault/claim`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name FindByAddress
     * @request GET:/users/{tenantId}/wallets/by-address/{address}
     * @secure
     */
    findByAddress: (tenantId: string, address: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, HttpExceptionDto>({
        path: `/users/${tenantId}/wallets/by-address/${address}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name FindAllWalletByUserId
     * @request GET:/users/{tenantId}/wallets/{userId}
     * @secure
     */
    findAllWalletByUserId: (userId: string, tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto[], any>({
        path: `/users/${tenantId}/wallets/${userId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name FindWallet
     * @request GET:/users/{tenantId}/wallets/{userId}/{walletId}
     * @secure
     */
    findWallet: (walletId: string, userId: string, tenantId: string, params: RequestParams = {}) =>
      this.request<WalletResponseDto, any>({
        path: `/users/${tenantId}/wallets/${userId}/${walletId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name RequestMetamask
     * @request POST:/users/{tenantId}/wallets/metamask/request
     * @secure
     */
    requestMetamask: (tenantId: string, data: RequestMetamaskDto, params: RequestParams = {}) =>
      this.request<RequestMetamaskResponseDto, any>({
        path: `/users/${tenantId}/wallets/metamask/request`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users Wallet
     * @name ClaimMetamask
     * @request POST:/users/{tenantId}/wallets/metamask/claim
     * @secure
     */
    claimMetamask: (tenantId: string, data: ClaimMetamaskDto, params: RequestParams = {}) =>
      this.request<WalletResponseDto, any>({
        path: `/users/${tenantId}/wallets/metamask/claim`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
  tenant = {
    /**
     * No description
     *
     * @tags Tenant
     * @name Create
     * @request POST:/tenant
     * @secure
     */
    create: (data: CreateTenantDto, params: RequestParams = {}) =>
      this.request<TenantEntityDto, HttpExceptionDto>({
        path: `/tenant`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name FindAll
     * @request GET:/tenant
     * @secure
     */
    findAll: (
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<TenantPaginateResponseDto, HttpExceptionDto>({
        path: `/tenant`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name FindOne
     * @request GET:/tenant/{id}
     * @secure
     */
    findOne: (id: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name Update
     * @request PUT:/tenant/{id}
     * @secure
     */
    update: (id: string, data: UpdateTenantDto, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name Remove
     * @request DELETE:/tenant/{id}
     * @secure
     */
    remove: (id: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name GetTenantClientOrFail
     * @request GET:/tenant/client/{id}
     * @secure
     */
    getTenantClientOrFail: (id: string, params: RequestParams = {}) =>
      this.request<TenantClientResponseDto, HttpExceptionDto>({
        path: `/tenant/client/${id}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant
     * @name UpdateProfile
     * @request PUT:/tenant/profile/{id}
     * @secure
     */
    updateProfile: (id: string, data: UpdateTenantProfileDto, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant/profile/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  tenantAccess = {
    /**
     * No description
     *
     * @tags Tenant Access
     * @name Create
     * @request POST:/tenant-access/{tenantId}
     * @secure
     */
    create: (tenantId: string, data: CreateTenantAccessDto, params: RequestParams = {}) =>
      this.request<TenantAccessResponseDto, HttpExceptionDto>({
        path: `/tenant-access/${tenantId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Access
     * @name FindAll
     * @request GET:/tenant-access/{tenantId}
     * @secure
     */
    findAll: (
      tenantId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<TenantAccessPaginateResponseDto, HttpExceptionDto>({
        path: `/tenant-access/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Access
     * @name FindOne
     * @request GET:/tenant-access/{tenantId}/{id}
     * @secure
     */
    findOne: (id: string, tenantId: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant-access/${tenantId}/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  tenantHosts = {
    /**
     * No description
     *
     * @tags Tenant Hosts
     * @name Create
     * @request POST:/tenant-hosts/{tenantId}
     * @secure
     */
    create: (tenantId: string, data: CreateTenantHostDto, params: RequestParams = {}) =>
      this.request<TenantHostResponseDto, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Hosts
     * @name FindAll
     * @request GET:/tenant-hosts/{tenantId}
     * @secure
     */
    findAll: (
      tenantId: string,
      query?: { page?: number; limit?: number; search?: string; sortBy?: string; orderBy?: OrderByEnum },
      params: RequestParams = {},
    ) =>
      this.request<TenantHostPaginateResponseDto, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tenant Hosts
     * @name FindOne
     * @request GET:/tenant-hosts/{tenantId}/{id}
     * @secure
     */
    findOne: (tenantId: string, id: string, params: RequestParams = {}) =>
      this.request<any, HttpExceptionDto>({
        path: `/tenant-hosts/${tenantId}/${id}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Authentication
     * @name VerifySignUp
     * @request GET:/auth/verify-sign-up
     */
    verifySignUp: (query: { email: string; token: string }, params: RequestParams = {}) =>
      this.request<VerifySignupResponseDto, TooManyRequestsExceptionDto>({
        path: `/auth/verify-sign-up`,
        method: 'GET',
        query: query,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name RequestConfirmationEmail
     * @request POST:/auth/request-confirmation-email
     */
    requestConfirmationEmail: (data: RequestConfirmationEmailDto, params: RequestParams = {}) =>
      this.request<void, TooManyRequestsExceptionDto>({
        path: `/auth/request-confirmation-email`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name RequestPasswordReset
     * @request POST:/auth/request-password-reset
     */
    requestPasswordReset: (data: RequestPasswordResetDto, params: RequestParams = {}) =>
      this.request<void, TooManyRequestsExceptionDto>({
        path: `/auth/request-password-reset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name ResetPassword
     * @request POST:/auth/reset-password
     */
    resetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, BadRequestExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/reset-password`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name SignUp
     * @request POST:/auth/signup
     */
    signUp: (data: SignupUserDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto>({
        path: `/auth/signup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name SignIn
     * @request POST:/auth/signin
     */
    signIn: (data: LoginUserDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name RefreshToken
     * @request POST:/auth/refresh-token
     * @secure
     */
    refreshToken: (data: RefreshTokenDto, params: RequestParams = {}) =>
      this.request<RefreshTokenResponseDto, ForbiddenExceptionDto>({
        path: `/auth/refresh-token`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name SignInTenant
     * @request POST:/auth/signin/tenant
     */
    signInTenant: (data: LoginTenantDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, UnauthorizedExceptionDto | TooManyRequestsExceptionDto>({
        path: `/auth/signin/tenant`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name LogOut
     * @request POST:/auth/logout
     * @secure
     */
    logOut: (params: RequestParams = {}) =>
      this.request<any, ForbiddenExceptionDto>({
        path: `/auth/logout`,
        method: 'POST',
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Authentication
     * @name GetJwks
     * @request GET:/auth/jwks.json
     */
    getJwks: (params: RequestParams = {}) =>
      this.request<JSONWebKeySetDto, any>({
        path: `/auth/jwks.json`,
        method: 'GET',
        format: 'json',
        ...params,
      }),
  };
}
