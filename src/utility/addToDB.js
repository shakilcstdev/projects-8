import { toast } from "react-toastify";

const getStoreLawyear = () => {
    const storedLayears = localStorage.getItem("lawyearList")
    if(storedLayears){
        const storedLawyeasData = JSON.parse(storedLayears);
        return storedLawyeasData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedLawyeasData = getStoreLawyear();
    if(storedLawyeasData.includes(id)){
        return false;
    }
    else{
        storedLawyeasData.push(id);
        localStorage.setItem('lawyearList', JSON.stringify(storedLawyeasData));
        return true;
    }
}

export {addToStoreDB, getStoreLawyear};