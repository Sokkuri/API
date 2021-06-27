/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { BlogPost } from "@sokkuri/common";
import RequestResult from "../models/RequestResult";
import BaseDataContext from "./BaseDataContext";

export default class BlogDataContext extends BaseDataContext {
    protected controllerName: string = "blog";

    public getBlogPosts(): Promise<RequestResult<Array<BlogPost>>> {
        return super.get<BlogPost[]>("getblogposts");
    }
}
