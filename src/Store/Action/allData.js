import store from './../store';
import axiosInstance from '../../axiosConfig/instance';

export default function AllDataAction() {

    return (dispatch) => {
        const state = store.getState()
        const favArr = state.favorite.FavoriteMovie;
        axiosInstance.get(`/movie/popular`).then((res) => {
            var Data = res.data.results
            var RetriveData=[]
            if (favArr.length) {
                RetriveData = Data.map((item) => {
                    for (var i = 0; i < favArr.length; i++) {

                        if (item.id === favArr[i].id) {
                            return { ...item, Favorite: true }

                        }
                    }
                    return { ...item, Favorite: false  }
                })
            }else{
                RetriveData = Data.map((item) => {

                    return { ...item, Favorite: false }
                })
            }
            dispatch({ type: "ALL_DATA", payload: RetriveData });
        }).catch((err) => {
            console.log(err);
        })


    }
}
