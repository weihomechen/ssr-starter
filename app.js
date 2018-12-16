module.exports = app => {
  if (!global.__ENV__) global.__ENV__ = app.config.env;
};
