export type HttpStatusCode =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

export interface APIResponseDTO<T> {
  errorMessage?: string | null;
  data?: T;
  success: boolean;
  statusCode: HttpStatusCode;
}

export interface ApplicationUserDTO {
  email?: string | null;
  fullName?: string | null;
  userName?: string | null;
  phoneNumber?: string | null;
  base64UserImage?: string | null;
}

export interface ChangePasswordDTO {
  currentPassword?: string | null;
  newPassword?: string | null;
}

export interface Suggestion {
  correctedSentence?: string | null;
}

export interface CorrectedResponse {
  suggestion?: Suggestion;
}

export interface DeleteUserRecordDTO {
  id?: number;
}

export interface ExternalLoginResponseDTO {
  tokenResponseDTO?: TokenResponseDTO;
  base64Image?: string | null;
}

export interface FrameData {
  imageData?: string | null;
}

export interface GetResetPasswordTokenByEmailDTO {
  email?: string | null;
}

export interface LoginDTO {
  userName?: string | null;
  password?: string | null;
}

export interface ResetPasswordDTO {
  otp?: string | null;
  newPassword?: string | null;
}

export interface SentenceData {
  sentence?: string | null;
}

export interface TTSRequest {
  text?: string | null;
}

export interface TTSResponse {
  audioData?: string | null;
  sampleRate?: number;
}

export interface TextToSignDTO {
  text?: string | null;
}

export interface TokenRequestDTO {
  refreshToken?: string | null;
}

export interface TokenResponseDTO {
  accessToken?: string | null;
  refreshToken?: string | null;
  accessTokenExpires?: string;
  refreshTokenExpires?: string;
}

export interface TranscriptionRequest {
  audioData?: string | null;
  mimeType?: string | null;
}

export interface UpdateUserProfileDTO {
  fullName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  userName?: string | null;
}

export interface UserProfileDTO {
  fullName?: string | null;
  email?: string | null;
  userBase64Image?: string | null;
  phoneNumber?: string | null;
  userName?: string | null;
}

export interface UserRecordDTO {
  id?: number;
  formedSentence?: string | null;
  formedAt?: string;
}

export interface RegisterUserForm {
  Email: string;
  FullName: string;
  UserName: string;
  Password: string;
  PhoneNumber: string;
  UserImage?: File | Blob;
}

export interface UpdateUserImageForm {
  NewImge?: File | Blob;
}

type HttpMethod = "GET" | "POST" | "DELETE";

export interface APICallsConfig {
  baseUrl: string;
  getAccessToken?: () => string | null | undefined;
  fetchImpl?: typeof fetch;
}

const normalizeBaseUrl = (baseUrl: string) => baseUrl.replace(/\/$/, "");

const request = async <T>(
  config: APICallsConfig,
  path: string,
  method: HttpMethod,
  options?: {
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
    formData?: FormData;
    includeAuth?: boolean;
  },
): Promise<T> => {
  const url = new URL(`${normalizeBaseUrl(config.baseUrl)}${path}`);

  if (options?.query) {
    Object.entries(options.query).forEach(([key, value]) => {
      if (value !== undefined) url.searchParams.set(key, String(value));
    });
  }

  const headers = new Headers();
  const includeAuth = options?.includeAuth ?? true;

  if (includeAuth && config.getAccessToken) {
    const token = config.getAccessToken();
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  let body: BodyInit | undefined;
  if (options?.formData) {
    body = options.formData;
  } else if (options?.body !== undefined) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(options.body);
  }

  const fetchImpl = config.fetchImpl ?? fetch;
  const response = await fetchImpl(url.toString(), { method, headers, body });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(
      `Request failed (${response.status}): ${text || response.statusText}`,
    );
  }

  const contentType = response.headers.get("content-type") || "";
  if (
    contentType.includes("application/json") ||
    contentType.includes("text/json")
  ) {
    return (await response.json()) as T;
  }

  return undefined as T;
};

// ArabicLanguageTranslator
export const textToSign = (config: APICallsConfig, body: TextToSignDTO) =>
  request<APIResponseDTO<string[][]>>(
    config,
    "/api/ArabicLanguageTranslator/text-to-sign",
    "POST",
    { body },
  );

export const audioToText = (
  config: APICallsConfig,
  body: TranscriptionRequest,
) =>
  request<APIResponseDTO<string | null>>(
    config,
    "/api/ArabicLanguageTranslator/audio-to-text",
    "POST",
    { body },
  );

export const lettersKeyboard = (config: APICallsConfig, letter?: string) =>
  request<APIResponseDTO<string | null>>(
    config,
    "/api/ArabicLanguageTranslator/letters-keyboard",
    "GET",
    {
      query: { letter },
    },
  );

