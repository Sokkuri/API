/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Company } from "@sokkuri/common";
import RequestResult from "../models/RequestResult";
import BaseDataContext from "./BaseDataContext";

export default class CompanyDataContext extends BaseDataContext {
    protected controllerName: string = "company";

    public getCompany(companyId: string): Promise<RequestResult<Company>> {
        return super.get<Company>(`getCompany?companyId=${companyId}`);
    }

    public getCompanies(companyIds: string[]): Promise<RequestResult<Company[]>> {
        return super.post<Company[]>("getCompanies", companyIds);
    }

    public getCompaniesByType(type: string): Promise<RequestResult<Company[]>> {
        return super.get<Company[]>(`getCompaniesByType?type=${type}`);
    }
}
