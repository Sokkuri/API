/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Anime, EntryReview } from "@sokkuri/common";
import RequestResult from "../models/RequestResult";
import BaseDataContext from "./BaseDataContext";

export default class AnimeDataContext extends BaseDataContext {
    protected controllerName: string = "anime";

    public async getAnime(animeId: string): Promise<RequestResult<Anime>> {
        return super.get<Anime>(`getAnime?animeId=${animeId}`);
    }

    public async getAnimesByAiredSeason(season: string, year: string): Promise<RequestResult<Anime[]>> {
        return super.get<Anime[]>(`getAnimesByAiredSeason?season=${season}&year=${year}`);
    }

    public async getSimilarAnimes(animeId: string): Promise<RequestResult<Anime[]>> {
        return super.get<Anime[]>(`getSimilarAnimes?animeId=${animeId}`);
    }

    public async GetAnimeReviews(animeId: string): Promise<RequestResult<EntryReview[]>> {
        return super.get<EntryReview[]>(`getAnimeReviews?animeId=${animeId}`);
    }
}
