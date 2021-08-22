import {FETCH_NEWS} from "./actionTypes";

export const fetchNews = () => {
    return async dispatch => {
        const response = fetch("https://diplomprjc.herokuapp.com/api/news")
            .then((resp) => {
                if (resp.ok) {
                    return resp.json()
                } else {
                    throw new Error(resp.statusText)
                }
            })
            .then(resp => {
                resp.forEach((_,index) => {
                    let newsDate = new Date(resp[index].date)
                    resp[index].isLoaded = true
                    return resp[index].date = newsDate.toLocaleDateString('en-US',{year: 'numeric', month: 'long', day: 'numeric'}) + ' •'
                })
                console.log(resp)
                dispatch({type: FETCH_NEWS, payload: resp})
            }).catch(err => {console.log('err: ',err)});
    }
}