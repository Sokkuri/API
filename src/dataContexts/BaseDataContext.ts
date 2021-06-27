/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import Axios, { AxiosError } from "axios";
import ApiConfig from "../ApiConfig";
import RequestResult from "../models/RequestResult";

export default abstract class BaseDataContext {
    protected abstract controllerName: string;

    protected async get<T>(methode: string): Promise<RequestResult<T>> {
        return (await this.getAxiosInstance()).get(this.buildUrl(methode)).then(x => {
            return Promise.resolve<RequestResult<T>>({
                successfully: true,
                statusCode: x.status,
                data: x.data
            });
        }).catch((error: AxiosError) => {
            const result = this.convertError<T>(error);

            ApiConfig.config.onError?.(result.statusCode);

            return result;
        });
    }

    protected async post<T>(methode: string, data: unknown): Promise<RequestResult<T>> {
        return (await this.getAxiosInstance()).post(this.buildUrl(methode), data).then(x => {
            return Promise.resolve<RequestResult<T>>({
                successfully: true,
                statusCode: x.status,
                data: x.data
            });
        }).catch((error: AxiosError) => {
            const result = this.convertError<T>(error);

            ApiConfig.config.onError?.(result.statusCode);

            return result;
        });
    }

    protected async delete(methode: string): Promise<RequestResult<void>> {
        return (await this.getAxiosInstance()).delete(this.buildUrl(methode)).then(x => {
            return Promise.resolve<RequestResult<void>>({
                successfully: true,
                statusCode: x.status,
                data: x.data
            });
        }).catch((error: AxiosError) => {
            const result = this.convertError<void>(error);

            ApiConfig.config.onError?.(result.statusCode);

            return result;
        });
    }

    private async getAxiosInstance() {
        const instance = Axios.create();
        const token = await ApiConfig.config.onAuthenticate();

        if (token) {
            instance.defaults.headers.common["Authorization"] = (`Bearer ${token}`);
        }

        return instance;
    }

    private buildUrl(methode: string) {
        return `${ApiConfig.config.baseUrl}${this.controllerName}/${methode}`;
    }

    private convertError<T>(error: AxiosError): RequestResult<T> {
        return {
            successfully: false,
            statusCode: error.response ? error.response.status : undefined,
            data: error.response ? error.response.data : undefined
        };
    }
}
