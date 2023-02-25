// This file was generated by src/cmd/generate-error-map
// based on docs/openapi.yaml & src/cmd/generate-error-map/schema-http-code.json.
// Please DON'T change this file directly!!!
// Apply your changes in docs/openapi.yaml & src/cmd/generate-error-map/schema-http-code.json
// and run `npm run generate-error-map` instead.
export const ErrorCodes = {
  API_VALIDATION_ERROR:      'API_VALIDATION_ERROR',
  BAD_REQUEST:               'BAD_REQUEST',
  INVALID_JSON_FORMAT:       'INVALID_JSON_FORMAT',
  INVALID_EMAIL_FORMAT:      'INVALID_EMAIL_FORMAT',
  UNAUTHORIZED_REQUEST:      'UNAUTHORIZED_REQUEST',
  INVALID_OTP:               'INVALID_OTP',
  INVALID_ID:                'INVALID_ID',
  INVALID_EMAIL_OR_PASSWORD: 'INVALID_EMAIL_OR_PASSWORD',
  REQUEST_FORBIDDEN_ERROR:   'REQUEST_FORBIDDEN_ERROR',
  USER_NOT_FOUND:            'USER_NOT_FOUND',
  VERIFICATION_NOT_FOUND:    'VERIFICATION_NOT_FOUND',
  DUPLICATE_END_USER:        'DUPLICATE_END_USER',
  EXPIRED_OTP:               'EXPIRED_OTP',
  TOO_MANY_RESEND:           'TOO_MANY_RESEND',
  INTERNAL_SERVER_ERROR:     'INTERNAL_SERVER_ERROR',
  INTERNAL_UPSTREAM_ERROR:   'INTERNAL_UPSTREAM_ERROR'
};
export const ErrorCodeMap: { [key: string]: number } = {
  API_VALIDATION_ERROR:      400,
  BAD_REQUEST:               400,
  INVALID_JSON_FORMAT:       400,
  INVALID_EMAIL_FORMAT:      400,
  UNAUTHORIZED_REQUEST:      401,
  INVALID_OTP:               401,
  INVALID_ID:                401,
  INVALID_EMAIL_OR_PASSWORD: 401,
  REQUEST_FORBIDDEN_ERROR:   403,
  USER_NOT_FOUND:            404,
  VERIFICATION_NOT_FOUND:    404,
  DUPLICATE_END_USER:        409,
  EXPIRED_OTP:               410,
  TOO_MANY_RESEND:           429,
  INTERNAL_SERVER_ERROR:     500,
  INTERNAL_UPSTREAM_ERROR:   500
};