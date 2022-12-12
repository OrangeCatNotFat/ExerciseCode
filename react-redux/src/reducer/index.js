const initState = { count: 0 }

// 判断发送来的action是不是需要的
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "add":
            return {
                count: state.count + 1
            }
        default:
            return state;
    }
}

export default reducer;