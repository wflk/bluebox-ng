/*
  Copyright Jesus Perez <jesusprubio gmail com>
            Sergio Garcia <s3rgio.gr gmail com>

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

const brute = require('wushu').dns.brute;


module.exports.description = 'DNS zone transfer';


module.exports.options = {
  server: {
    type: 'allValid',
    description: 'Specify the DNS resolver',
  },
  domain: {
    type: 'domain',
    description: 'Domain to explore',
  },
};


module.exports.run = opts => brute(opts.server, opts.domain);