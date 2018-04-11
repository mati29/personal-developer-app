import {AuthModel} from '../auth/auth.model';

export class TokenModel {
  exp: any;
  iat: any;
  iss: any;
  scopes: AuthModel[];
  sub: any;
}
