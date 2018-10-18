export const port = "4000";
export const serverMachineIP = "10.152.3.177";
// export const serverMachineIP = "25.39.177.156";
export const serverUrl = `http://${serverMachineIP}:${port}/api`;
export const wsUrl = `ws://${serverMachineIP}:${port}`;
export const questionRoute = [serverUrl, "question"].join("/");
