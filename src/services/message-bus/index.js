import CastReceiverManagerService from '../cast-receiver-manager';
export default function MessageBusService() {
    var _this = this;
    this.serviceId = "MessageBusService";
    this.castReceiverManagerService = null;
    this.manager = null;
    this.messageBus = null;
    this.init = function(castReceiverManagerService, settings){
        if(castReceiverManagerService instanceof CastReceiverManagerService){
            _this.castReceiverManagerService = new CastReceiverManagerService();
            _this.manager = _this.castReceiverManagerService.manager;
            _this.messageBus = _this.manager.getCastMessageBus(settings.chromecastNamespace);
        }
    }
}
