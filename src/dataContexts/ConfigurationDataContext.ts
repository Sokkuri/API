/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { SeasonInfo, VersionInfo } from "@sokkuri/common";
import RequestResult from "../models/RequestResult";
import BaseDataContext from "./BaseDataContext";

export default class ConfigurationDataContext extends BaseDataContext {
    protected controllerName: string = "configuration";

    public getVersion(): Promise<RequestResult<VersionInfo>> {
        return super.get<VersionInfo>("getVersion");
    }

    public getTags(): Promise<RequestResult<string[]>> {
        return super.get<string[]>("getTags");
    }

    public getSeasons(): Promise<RequestResult<SeasonInfo>> {
        return super.get<SeasonInfo>("getSeasons");
    }
}
