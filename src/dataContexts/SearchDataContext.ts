/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Anime, SearchResult, SearchSettings } from "@sokkuri/common";
import RequestResult from "../models/RequestResult";
import BaseDataContext from "./BaseDataContext";

export default class SearchDataContext extends BaseDataContext {
    protected controllerName: string = "search";

    public async globalSearch(searchTerm: string): Promise<RequestResult<SearchResult[]>> {
        return super.get(`globalSearch?searchTerm=${searchTerm}`);
    }

    public async companySearch(searchTerm: string): Promise<RequestResult<SearchResult[]>> {
        return super.get(`companySearch?searchTerm=${searchTerm}`);
    }

    public async animeSearch(settings: SearchSettings): Promise<RequestResult<Anime[]>> {
        return super.post<Anime[]>("animeSearch", settings);
    }
}
