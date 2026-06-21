import "./UIShowcase.css";
import {
  Button,
  Input,
  Loader,
  Toast,
  Modal,
} from "../components/ui";

function UIShowcase() {
  return (
   <div className="ui-demo">
  <div className="demo-container">

    <h1 className="demo-title">
      ✨ UI Components Demo ✨
    </h1>

    <div className="component-box">
      <h3>Button</h3>
      <Button />
    </div>

    <div className="component-box">
      <h3>Input</h3>
      <Input placeholder="Enter your name" />
    </div>

    <div className="component-box">
      <h3>Loader</h3>
      <Loader />
    </div>

    <div className="component-box">
      <h3>Toast</h3>
      <Toast />
    </div>

    <div className="component-box">
      <h3>Modal</h3>
      <Modal />
    </div>

  </div>
</div>
  );
}

export default UIShowcase;