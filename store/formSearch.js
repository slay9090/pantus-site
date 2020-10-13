export const state = () => ({
    /**
     * @property Минимальная стоимость 
     */
    MinValue: 0,
    /**
     * @property Максимальная стоимость 
     */
    MaxValue: 60000,
    /**
     * @property Массив выбраных Брендов
     */
    BrandsChecked: [],
    /**
     * @property Тип сортировки ASC DESC
     */
    SortType: "",
    /**
     * @property Названия поля которое сортируем 
     */
    SortName: ""
})
export const mutations  =  {
    /**
     * @function SetMinValue - Сохраняет минимальную стоимость
     * @param {Number} data 
     */
    SetMinValue(store, data){
        store.MinValue = data;
    },
    /**
     * @function SetMaxValue - Сохраняет максимальную стоимость
     * @param {Number} data 
     */
    SetMaxValue(store, data){
        store.MaxValue = data;
    },
    /**
     * @function SetBrandsChecked - Добавляет указанный бренд в выбранные
     * @param {Number} data 
     */
    SetBrandsChecked(store, data){
        store.BrandsChecked.push(data);
    },
    /**
     * @function SetBrandsChecked - Сохраняет бренды в выбранные
     * @param {Number} data 
     */
    SetAllBrandsChecked(store, data){
        store.BrandsChecked = data;
    },
    /**
     * @function SetSort - Сохраняет новую сортировку
     * @param {String} data.SortType - Тип сортировки
     * @param  {String} data.SortName - Название сортировки
     */
    SetSort(store, data){
        store.SortType = data.SortType;
        store.SortName = data.SortName;
    },
        /**
     * @function SetSort - Сохраняет новый тип сортировки
     * @param {String} data.SortType - Тип сортировки
     */
    SetSortType(store, data){
        store.SortType = data.SortType;
    },
    /**
     * @function RemoreBrandsChecked - Удаляет выбранный бренд по index
     * @param {Number} data.id - Id Удаляемого Checked у Бренда 
     */
    RemoreBrandsChecked(store, data){
        let index = store.BrandsChecked.indexOf(data.id);
        store.BrandsChecked.splice(index, 1);
    }
}
export const getters = {
    /**
     * @function GetMinValue - возвращает минимальную стоимость
     */
    GetMinValue: s => s.MinValue,
    /**
     * @function GetMinValue - возвращает максимальную стоимость
     */
    GetMaxValue: s => s.MaxValue,
    /**
     * @function GetMinValue - возвращает массив выбранных брендов
     */
    GetBrandsChecked: s => s.BrandsChecked,
    /**
     * @function GetMinValue - название поля по котором идет сортировка
     */
    GetSortName: s => s.SortName,
    /**
     * @function GetMinValue - название тип сортировки
     */
    GetSortType: s => s.SortType,
}