'use strict';
/**
 * @file 优图
 * @author Yourtion Guo <yourtion@gmail.com>
 */
const crypto = require('crypto');
const fetch = require('node-fetch');
const debug = require('debug')('youtu');

const AUTH_PARAMS_ERROR = -1;
const API_YOUTU_SERVER = 'http://api.youtu.qq.com/youtu/api';
// 30 days
const EXPIRED_SECONDS = 2592000;

class YouTu {

  constructor(options) {
    debug('init:', options);
    this.appId = options.appId;
    this.secretId = options.secretId;
    this.secretKey = options.secretKey;
    this.userId = options.userId;
  }

}