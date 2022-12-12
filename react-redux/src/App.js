import store from "./store";
import ComA from "./components/ComA";
import ComB from "./components/ComB";
// 导入Provider组件，达到维护store的效果
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ComA></ComA>
        <ComB></ComB>
      </div>
    </Provider>
  );
}

export default App;
