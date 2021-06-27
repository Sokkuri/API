/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { UserListEntry, UserListStats } from "@sokkuri/common";
import RequestResult from "../models/RequestResult";
import BaseDataContext from "./BaseDataContext";

export default class UserListDataContext extends BaseDataContext {
    protected controllerName: string = "userList";

    public async getAnimeEntry(animeId: string): Promise<RequestResult<UserListEntry>> {
        return super.get(`getAnimeEntry?animeId=${animeId}`);
    }

    public async getAnimeEntries(userName: string): Promise<RequestResult<UserListEntry[]>> {
        return super.get(`getAnimeEntries?userName=${userName}`);
    }

    public async getAnimeEntriesByAiredSeason(season: string, year: string): Promise<RequestResult<UserListEntry[]>> {
        return super.get(`getAnimeEntriesByAiredSeason?season=${season}&year=${year}`);
    }

    public async addAnime(animeId: string): Promise<RequestResult<void>> {
        return super.post("addAnime", { animeId });
    }

    public async deleteAnime(animeId: string): Promise<RequestResult<void>> {
        return super.delete(`deleteAnime?animeId=${animeId}`);
    }

    public async updateAnimeValues(animeId: string, overallRating?: number, state?: string, progress?: number): Promise<RequestResult<void>> {
        return super.post("updateAnimeValues", { animeId, overallRating, state, progress });
    }

    public async updateAnime(userListEntryId: string, overallRating: number, state: string, progress: number, reviewContent: string): Promise<RequestResult<void>> {
        return super.post("saveChanges", { userListEntryId, overallRating, state, progress, reviewContent });
    }

    public async getAnimeUserListStats(userName: string): Promise<RequestResult<UserListStats>> {
        return super.get(`getAnimeUserListStats?userName=${userName}`);
    }
}
