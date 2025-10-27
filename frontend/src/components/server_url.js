const PROD_SERVER = "https://sail.cs.illinois.edu";
const BUILD_OVERRIDE = process.env.REACT_APP_SERVER_URL || null;

const SERVER_URL = BUILD_OVERRIDE || window.location.origin;

export { PROD_SERVER };
export default SERVER_URL;