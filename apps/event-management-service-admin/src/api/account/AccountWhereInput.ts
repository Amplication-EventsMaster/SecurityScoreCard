import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  accessToken?: StringNullableFilter;
  comment?: StringFilter;
  expiresAt?: IntNullableFilter;
  id?: StringFilter;
  idToken?: StringNullableFilter;
  provider?: StringFilter;
  providerAccountId?: StringFilter;
  refreshToken?: StringNullableFilter;
  scope?: StringNullableFilter;
  sessionState?: StringNullableFilter;
  tokenType?: StringNullableFilter;
  typeField?: StringFilter;
  user?: UserWhereUniqueInput;
};
