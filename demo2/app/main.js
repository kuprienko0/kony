import ControllerContent from "./components/content/controller-content.js";
import Publisher from "./helpers/publisher.js";
import ControllerModal from "./components/modal/controller-modal.js";

const publisher = new Publisher();
const controllerContent = new ControllerContent(publisher.methods);
const controllerModal = new ControllerModal(publisher.methods);