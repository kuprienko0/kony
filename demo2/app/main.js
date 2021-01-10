import ControllerContent from "./components/content/controller-content.js";
import Publisher from "./helpers/publisher.js";
import ControllerModal from "./components/modal/controller-modal.js";
import ControllerSortSearch from "./components/sort-search/controller-sort-search.js";
import ControllerLoader from "./components/loader/controller-loader.js";
import ControllerCart from "./components/cart/controller-cart.js";
import ControllerPagination from "./components/pagination/controller-pagination.js";
import ControllerOrder from "./components/order/controller-order.js";
import ControllerBot from "./components/bot/controller-bot.js";

const publisher = new Publisher();
const controllerLoader = new ControllerLoader(publisher.methods);
const controllerCart = new ControllerCart(publisher.methods);
const controllerContent = new ControllerContent(publisher.methods);
const controllerModal = new ControllerModal(publisher.methods);
const controllerOrder = new ControllerOrder(publisher.methods);
const controllerSortSearch = new ControllerSortSearch(publisher.methods);
const controllerPagination = new ControllerPagination(publisher.methods);
const controllerBot = new ControllerBot(publisher.methods)
