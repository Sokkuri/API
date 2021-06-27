/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import RequestResult from "../models/RequestResult";
import BaseDataContext from "./BaseDataContext";

export default class AccountDataContext extends BaseDataContext {
    protected controllerName: string = "account";

    public async register(userName: string, email: string, password: string, captchaResponse: string): Promise<RequestResult<void>> {
        return super.post<void>("register", { userName, email, password, captchaResponse });
    }

    public async confirmEmail(id: string, token: string, email?: string): Promise<RequestResult<void>> {
        return super.post<void>("confirmEmail", { id, token, email });
    }

    public async forgotPassword(email: string, captchaResponse: string): Promise<RequestResult<void>> {
        return super.post<void>("forgotPassword", { email, captchaResponse });
    }

    public async resetPassword(id: string, token: string, newPassword: string): Promise<RequestResult<void>> {
        return super.post<void>("resetPassword", { id, token, newPassword });
    }
}
