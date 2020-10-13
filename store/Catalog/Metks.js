export const state = () => ({
    Metks: [
    ],
})
export const mutations  =  {
    /**
     * @param data.link -  Ссылка на данные для добавляемой метки
     * @function ResetMetks - добавляет новую метку
     */
    PushMetks(store, data){
        store.Metks.push(data);
    },
    /**
     * @function ResetMetks - Убирает все метки 
     */
    ResetMetks(store){
        store.Metks= [];
    },
    /**
     * @function  DeleteMetks - Удаляет указанную метку
     * @param {*} data.index - index Удаляймой метки 
     */
    DeleteMetks(store, data){
        store.Metks.splice(data.index , 1);
    }
}
export const actions = { 
    /**
     * 
     * @param {Array} data.ids -  Массив Id Выбранных Брендов 
     */
    SetMetksBrand({commit, rootGetters} , data){
        let brandsAll = rootGetters["Brand/BrandAll/GetBrand"];
        for (const keyBrandID in data.ids) {
            for(const keyBrand in brandsAll){
                if(data.ids[keyBrandID] == brandsAll[keyBrand].id){
                    commit("PushMetks" ,brandsAll[keyBrand]);
                    break;
                }
            }
        }
    }
}
export const getters = {
    GetMetks: s => s.Metks,
}