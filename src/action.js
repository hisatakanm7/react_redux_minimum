export const ADD_LIST = 'ADD_LIST';


export const addList = (data) => {
    console.log("action");
    return {
        type: 'ADD_LIST',
        data
    }
};