import React from "react";
import { connect } from "react-redux";

class ComB extends React.Component {
    render() {
        return (
            <div>{this.props.count}</div>
        )
    }
}

// 接受两个参数
const mapStateToProps = (state) => {

    // return了才能获取到更新的数据
    return state;
}

// B组件属于接收方，需要实现connect方法的第一个参数
export default connect(mapStateToProps)(ComB);