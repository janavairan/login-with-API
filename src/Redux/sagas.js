import { call, put, take, takeEvery } from "redux-saga/effects"
import actions, { LogoutFailure } from "./action";
import { SignupSuccess, SignupFailure, SigninFailure } from "./action"
import { logout, signincall, signupcall, fetchDashboardDetails, createpostcall, profileupdatecall } from "./helper";
// import handleSubmit from '../components/posts'
import axios from "axios";

function* signupSaga(action) {
    try {

        const response = yield call(() => signupcall(action.payload))
        const data = response.data
        if (data.success) {
            yield put(SignupSuccess(data.user))

        }
        else {
            yield put(SignupFailure(data.error))
        }
    }
    catch (error) {
        yield put(SignupFailure(error.message))

    }
}

function* signinSaga(action) {
    try {
        const response = yield call(() => signincall(action.payload.value))
        yield put({
            type: actions.SIGNIN_FORM_SUCCESS,
            payload: response,
        })

        console.log(response?.headers?.authorization, 'calling')
        // console.log('profile', response?.data?.profile_url)

        if (response) {
            localStorage.setItem('token', response?.headers?.authorization)
            localStorage.setItem('users', JSON.stringify(response.data))
            yield put({ type: actions.SIGNIN_FORM_SUCCESS, payload: response.data })
        }
    }
    catch (error) {
        yield put(SigninFailure(error.message))
    }
}

function* logoutSaga(action) {
    // console.log('Logoutsaga')
    try {
        const response = yield call(() => logout())
        yield put({
            type: actions.LOGOUT_FORM_SUCCESS,
            payload: response,
        })

        action.payload('/signin')

    }
    catch (error) {
        yield put(LogoutFailure(error.message))
    }
}

function* dashboardsaga() {
    try {
        const response = yield call(() => fetchDashboardDetails());
        yield put({ type: actions.FETCH_TABLE_DETAILS_SUCCESS, payload: response.data });
        console.log(dashboardsaga)
    }
    catch (error) {
        console.log(error);
    }

}
function* profileupdatesaga(params) {
    try {
        console.log(params, "profilecall")
        let token = localStorage.getItem('token');
        let data = new FormData();
        data.append('first_name', params.payload.first_name);
        data.append('last_name', params.payload.last_name);
        data.append('image', params.payload.image, `2.jpg${params.payload.first_name}`);
        data.append('_method', 'patch');
        let response = yield call(axios.post, 'https://react-assignment-api.mallow-tech.com/api/update/profile', data, {
            headers: {
                'Content-Type': 'application/form-data',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `${token}`
            }

        })
        console.log(response, "profile response")
        yield put({
            type: actions.PROFILE_UPLOAD_SUCCESS,
            payload: response,

        })
    }

    catch (error) {
        console.log(error)
    }
}

function* createBlogsaga(params) {
    console.log(params, "creactsagacall")
    try {
        let token = localStorage.getItem('token');
        let data = new FormData();
        data.append('name', params.payload.name);
        data.append('content', params.payload.content);
        data.append('image', params.payload.image, `2.jpg${params.payload.first_name}`);
        let response = yield call(axios.post, 'https://react-assignment-api.mallow-tech.com/api/posts', data, {
            headers: {
                'Content-Type': 'application/form-data',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `${token}`

            }
        })
        let responses = yield call(axios.get, `https://react-assignment-api.mallow-tech.com/api/posts?page=1`,
            {
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/form-data',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            })
        yield put({
            type: actions.GET_POST_SUCCESS, payload: response.data.data
        })

        console.log(params)
    }
    catch (error) {
        console.log(error)
    }
}
function* getPostsSaga(action) {
    try {
        const token = localStorage.getItem("token")
        const response = yield call(
            axios.get,
            `https://react-assignment-api.mallow-tech.com/api/posts?page=${action.payload}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/data',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            }
        );
        const posts = response.data.data;
        yield put({ type: actions.GET_POST_SUCCESS, payload: response.data.data })
    }
    catch (error) {
        console.error("An error occurred:", error);
    }
};

function* publishDataSaga(action) {
    try {
        const token = localStorage.getItem('token');

        const response = yield call(
            axios.post,
            `https://react-assignment-api.mallow-tech.com/api/posts/${action.payload.postId}/publish/${!action.payload.isPublised}`,
            null,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        console.log("Published or unpusblish successfully");
        const response1 = yield call(
            axios.get,
            `https://react-assignment-api.mallow-tech.com/api/posts?page=1`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/data',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            }
        );
        yield put({ type: actions.GET_POST_SUCCESS, payload: response1.data.data })
        console.log("Received posts:", ...response1.data.data);
    }
    catch (error) {
        console.log(error);
    }
}
function* deletesaga(action) {
    try {
        const token = localStorage.getItem('token');
        console.log(action);

        const response = yield call(
            axios.delete,
            `https://react-assignment-api.mallow-tech.com/api/posts/${action.payload}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        console.log("deleted successfully");
        const response1 = yield call(
            axios.get,
            `https://react-assignment-api.mallow-tech.com/api/posts?page=1`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/data',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            }
        );
        yield put({ type:actions.GET_POST_SUCCESS, payload: response1.data.data })
        console.log("Received posts:", ...response1.data.data);

    }
    catch (err) {
        console.log(err);
    }
}
function* fetchPublicPosts(action) {
    try {
        const token = localStorage.getItem("token")
        const response = yield call(
            axios.get,
            `https://react-assignment-api.mallow-tech.com/api/public/posts?offset=${action.payload}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/data',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            }
        );

        yield put({ type: actions.GET_PUBLIC_POST_SUCCESS, payload: response.data })


    } catch (error) {
        console.error("An error occurred:", error);
    }
};

function* getSinglePublicPost(action) {
    try {
        const token = localStorage.getItem("token")
        console.log(action);
        const response = yield call(
            axios.get,
            `https://react-assignment-api.mallow-tech.com/api/public/posts/${action.payload.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/data',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            }
        );

        yield put({ type: actions.STORE_SINGLE_POST, payload: response.data })
        console.log("Sucessfully fetched the single post : ", response.data);

    } catch (error) {
        console.error("An error occurred:", error);
    }
}


function* rootSaga() {
    yield takeEvery(actions.SIGNIN_FORM_REQUEST, signinSaga);
    yield takeEvery(actions.SIGNUP_FORM_REQUEST, signupSaga);
    yield takeEvery(actions.LOGOUT_FORM_REQUEST, logoutSaga);
    yield takeEvery(actions.FETCH_TABLE_DETAILS, dashboardsaga);
    yield takeEvery(actions.PROFILE_UPLOAD_REQUEST, profileupdatesaga);
    yield takeEvery(actions.CREATE_BLOG_REQUEST, createBlogsaga)
    yield takeEvery(actions.GET_POST_REQUEST, getPostsSaga);
    yield takeEvery(actions.PUBLISH_DATA, publishDataSaga);
    yield takeEvery(actions.DELETE_BLOG_REQUEST, deletesaga);
    yield takeEvery(actions.GET_PUBLIC_POST, fetchPublicPosts);
    yield takeEvery(actions.GET_SINGLE_PUBLIC_POST, getSinglePublicPost)
}

export default rootSaga;