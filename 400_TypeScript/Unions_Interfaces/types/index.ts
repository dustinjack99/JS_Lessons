export type UserContactInfo = {
  name: string;
  email: string;
};

type UserInfoOutcomeError = ["error", Error];
type UserInfoOutcomeSuccess = ["success", { name: string; email: string }];

export type UserInfoOutcome = UserInfoOutcomeError | UserInfoOutcomeSuccess;
