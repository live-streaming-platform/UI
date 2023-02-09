import {properties} from "../properties/properties";
import {UriComponentBuilder} from "../utils/http/UriComponentBuilder";
import axios, {AxiosResponse} from 'axios';

axios.interceptors.response.use(promise => {
    return promise;
}, error => {
    if (error.response.status === 401) {
        return error.response
    }
})

export function authorize(username: string, password: string) {

    return axios.post(
        UriComponentBuilder
            .fromHttpUrl(properties.authApiBaseUri)
            .withPath(properties.loginPath)
            .toString(),
        {
            username: username, password: password
        },
        {
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8',
            },
        }
    );

}

export function refreshToken(refreshToken: string): Promise<AxiosResponse> {
    return axios.post(
        UriComponentBuilder
            .fromHttpUrl(properties.authApiBaseUri)
            .withPath(properties.refreshTokenPath)
            .toString(),
        {token: refreshToken},
        {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        }
    )
}

export function getUserData(authToken: string): Promise<AxiosResponse> {
    return axios.get(
        UriComponentBuilder
            .fromHttpUrl(properties.dataApiBaseUri)
            .withPath(properties.currentUserInfoPath)
            .toString(),
        {
            headers:{
                'Authorization': `Bearer ${authToken}`,
            },
        }
    )
}

