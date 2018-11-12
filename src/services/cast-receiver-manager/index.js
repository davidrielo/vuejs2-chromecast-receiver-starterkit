/* eslint-disable */
export default function CastReceiverManagerService(){
    this.serviceId = "CastReceiverManagerService";
    window.cast.receiver.logger.setLevelValue(window.cast.receiver.LoggerLevel.NONE);
    this.manager = cast.receiver.CastReceiverManager.getInstance();
    this.manager.onReady = function(event){
        console.log('Received Ready event: ' + JSON.stringify(event.data));
        this.manager.setApplicationState("Application status is ready...");
    };
    this.manager.onSenderConnected = function(event){
        console.log('Received Sender Connected event: ' + event.data);
        console.log(this.manager.getSender(event.data).userAgent);
    };
    this.manager.onSenderDisconnected = function(event){
        if (this.manager.getSenders().length == 0 && 
            event.reason == window.cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
            window.close();
        }
    };
    this.manager.onSystemVolumeChanged = function(event){
        console.log('Received System Volume Changed event: ' + event.data['level'] + ' ' + event.data['muted']);
    };
}
