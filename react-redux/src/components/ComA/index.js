import React from "react";

// 导入connect
import { connect } from "react-redux";

class ComA extends React.Component {
    handleClick = () => {
        console.log(this.props);
        this.props.sendAction(); // 发送action
    }

    render() {
        return (
            <button onClick={this.handleClick}> + </button>
        )
    }
}

// 函数返回值是一个对象
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: "add"
            })
        }
    }
}

// A是发送方，所以要实现connect第二个参数
export default connect(null, mapDispatchToProps)(ComA);;