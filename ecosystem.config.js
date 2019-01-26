module.exports = {
  /**
   * @author Abhishar Jangir
   * @description PM2 Application Configuration
   */
  apps: [
    {
      name: "react2.0",
      script: "server/index.js",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      combine_logs: true
    }
  ]
};
