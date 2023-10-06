import axios from "axios";

export const signupcall = (value) => {
    let data = JSON.stringify(value);

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://react-assignment-api.mallow-tech.com/api/register',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

}
export const signincall = (value) => {
    let data = JSON.stringify(value);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://react-assignment-api.mallow-tech.com/api/login',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        data
    };
    return axios(config)
        .then((response) => (response))
        .catch(function (error) {
            console.log(error);
        });
}


export const logout = () => {
    let token = localStorage.getItem('token');
    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'https://react-assignment-api.mallow-tech.com/api/logout',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `${token}`
        }
    };


    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const fetchDashboardDetails = () => {
    var data = '';
    let token = localStorage.getItem('token');
    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://react-assignment-api.mallow-tech.com/api/posts-info',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `${token}`
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
}

// export const deleteBlog = (id) => {

//     let data = '';

//     let config = {
//         method: 'delete',
//         maxBodyLength: Infinity,
//         url: 'https://react-assignment-api.mallow-tech.com/api/posts/26',
//         headers: {
//             'Content-Type': 'application/json',
//             'X-Requested-With': 'XMLHttpRequest',
//             'Authorization': ''
//         },
//         data: data
//     };

//     axios(config)
//         .then(function (response) {
//             console.log(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });


// }