// Auth
export const registerUser = (
  config: APICallsConfig,
  form: RegisterUserForm,
) => {
  const formData = new FormData();
  formData.append("Email", form.Email);
  formData.append("FullName", form.FullName);
  formData.append("UserName", form.UserName);
  formData.append("Password", form.Password);
  formData.append("PhoneNumber", form.PhoneNumber);
  if (form.UserImage) formData.append("UserImage", form.UserImage);

  return request<APIResponseDTO<ApplicationUserDTO>>(
    config,
    "/api/Auth/register-user",
    "POST",
    {
      formData,
      includeAuth: false,
    },
  );
};

export const loginUser = (config: APICallsConfig, body: LoginDTO) =>
  request<APIResponseDTO<TokenResponseDTO>>(
    config,
    "/api/Auth/login-user",
    "POST",
    { body, includeAuth: false },
  );

export const refreshTokens = (config: APICallsConfig, body: TokenRequestDTO) =>
  request<APIResponseDTO<TokenResponseDTO>>(
    config,
    "/api/Auth/refresh-tokens",
    "POST",
    { body, includeAuth: false },
  );

export const getResetPasswordToken = (
  config: APICallsConfig,
  body: GetResetPasswordTokenByEmailDTO,
) =>
  request<APIResponseDTO<boolean>>(
    config,
    "/api/Auth/get-reset-password-token",
    "POST",
    { body, includeAuth: false },
  );

export const resetPassword = (config: APICallsConfig, body: ResetPasswordDTO) =>
  request<APIResponseDTO<boolean>>(config, "/api/Auth/reset-password", "POST", {
    body,
    includeAuth: false,
  });

export const changePassword = (
  config: APICallsConfig,
  body: ChangePasswordDTO,
) =>
  request<APIResponseDTO<boolean>>(
    config,
    "/api/Auth/change-password",
    "POST",
    { body },
  );

export const loginGoogle = (config: APICallsConfig) =>
  request<void>(config, "/api/Auth/login-google", "GET", {
    includeAuth: false,
  });

export const googleCallback = (config: APICallsConfig) =>
  request<APIResponseDTO<ExternalLoginResponseDTO>>(
    config,
    "/api/Auth/google-callback",
    "GET",
    { includeAuth: false },
  );

export const updateUserImage = (
  config: APICallsConfig,
  form: UpdateUserImageForm,
) => {
  const formData = new FormData();
  if (form.NewImge) formData.append("NewImge", form.NewImge);

  return request<APIResponseDTO<string | null>>(
    config,
    "/api/Auth/update-user-image",
    "POST",
    { formData },
  );
};

export const logout = (config: APICallsConfig, body: TokenRequestDTO) =>
  request<void>(config, "/api/Auth/logout", "POST", { body });

export const userProfile = (config: APICallsConfig) =>
  request<APIResponseDTO<UserProfileDTO>>(
    config,
    "/api/Auth/user-profile",
    "GET",
  );

export const updateUserProfile = (
  config: APICallsConfig,
  body: UpdateUserProfileDTO,
) =>
  request<APIResponseDTO<UserProfileDTO>>(
    config,
    "/api/Auth/update-user-profile",
    "POST",
    { body },
  );

export const testAuthentication = (config: APICallsConfig) =>
  request<void>(config, "/api/Auth/test-authentication", "GET");

// SignLanguageTranslator
export const translateFrame = (config: APICallsConfig, body: FrameData) =>
  request<APIResponseDTO<string | null>>(
    config,
    "/api/SignLanguageTranslator",
    "POST",
    { body },
  );

export const finalizeSentence = (config: APICallsConfig, body: SentenceData) =>
  request<APIResponseDTO<string | null>>(
    config,
    "/api/SignLanguageTranslator/finalize-sentence",
    "POST",
    { body },
  );

export const correctSentence = (config: APICallsConfig, body: SentenceData) =>
  request<APIResponseDTO<CorrectedResponse>>(
    config,
    "/api/SignLanguageTranslator/correct-sentence",
    "POST",
    { body },
  );

export const generateAudio = (config: APICallsConfig, body: TTSRequest) =>
  request<APIResponseDTO<TTSResponse>>(
    config,
    "/api/SignLanguageTranslator/generate-audio",
    "POST",
    { body },
  );

export const textToAudio = (config: APICallsConfig, body: SentenceData) =>
  request<APIResponseDTO<TTSResponse>>(
    config,
    "/api/SignLanguageTranslator/text-to-audio",
    "POST",
    { body },
  );

// UserHistory
export const getUserHistory = (config: APICallsConfig) =>
  request<APIResponseDTO<UserRecordDTO[] | null>>(
    config,
    "/api/UserHistory/get-user-history",
    "GET",
  );

export const deleteUserHistoryRecord = (
  config: APICallsConfig,
  body: DeleteUserRecordDTO,
) =>
  request<APIResponseDTO<boolean>>(
    config,
    "/api/UserHistory/delete-user-history-record",
    "DELETE",
    { body },
  );

export const deleteAllUserHistory = (config: APICallsConfig) =>
  request<APIResponseDTO<boolean>>(
    config,
    "/api/UserHistory/delete-all-user-history",
    "DELETE",
  );
