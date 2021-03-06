/**
 *
 * The Bipio profile
 *
 * Copyright (c) 2017 InterDigital, Inc. All Rights Reserved
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pod = require('bip-pod'),
	request = require('request'),
	es = require('event-stream'),
  	Profile = new Pod();

  Profile.rpc = function(action, method, sysImports, options, channel, req, res) {
  	if (method = 'get_profile') {
  		request(CFG.website_public
        + '/user/'
        + req.remoteUser.getUserName()).pipe(es.replace("<head>", "<head><base href=\""
        + CFG.website_public
        + "\">")
      ).pipe(res);
  	}
  	else {
  		this.__proto__.rpc.apply(this, arguments);
  	}
  }

  Profile.getIcon = function(accountInfo) {
    return this.options.cdnPublicBaseURL + '/img/av/' + accountInfo.getId() + '.png';
  }


// -----------------------------------------------------------------------------
module.exports = Profile;