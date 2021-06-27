/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import Configuration from "./models/Configuration";

export default class ApiConfig {
    private static _config: Configuration;

    public static init(config: Configuration) {
        this._config = config;
    }

    static get config() {
        return this._config;
    }
}
