"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var constants_1 = require("../assets/constants");
var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function () {
        var _this = this;
        this.socket = io(constants_1.wsUrl);
        var observable = new rxjs_1.Observable(function (observer) {
            _this.socket.on("message", function (data) {
                console.log("received a message");
                observer.next(data);
            });
            return function () { return _this.socket.disconnect(); };
        });
        var observer = {
            next: function (data) {
                _this.socket.emit("message", JSON.stringify(data));
            }
        };
        return rxjs_1.Subject.create(observer, observable);
    };
    WebsocketService = __decorate([
        core_1.Injectable()
    ], WebsocketService);
    return WebsocketService;
}());
exports.WebsocketService = WebsocketService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJzb2NrZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2QkFBMkM7QUFDM0MsaURBQTRDO0FBRzVDO0lBQUE7SUFtQkEsQ0FBQztJQWpCQyxrQ0FBTyxHQUFQO1FBQUEsaUJBZ0JDO1FBZkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsaUJBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksaUJBQVUsQ0FBQyxVQUFBLFFBQVE7WUFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUEsSUFBSTtnQkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUF4QixDQUF3QixDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLEdBQUc7WUFDYixJQUFJLEVBQUUsVUFBQyxJQUFZO2dCQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7U0FDRixDQUFDO1FBQ0YsTUFBTSxDQUFDLGNBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFsQlUsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0FtQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IHdzVXJsIH0gZnJvbSBcIi4uL2Fzc2V0cy9jb25zdGFudHNcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYnNvY2tldFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc29ja2V0O1xyXG4gIGNvbm5lY3QoKTogU3ViamVjdDxhbnk+IHtcclxuICAgIHRoaXMuc29ja2V0ID0gaW8od3NVcmwpO1xyXG4gICAgbGV0IG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIHRoaXMuc29ja2V0Lm9uKFwibWVzc2FnZVwiLCBkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlY2VpdmVkIGEgbWVzc2FnZVwiKTtcclxuICAgICAgICBvYnNlcnZlci5uZXh0KGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuICgpID0+IHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBvYnNlcnZlciA9IHtcclxuICAgICAgbmV4dDogKGRhdGE6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJtZXNzYWdlXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBTdWJqZWN0LmNyZWF0ZShvYnNlcnZlciwgb2JzZXJ2YWJsZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==