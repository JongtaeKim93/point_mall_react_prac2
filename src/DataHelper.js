let instance;
class DataHelper{
    constructor(){
        if(instance) return instance;
        instance = this;
    }

    baseURL(){
        return 'http://localhost:8002';
    }

    static baseURL(){
        const dataHelper = new DataHelper();
        return dataHelper.baseURL();
    }

}

export default DataHelper;